import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {user} from './routes/userroutes.js';
import {task} from  './routes/taskroutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users',user);
app.use('/api/tasks',task);

const PORT = process.env.PORT;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));