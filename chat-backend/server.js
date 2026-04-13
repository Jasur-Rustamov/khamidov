import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("API KEY:", process.env.OPENAI_API_KEY ? "OK" : "NOT FOUND");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
    console.log("📩 Пришел запрос:", req.body);

    try {
        const { message } = req.body;

        if (!message) {
            console.log("❌ Нет сообщения");
            return res.status(400).json({ error: "Нет сообщения" });
        }

        console.log("⏳ Отправка в OpenAI...");

        const response = await openai.responses.create({
            model: "gpt-4.1-mini",
            input: message,
        });

        console.log("✅ Ответ получен");

        res.json({
            reply: response.output_text || "Нет ответа",
        });

    } catch (error) {
        console.log("💥 ОШИБКА:", error);

        res.status(500).json({
            error: "Ошибка сервера",
            details: error.message,
        });
    }
});

app.listen(3000, () => {
    console.log("🚀 Server started on http://localhost:3000");
});