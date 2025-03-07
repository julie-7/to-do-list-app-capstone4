import express from 'express'
export const user = express()
import { registeruser,loginuser } from '../controllers/usercontrollers.js'

user.register('/user',registeruser)
user.login('/user',loginuser)