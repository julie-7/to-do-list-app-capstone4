import { db } from "../db/db.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const registeruser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const sql = 'Insert into user_project (name,email,password) values($1,$2,$3) Returning *'
        const user = await db.one(sql, [name, email, password]);
        res.status(200).json(user);
    } catch (error) {
        const err = error.message;
        res.status(500).json({ error: `Error registering user ${err}` });
    }
};

export const loginuser = async (req, res) =>{
    const { email, password } = req.body;
    try {
        const user = await db.oneOrNone('SELECT * FROM user_project  where email = $1 and password = $2', [email, password]);
        if (!user) {
            return res.status(401).json({ error: 'invalid credentials' });
        }
        const token = jwt.sign({ userID: user.email }, process.env.JWT_SECRET,{ expiresIn:'1h'});
        res.json({ token });
    } catch (error) {
        const err = error.message
        res.status(500).json({ error: `Error logging in ${err}`});
    }
};