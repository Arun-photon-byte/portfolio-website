import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';

const moduleDir = path.dirname(fileURLToPath(import.meta.url));
const dbDir = path.resolve(moduleDir, '../../../db');
const dbPath = path.join(dbDir, 'company-website.db');
const schemaPath = path.join(dbDir, 'schema.sql');

function ensureDatabase() {
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  if (!fs.existsSync(dbPath)) {
    const db = new Database(dbPath);
    db.exec(fs.readFileSync(schemaPath, 'utf8'));
    db.close();
  }

  const db = new Database(dbPath);
  db.exec(fs.readFileSync(schemaPath, 'utf8'));
  db.close();
}

export function insertContactSubmission(submission) {
  ensureDatabase();
  const db = new Database(dbPath);

  const stmt = db.prepare(`
    INSERT INTO contact_submissions (name, email, message, created_at)
    VALUES (@name, @email, @message, @createdAt)
  `);

  const result = stmt.run({
    name: submission.name,
    email: submission.email,
    message: submission.message,
    createdAt: new Date().toISOString()
  });

  db.close();
  return result.lastInsertRowid;
}
