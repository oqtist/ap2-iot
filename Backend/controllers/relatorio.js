import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const teste = async (req, res) => {
    try {
        const { prompt } = req.body
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Crie um relatório para orientação de carreiras baseado nas seguintes informações: " + prompt,
        });
        console.log(response.text);
        res.status(200).send({ mensagem: response.text })
    } catch (err) {
        console.log(err)
    }
}

export { teste }