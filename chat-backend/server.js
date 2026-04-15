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
        const { message } = req.body ?? {};

        if (!message) {
            return res.status(400).json(
                companyReply("Напишите сообщение")
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

Правила:
- Отвечай на том же языке, что и пользователь
- НЕ говори что ты ИИ, бот, ChatGPT или OpenAI
- НЕ упоминай технологии
- Отвечай естественно, как человек
- Можно общаться свободно на любые темы
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
            "Попробуйте еще раз";

        // защита (если вдруг скажет что ИИ)
        if (
            reply.toLowerCase().includes("chatgpt") ||
            reply.toLowerCase().includes("openai") ||
            reply.toLowerCase().includes("искусственный интеллект") ||
            reply.toLowerCase().includes("ai")
        ) {
            reply = "Давайте лучше перейдём к вашему вопросу 🙂";
        }

        return res.json(companyReply(reply));

    } catch (error) {
        console.error("CHAT ERROR:", error);

        return res.status(500).json(
            companyReply("Ошибка сервера")
        );
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});