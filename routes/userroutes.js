import express from 'express'
export const user = express()
import { registeruser, loginuser } from '../controllers/usercontrollers.js'

user.post('/register',registeruser)
user.post('/login',loginuser)