import jwt from 'jsonwebtoken'
import { Usuarios } from '../models/usuario.js'
const segredoJwt = process.env.SEGREDO_JWT

const verificarToken = (req, res, next) => {
    try {
        const token = req.headers['authorization']
        if (!token) {
            res.status(400).send('Requisição Inválida')
        } else {
            const validacao = jwt.verify(token, segredoJwt)
            console.log(validacao)
            const userCheck = Usuarios.findByPk(validacao.idUsuario)

            if (userCheck) {
                res.locals.user = userCheck
                next()
            } else {
                res.status(401).send("Este usuário não existe.")
            }
        }

    } catch (erro) {
        console.log('erro', erro)
        res.status(401).send({ mensagem: 'Token Invalido' })
    }
}

export { verificarToken }