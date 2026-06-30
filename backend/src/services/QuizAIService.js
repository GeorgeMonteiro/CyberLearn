const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const SYSTEM_INSTRUCTION = `You are a Brazilian Portuguese quiz generator for cybersecurity education.
You must respond ONLY with valid JSON, no markdown, no code fences, no extra text.`;

function buildPrompt({ topic, difficulty, quantity }) {
  const difficultyMap = {
    easy: 'easy — basic concepts, suitable for beginners',
    medium: 'medium — requires some understanding of the topic',
    hard: 'hard — deep technical knowledge required',
  };

  return `Generate exactly ${quantity} multiple-choice questions about "${topic}" at ${difficultyMap[difficulty] || difficultyMap.medium}.

Return a JSON array. Each object must have exactly these fields:
- id (number, sequential starting at 1)
- moduleId (string: "${topic}")
- topic (string: subtopic classification)
- question (string)
- options (array of exactly 4 strings)
- correctAnswer (number, 0-3 index of the correct option)
- explanation (string, detailed in Brazilian Portuguese)

Rules:
- Questions must be in Brazilian Portuguese
- Each must have exactly 4 options, only one correct
- correctAnswer must be 0, 1, 2, or 3
- Mix of recall, comprehension, and application questions
- Vary the position of the correct answer across questions`;
}

export async function generateQuestions(topic, difficulty = 'medium', quantity = 10) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY não configurada no .env');
  }

  const response = await fetch(GEMINI_API_URL, {
    signal: AbortSignal.timeout(30000),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
      contents: [{ parts: [{ text: buildPrompt({ topic, difficulty, quantity }) }] }],
      generationConfig: {
        response_mime_type: 'application/json',
        temperature: 0.9,
        topP: 0.95,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const err = new Error(`Gemini API error (${response.status}): ${errorText}`);

    if (response.status === 429) {
      let delay = 30;
      try {
        const errJson = JSON.parse(errorText);
        const retryInfo = errJson?.error?.details?.find(
          (d) => d['@type'] === 'type.googleapis.com/google.rpc.RetryInfo'
        );
        if (retryInfo?.retryDelay) {
          const parsed = parseFloat(retryInfo.retryDelay);
          if (!isNaN(parsed)) delay = Math.ceil(parsed) + 1;
        }
      } catch { /* fallback para 30s */ }

      err.statusCode = 429;
      err.retryDelay = delay;
    }

    throw err;
  }

  const data = await response.json();

  const blockReason = data?.promptFeedback?.blockReason;
  if (blockReason) {
    throw new Error(`Gemini bloqueou a requisição (${blockReason}). Tente um tema diferente ou reduza a dificuldade.`);
  }

  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!rawText) {
    throw new Error('Resposta vazia da API Gemini — possivelmente bloqueado por safety');
  }

  let questions;
  try {
    questions = JSON.parse(rawText);
  } catch {
    throw new Error('Resposta da Gemini não é JSON válido');
  }

  validateQuestions(questions, quantity);

  return questions;
}

function validateQuestions(questions, expectedQuantity) {
  if (!Array.isArray(questions)) {
    throw new Error('Resposta não é um array');
  }
  if (questions.length === 0) {
    throw new Error('Array de questões vazio');
  }
  if (questions.length > expectedQuantity * 2) {
    throw new Error(`Muitas questões geradas (${questions.length}), provável alucinação`);
  }

  for (const q of questions) {
    if (!q.question || typeof q.question !== 'string') {
      throw new Error('Questão sem campo "question" válido');
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      throw new Error(`Questão "${q.question.slice(0, 40)}..." não tem exatamente 4 options`);
    }
    const normalizedAnswer = Number(q.correctAnswer);
    if (!Number.isInteger(normalizedAnswer) || normalizedAnswer < 0 || normalizedAnswer > 3) {
      throw new Error(`Questão "${q.question.slice(0, 40)}..." tem correctAnswer inválido`);
    }
    q.correctAnswer = normalizedAnswer;
    if (!q.explanation || typeof q.explanation !== 'string') {
      throw new Error(`Questão "${q.question.slice(0, 40)}..." sem explanation`);
    }
  }
}
