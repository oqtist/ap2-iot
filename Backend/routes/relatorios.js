import express from 'express'
const routerRelatorio = express.Router()
import { criarRelatorio } from '../controllers/relatorio.js'
import { verificarToken } from '../middleware/auth.js'

routerRelatorio.post('/relatorio/criar', verificarToken, criarRelatorio)

export { routerRelatorio }