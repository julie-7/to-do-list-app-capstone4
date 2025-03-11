import { db } from "../db/db.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const posttask = async (req, res) => {
    const {  title, description, status, due_date, email } = req.body;
    try {
        const sql = 'Insert into task (title,description,status,due_date,email) values($1,$2,$3,$4,$5) Returning *'
        const task = await db.query(sql, [ title, description, status, due_date, email]);
        res.status(200).json(task);
    } catch (error) {
        const err = error.message;
        res.status(500).json({ error: `Error posting task ${err}` });
    }
};

export const gettask = async (req, res) => {
    const email = req.params.email
    try {
        const task = await db.query('SELECT * FROM task where email = $1 ', [email]);
        res.json(task);
    } catch (error) {
        const err = error.message
        res.status(500).json({ error: `Error getting ${err}` });
    }
};

export const deletetask = async (req, res) => {
    const id_task = req.params.id
    try {
        const params = [id_task]
        const sql = `delete from where id_task = $1`
        const result = await db.query(sql, params)
        res.json({ message: "task deleted" })
    } catch (error) {
        const err = error.message
        res.status(500).json({ error: `Error deleting ${err}` });
    };
};
