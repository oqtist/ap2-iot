import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { Usuarios } from './models/usuario.js'
import { Relatorios } from './models/relatorios.js'
const app = express()

import { routerUsuario } from './routes/usuario.js'
import { routerRelatorio } from './routes/relatorios.js'

app.use(cors())
app.use(express.json())
app.use(routerUsuario, routerRelatorio)

try {
    await Usuarios.sync()
    await Relatorios.sync()
} catch (err) {
    console.log(err)
}

app.listen(3000, () => console.log(`Servidor rodando na porta 3000`))