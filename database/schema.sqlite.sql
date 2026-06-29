PRAGMA foreign_keys = ON;

CREATE TABLE users (
    id              TEXT PRIMARY KEY,
    name            TEXT NOT NULL,
    email           TEXT NOT NULL UNIQUE,
    password_hash   TEXT NOT NULL,
    avatar_url      TEXT,
    reset_token     TEXT,
    reset_token_expires TEXT,
    created_at      TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at      TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_users_email ON users (email);

CREATE TABLE modules (
    id              TEXT PRIMARY KEY,
    title           TEXT NOT NULL,
    icon            TEXT NOT NULL,
    trail           TEXT NOT NULL CHECK (trail IN ('iniciante', 'especializada')),
    banner          TEXT,
    lesson_count    INTEGER NOT NULL DEFAULT 9
);

CREATE TABLE lessons (
    id              TEXT PRIMARY KEY,
    module_id       TEXT NOT NULL REFERENCES modules(id),
    title           TEXT NOT NULL,
    icon            TEXT NOT NULL,
    description     TEXT,
    lesson_order    INTEGER NOT NULL,
    is_exercise     INTEGER NOT NULL DEFAULT 0,
    UNIQUE (module_id, lesson_order)
);

CREATE INDEX idx_lessons_module ON lessons (module_id);

CREATE TABLE lesson_steps (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson_id       TEXT NOT NULL REFERENCES lessons(id),
    step_order      INTEGER NOT NULL,
    step_type       TEXT NOT NULL CHECK (step_type IN ('intro', 'content', 'diagram', 'question', 'conclusion')),
    title           TEXT,
    text            TEXT,
    icon            TEXT,
    highlight       TEXT,
    diagram_type    TEXT CHECK (diagram_type IN ('flow', 'sequence', 'io')),
    diagram_items   TEXT,
    UNIQUE (lesson_id, step_order)
);

CREATE INDEX idx_lesson_steps_lesson ON lesson_steps (lesson_id);

CREATE TABLE lesson_questions (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson_step_id  INTEGER NOT NULL REFERENCES lesson_steps(id),
    question        TEXT NOT NULL,
    options         TEXT NOT NULL,
    correct_index   INTEGER NOT NULL,
    explanation     TEXT
);

CREATE TABLE mock_questions (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    module_id       TEXT NOT NULL REFERENCES modules(id),
    question        TEXT NOT NULL,
    options         TEXT NOT NULL,
    correct_answer  INTEGER NOT NULL,
    explanation     TEXT
);

CREATE INDEX idx_mock_questions_module ON mock_questions (module_id);

CREATE TABLE assessment_questions (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    module_id       TEXT NOT NULL REFERENCES modules(id),
    topic           TEXT,
    question        TEXT NOT NULL,
    options         TEXT NOT NULL,
    correct_answer  INTEGER NOT NULL,
    explanation     TEXT
);

CREATE INDEX idx_assessment_questions_module ON assessment_questions (module_id);

CREATE TABLE user_progress (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id             TEXT NOT NULL REFERENCES users(id),
    module_id           TEXT NOT NULL REFERENCES modules(id),
    completed_lessons   TEXT NOT NULL DEFAULT '[]',
    quiz_score          INTEGER,
    quiz_total          INTEGER,
    quiz_percentage     INTEGER,
    UNIQUE (user_id, module_id)
);

CREATE INDEX idx_user_progress_user ON user_progress (user_id);
CREATE INDEX idx_user_progress_module ON user_progress (module_id);
