BEGIN;

CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    avatar_url      TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users (email);

CREATE TABLE modules (
    id              VARCHAR(50) PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    icon            VARCHAR(100) NOT NULL,
    trail           VARCHAR(20) NOT NULL CHECK (trail IN ('iniciante', 'especializada')),
    banner          TEXT,
    lesson_count    INT NOT NULL DEFAULT 9
);

CREATE TABLE lessons (
    id              VARCHAR(50) PRIMARY KEY,
    module_id       VARCHAR(50) NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
    title           VARCHAR(255) NOT NULL,
    icon            VARCHAR(100) NOT NULL,
    description     TEXT,
    lesson_order    INT NOT NULL,
    is_exercise     BOOLEAN NOT NULL DEFAULT FALSE,
    UNIQUE (module_id, lesson_order)
);

CREATE INDEX idx_lessons_module ON lessons (module_id);

CREATE TABLE lesson_steps (
    id              SERIAL PRIMARY KEY,
    lesson_id       VARCHAR(50) NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    step_order      INT NOT NULL,
    step_type       VARCHAR(20) NOT NULL CHECK (step_type IN ('intro', 'content', 'diagram', 'question', 'conclusion')),
    title           VARCHAR(255),
    text            TEXT,
    icon            VARCHAR(100),
    highlight       TEXT,
    diagram_type    VARCHAR(20) CHECK (diagram_type IN ('flow', 'sequence', 'io')),
    diagram_items   JSONB,
    UNIQUE (lesson_id, step_order)
);

CREATE INDEX idx_lesson_steps_lesson ON lesson_steps (lesson_id);

CREATE TABLE lesson_questions (
    id              SERIAL PRIMARY KEY,
    lesson_step_id  INT NOT NULL REFERENCES lesson_steps(id) ON DELETE CASCADE,
    question        TEXT NOT NULL,
    options         JSONB NOT NULL,
    correct_index   INT NOT NULL,
    explanation     TEXT
);

CREATE TABLE mock_questions (
    id              SERIAL PRIMARY KEY,
    module_id       VARCHAR(50) NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
    question        TEXT NOT NULL,
    options         JSONB NOT NULL,
    correct_answer  INT NOT NULL,
    explanation     TEXT
);

CREATE INDEX idx_mock_questions_module ON mock_questions (module_id);

CREATE TABLE assessment_questions (
    id              SERIAL PRIMARY KEY,
    module_id       VARCHAR(50) NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
    topic           VARCHAR(255),
    question        TEXT NOT NULL,
    options         JSONB NOT NULL,
    correct_answer  INT NOT NULL,
    explanation     TEXT
);

CREATE INDEX idx_assessment_questions_module ON assessment_questions (module_id);

CREATE TABLE user_progress (
    id                  SERIAL PRIMARY KEY,
    user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    module_id           VARCHAR(50) NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
    completed_lessons   JSONB NOT NULL DEFAULT '[]',
    quiz_score          INT,
    quiz_total          INT,
    quiz_percentage     INT,
    UNIQUE (user_id, module_id)
);

CREATE INDEX idx_user_progress_user ON user_progress (user_id);
CREATE INDEX idx_user_progress_module ON user_progress (module_id);

COMMIT;
