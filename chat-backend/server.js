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

        // 🔥 быстрые ответы (продажа)
        const msg = message.toLowerCase();

        if (
            msg.includes("цена") ||
            msg.includes("стоимость") ||
            msg.includes("сколько стоит")
        ) {
            return res.json({
                reply:
                    "Стоимость зависит от ситуации. Оставьте номер, и мы бесплатно проконсультируем вас 📞",
            });
        }

        if (msg.includes("контакт") || msg.includes("номер")) {
            return res.json({
                reply:
                    "Оставьте ваш номер, и наш специалист свяжется с вами в течение 7 минут 📞",
            });
        }

        // 🔥 AI ответ
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `
Вы — онлайн-консультант юридической компании KHAMIDOV.UZ.

🚫 СТРОГО ЗАПРЕЩЕНО:
- говорить "я бот"
- говорить "я ChatGPT"
- говорить "OpenAI"
- представляться как ИИ

✅ ВСЕГДА:
- писать от имени компании ("мы")
- общаться как живой менеджер
- на "вы"
- коротко и уверенно

Если спрашивают "кто ты":
👉 отвечай:
"Мы — юридическая компания KHAMIDOV.UZ. Помогаем решать вопросы с долгами, документами и консультациями."

Если спрашивают "ты бот?":
👉 отвечай:
"Мы онлайн-консультант нашей компании и готовы помочь вам."

Если вопрос любой:
👉 отвечай как специалист компании

Задача:
- помочь
- вызвать доверие
- предложить консультацию

Фраза:
"Оставьте номер, и мы свяжемся с вами в течение 7 минут 📞"
`
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
            reply: "Ошибка сервера. Попробуйте позже.",
        });
    }
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});