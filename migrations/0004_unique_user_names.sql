ALTER TABLE users ADD COLUMN username TEXT;
ALTER TABLE users ADD COLUMN id_name TEXT;

UPDATE users
SET username = 'admin_' || lower(substr(replace(id, '-', ''), 1, 8))
WHERE username IS NULL OR trim(username) = '';

UPDATE users
SET id_name = 'SXQ-' || upper(substr(replace(id, '-', ''), 1, 12))
WHERE id_name IS NULL OR trim(id_name) = '';

CREATE UNIQUE INDEX IF NOT EXISTS uq_users_username_nocase
ON users(username COLLATE NOCASE);

CREATE UNIQUE INDEX IF NOT EXISTS uq_users_id_name_nocase
ON users(id_name COLLATE NOCASE);
