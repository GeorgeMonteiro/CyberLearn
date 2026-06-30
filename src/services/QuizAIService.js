import API_BASE_URL from '../config/api';

const questionCache = new Map();

function cacheKey(topic, difficulty, quantity) {
  return `${topic}|${difficulty}|${quantity}`;
}

export function clearAICache() {
  questionCache.clear();
}

export async function fetchAIQuestions(topic, difficulty = 'medium', quantity = 10) {
  const key = cacheKey(topic, difficulty, quantity);
  if (questionCache.has(key)) {
    return questionCache.get(key);
  }

  const res = await fetch(`${API_BASE_URL}/api/ai-quiz/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, difficulty, quantity }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Erro ao gerar quiz com IA');
  }

  questionCache.set(key, data.questions);
  return data.questions;
}
