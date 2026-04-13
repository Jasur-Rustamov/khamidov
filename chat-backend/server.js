import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // дешевле и быстрый
            messages: [
                {
                    role: "system",
                    content: `
Ты — умный помощник юридического сайта.
Отвечай на любые вопросы пользователя.
Если вопрос про услуги — мягко предлагай консультацию.
Отвечай кратко и понятно.
          `,
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        res.json({
            reply: completion.choices[0].message.content,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Ошибка сервера",
            details: error.message,
        });
    }
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});