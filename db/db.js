import pg from 'pg-Promise';
import dotenv from 'dotenv';

dotenv.config();
const pgp = pg();
const db = pgp(process.env.DATABASE_URL);

export{ db };