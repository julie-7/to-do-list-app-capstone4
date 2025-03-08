import express from 'express'
export const task = express()
import { gettask,posttask,deletetask } from '../controllers/taskcontrollers.js'

task.get('/',gettask)
task.post('/',posttask)
task.delete('/',deletetask)