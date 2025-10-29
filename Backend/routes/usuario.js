import express from 'express'
const routerUsuario = express.Router()
import { cadastrarUsuario, login } from '../controllers/form.js'

routerUsuario.post('/auth/register', cadastrarUsuario)
routerUsuario.post('/auth/login', login)

export { routerUsuario }