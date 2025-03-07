import express from 'express'
export const task = express()
import { gettask,posttask,deletetask } from '../controllers/taskcontrollers.js'

task.get('/task',gettask)
task.post('/task',posttask)
task.delete('/task',deletetask)