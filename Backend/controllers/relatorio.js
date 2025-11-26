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
            res.status(200).send({ mensagem: response.text })
        }
    } catch (err) {
        console.log(err)
    }
}

export { criarRelatorio }