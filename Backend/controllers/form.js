import jwt from 'jsonwebtoken'
import { Usuarios } from '../models/usuario.js'
const segredoJwt = process.env.SEGREDO_JWT

const cadastrarUsuario = async (req, res) => {
    try {
        const { nome, email, senha, perfil } = req.body

        const userCheck = await Usuarios.findOne({ where: { email } })

        if (!nome || !senha || !email || !perfil) {
            res.status(500).send({ mensagem: 'Um dos campos não foi preenchido. Tente Novamente.' })
            return
        }

        if (perfil != 'usuario') {
            if (perfil != 'tecnico') {
                res.status(500).send({ mensagem: 'Valor inválido. Perfil deve ser "usuario" ou "tecnico"' })
                return
            }
        }

        if (userCheck) {
            res.status(500).send({ mensagem: 'Já existe um usuário com este email. Tente Novamente.' })
            return
        }

        const Usuario = await Usuarios.create({ nome, senha, email, perfil })
        res.status(200).send({ mensagem: "Usuário Criado!" })

    } catch (err) { console.log(err) }
}

const login = async (req, res) => {
    try {
        const { email, senha } = req.body
        const emailCheck = await Usuarios.findOne({ where: { email: email } })
        const senhaCheck = await Usuarios.findOne({ where: { senha: senha } })

        if (!emailCheck || !senhaCheck) {
            res.status(500).send({ mensagem: `Senha e/ou e-mail não encontrados. Tente novamente.` })
            return
        }

        const token = jwt.sign({ idUsuario: emailCheck.dataValues.id, perfil: emailCheck.dataValues.perfil }, segredoJwt, { expiresIn: "1d" })
        res.status(201).send({ token: token, mensagem: "Login efetuado!" })

    } catch (err) {
        console.log(err)
    }
}

export { cadastrarUsuario, login }
