import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// формат ответа
function companyReply(text) {
    return { reply: text };
}

app.post("/chat", async (req, res) => {
    try {
        const { message, lang = "uz" } = req.body ?? {};

        if (!message) {
            return res.status(400).json(
                companyReply(lang === "uz" ? "Xabar yozing" : "Напишите сообщение")
            );
        }

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.7,
            messages: [
                {
                    role: "system",
                    content: `
Ты — живой человек и консультант.

Отвечай строго на языке:
${lang === "uz" ? "узбекском" : "русском"}

ЖЁСТКИЕ ПРАВИЛА:
- Никогда не говори:
  "мы отвечаем только на русском"
  "мы не можем ответить"
  "оставьте номер"
  "мы свяжемся"

- НЕ придумывай правила компании
- НЕ ограничивай язык

- Всегда отвечай на языке пользователя
- Отвечай свободно, как человек
- Просто отвечай на вопрос

ЗАДАЧА:
- понять вопрос
- дать нормальный ответ
- без шаблонов
`.trim(),
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        let reply =
            completion.choices?.[0]?.message?.content?.trim() ||
            (lang === "uz"
                ? "Yana urinib ko‘ring"
                : "Попробуйте еще раз");

        // защита
        if (
            reply.toLowerCase().includes("chatgpt") ||
            reply.toLowerCase().includes("openai")
        ) {
            reply =
                lang === "uz"
                    ? "Savolingizni davom ettiring 🙂"
                    : "Продолжайте ваш вопрос 🙂";
        }

        return res.json(companyReply(reply));
    } catch (error) {
        console.error(error);

        return res.status(500).json(
            companyReply("Server error")
        );
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("🚀 Server running on port " + PORT);
});