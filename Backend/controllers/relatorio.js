import { GoogleGenAI } from "@google/genai";
import { Relatorios } from "../models/relatorios.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const criarRelatorio = async (req, res) => {
    try {
        const { prompt } = req.body
        const userCheck = await res.locals.user
        if (userCheck) {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: "Crie um relatório para orientação de carreiras baseado nas informações fornecidas: " + prompt,
            });
            const promptResumido = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: "Com base nas informações providenciadas, crie um resumo para o relatório que será gerado:" + prompt
            })
            const relatorioDados = await Relatorios.create({prompt: promptResumido.text, id_usuario: userCheck.id})
            res.status(200).send({ mensagem: response.text })
        }
    } catch (err) {
        console.log(err)
    }
}

export { criarRelatorio }