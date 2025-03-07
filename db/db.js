import pg from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();
const pgp = pg();
const db = pgp(process.env.DATABASE_URL);

export{ db };