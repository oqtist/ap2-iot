import express from 'express'
const routerUsuario = express.Router()
import { registrar, login } from '../controllers/usuario.js'

routerUsuario.post('/auth/register', registrar)
routerUsuario.post('/auth/login', login)

export { routerUsuario }