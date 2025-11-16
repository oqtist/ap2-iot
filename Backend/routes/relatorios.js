import express from 'express'
const routerRelatorio = express.Router()
import { teste } from '../controllers/relatorio.js'

routerRelatorio.get('/teste', teste)

export { routerRelatorio }