CREATE TABLE request_replies_new (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  user_id TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  recipient_email TEXT NOT NULL,
  resend_id TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

INSERT INTO request_replies_new (
  id,
  project_id,
  user_id,
  subject,
  message,
  recipient_email,
  resend_id,
  created_at
)
SELECT
  id,
  project_id,
  user_id,
  subject,
  message,
  recipient_email,
  resend_id,
  created_at
FROM request_replies;

DROP TABLE request_replies;
ALTER TABLE request_replies_new RENAME TO request_replies;
CREATE INDEX idx_request_replies_project_id ON request_replies(project_id);

CREATE TABLE sessions_new (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO sessions_new (id, user_id, expires_at, created_at)
SELECT id, user_id, expires_at, created_at
FROM sessions;

DROP TABLE sessions;
ALTER TABLE sessions_new RENAME TO sessions;
CREATE INDEX idx_sessions_user_id ON sessions(user_id);
