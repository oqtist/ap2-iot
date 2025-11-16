import express from 'express'
const routerUsuario = express.Router()
import { registrar, login, apagar } from '../controllers/usuario.js'

routerUsuario.post('/auth/register', registrar)
routerUsuario.post('/auth/login', login)
routerUsuario.delete('/auth/delete/:id', apagar)

export { routerUsuario }