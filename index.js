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

    const tokenValidation = (req,res,next) => {
    const authorization = req.headers['authorization'];
    if(!authorization){
        return res.status(400).json({message:"you need to pass a token"});
    }
    const token= authorization.replace('Bearer','').trim();
try{
    const secret= process.env.KEY_SECRET;
    Jwt.verify(token,secret);
    next();
}catch(err) {
    return res.status(400).json({message:"Invalid Token"});
}

};
app.use('api/task',tokenValidation,task);
const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));