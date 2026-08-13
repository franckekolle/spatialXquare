ALTER TABLE users ADD COLUMN role TEXT NOT NULL DEFAULT 'admin';
ALTER TABLE users ADD COLUMN active INTEGER NOT NULL DEFAULT 1;

UPDATE users
SET role = 'super_admin'
WHERE id = (
  SELECT id
  FROM users
  ORDER BY created_at ASC
  LIMIT 1
);

CREATE TABLE IF NOT EXISTS request_replies (
  id TEXT PRIMARY KEY,
  project_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  recipient_email TEXT NOT NULL,
  resend_id TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_request_replies_project_id ON request_replies(project_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
