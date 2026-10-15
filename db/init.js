import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';

const dbDir = path.resolve(process.cwd(), 'db');
const dbPath = path.join(dbDir, 'company-website.db');
const schemaPath = path.join(dbDir, 'schema.sql');

const schema = fs.readFileSync(schemaPath, 'utf8');
const db = new Database(dbPath);
db.exec(schema);
db.close();

console.log(`Database initialized at ${dbPath}`);
