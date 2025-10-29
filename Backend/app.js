import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { Usuarios } from './models/usuario.js'
const app = express()

import { routerUsuario } from './routes/usuario.js'

app.use(cors())
app.use(express.json())
app.use(routerUsuario)

try {
    await Usuarios.sync()
} catch (err) {
    console.log(err)
}

app.listen(3000, () => console.log(`Servidor rodando na porta 3000`))