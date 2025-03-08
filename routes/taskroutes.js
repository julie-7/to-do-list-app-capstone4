import express from 'express'
export const task = express()
import { gettask,posttask,deletetask } from '../controllers/taskcontrollers.js'

task.get('/',gettask)
task.post('/',posttask)
task.delete('/',deletetask)

task.use('/title',tokenValidation,title);
task.use('/description',tokenValidation,description);
task.use('/status',tokenValidation,status);
task.use('/due_date',tokenValidation,due_date);
task.use('/email',tokenValidation,email);
task.use('/auth',authuse)
