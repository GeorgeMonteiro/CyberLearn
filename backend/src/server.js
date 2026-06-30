import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { getDb } from './db.js';
import authRoutes from './routes/auth.js';
import aiQuizRoutes from './routes/aiQuiz.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/ai-quiz', aiQuizRoutes);

app.get('/api/health', async (req, res) => {
  try {
    await getDb();
    res.json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
