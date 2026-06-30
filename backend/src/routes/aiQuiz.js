import { Router } from 'express';
import { generateQuestions } from '../services/QuizAIService.js';

const router = Router();

async function attemptGenerate(topic, diff, qty, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await generateQuestions(topic, diff, qty);
    } catch (err) {
      if (err.statusCode === 429 && attempt < maxRetries) {
        const delay = (err.retryDelay || 30) * attempt;
        console.log(`Quota excedida. Tentativa ${attempt}/${maxRetries}. Aguardando ${delay}s...`);
        await new Promise((resolve) => setTimeout(resolve, delay * 1000));
        continue;
      }
      throw err;
    }
  }
}

router.post('/generate', async (req, res) => {
  try {
    const { topic, difficulty, quantity } = req.body;

    if (!topic || typeof topic !== 'string' || !topic.trim()) {
      return res.status(400).json({ error: 'Campo "topic" é obrigatório' });
    }

    const trimmedTopic = topic.trim();

    const validDifficulties = ['easy', 'medium', 'hard'];
    const diff = validDifficulties.includes(difficulty) ? difficulty : 'medium';

    const qty = Number.isInteger(quantity) && quantity >= 1 && quantity <= 30 ? quantity : 10;

    const questions = await attemptGenerate(trimmedTopic, diff, qty);

    res.json({ questions, topic: trimmedTopic, difficulty: diff, quantity: questions.length });
  } catch (err) {
    console.error('AI Quiz error:', err);
    res.status(502).json({ error: err.message });
  }
});

export default router;
