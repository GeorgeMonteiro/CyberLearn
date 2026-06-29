import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { randomUUID } from 'crypto';
import { getDb } from '../db.js';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'name, email e password são obrigatórios' });
    }

    const db = await getDb();
    const stmt = db.prepare('SELECT id FROM users WHERE email = ?');
    stmt.bind([email]);
    if (stmt.step()) {
      stmt.free();
      return res.status(409).json({ error: 'E-mail já cadastrado' });
    }
    stmt.free();

    const id = randomUUID();
    const password_hash = bcrypt.hashSync(password, 10);
    db.run('INSERT INTO users (id, name, email, password_hash) VALUES (?, ?, ?, ?)', [id, name, email, password_hash]);

    const user = db.prepare('SELECT id, name, email, created_at FROM users WHERE id = ?');
    user.bind([id]);
    user.step();
    const userData = user.getAsObject();
    user.free();

    const token = jwt.sign({ userId: userData.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ user: userData, token });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'email e password são obrigatórios' });
    }

    const db = await getDb();
    const stmt = db.prepare('SELECT id, name, email, password_hash FROM users WHERE email = ?');
    stmt.bind([email]);
    if (!stmt.step()) {
      stmt.free();
      return res.status(401).json({ error: 'E-mail ou senha inválidos' });
    }

    const user = stmt.getAsObject();
    stmt.free();

    if (!bcrypt.compareSync(password, user.password_hash)) {
      return res.status(401).json({ error: 'E-mail ou senha inválidos' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router;
