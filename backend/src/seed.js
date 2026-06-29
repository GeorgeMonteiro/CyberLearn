import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';
import { getDb, saveDb } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const MODULES = [
  { id: 'logica',    title: 'Lógica de Programação',          icon: 'code-slash',         trail: 'iniciante',      banner: 'Aprenda os fundamentos da lógica de programação, essenciais para qualquer área de tecnologia.' },
  { id: 'redes',     title: 'Fundamentos de Redes',            icon: 'wifi',               trail: 'iniciante',      banner: 'Entenda como os dispositivos se comunicam em rede, desde IP até protocolos.' },
  { id: 'seguranca', title: 'Fundamentos de Cibersegurança',   icon: 'shield-checkmark',   trail: 'iniciante',      banner: 'Conceitos básicos de segurança digital, ameaças e boas práticas.' },
  { id: 'cti',       title: 'Cyber Threat Intelligence',       icon: 'eye-outline',        trail: 'especializada',  banner: 'Inteligência de ameaças cibernéticas, coleta e análise de indicadores.' },
  { id: 'redteam',   title: 'Red Team',                        icon: 'flame-outline',      trail: 'especializada',  banner: 'Testes de invasão, exploração de vulnerabilidades e simulação de ataques.' },
  { id: 'blueteam',  title: 'Blue Team',                       icon: 'water-outline',      trail: 'especializada',  banner: 'Defesa cibernética, monitoramento de redes e resposta a incidentes.' },
  { id: 'gestao',    title: 'Gestão de Vulnerabilidades',      icon: 'warning-outline',    trail: 'especializada',  banner: 'Identificação, classificação e remediação de vulnerabilidades.' },
  { id: 'grc',       title: 'Governança, Risco e Conformidade',icon: 'briefcase-outline',  trail: 'especializada',  banner: 'Governança de TI, gestão de riscos e conformidade regulatória.' },
];

async function seed() {
  try {
    const db = await getDb();
    const schema = readFileSync(join(__dirname, '..', '..', 'database', 'schema.sqlite.sql'), 'utf-8');
    db.exec(schema);

    for (const mod of MODULES) {
      db.run(
        'INSERT OR IGNORE INTO modules (id, title, icon, trail, banner) VALUES (?, ?, ?, ?, ?)',
        [mod.id, mod.title, mod.icon, mod.trail, mod.banner]
      );
    }
    console.log(`Módulos inseridos: ${MODULES.length}`);

    const hash = bcrypt.hashSync('123456', 10);
    const id = randomUUID();
    db.run('INSERT OR IGNORE INTO users (id, name, email, password_hash) VALUES (?, ?, ?, ?)', [id, 'Usuário Teste', 'teste@cyberlearn.com', hash]);
    console.log('Usuário teste criado: teste@cyberlearn.com / 123456');

    saveDb();
    console.log('Seed concluído com sucesso!');
  } catch (err) {
    console.error('Erro no seed:', err);
    process.exit(1);
  }
}

seed();
