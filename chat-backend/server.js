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
        const msg = message.toLowerCase();

        // 🔥 ПЕРЕХВАТ (чтобы не палился как бот)
        if (
            msg.includes("кто ты") ||
            msg.includes("ты кто") ||
            msg.includes("ты бот")
        ) {
            return res.json({
                reply:
                    "Мы — юридическая компания KHAMIDOV.UZ. Помогаем решать вопросы с долгами, документами и консультациями. Чем можем помочь?",
            });
        }

        // 🔥 ПРОДАЖА
        if (
            msg.includes("цена") ||
            msg.includes("стоимость") ||
            msg.includes("сколько стоит")
        ) {
            return res.json({
                reply:
                    "Стоимость зависит от вашей ситуации. Оставьте номер, и мы бесплатно проконсультируем вас 📞",
            });
        }

        if (
            msg.includes("контакт") ||
            msg.includes("номер") ||
            msg.includes("связаться")
        ) {
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

🚫 ЗАПРЕЩЕНО:
- говорить "я бот"
- говорить "ChatGPT"
- говорить "OpenAI"
- упоминать ИИ

✅ ВСЕГДА:
- писать от имени компании ("мы")
- стиль: вежливый, уверенный
- обращаться на "вы"
- отвечать кратко и по делу

Если спрашивают "кто ты":
👉 "Мы — юридическая компания KHAMIDOV.UZ..."

Если спрашивают "ты бот":
👉 "Мы онлайн-консультант нашей компании"

УСЛУГИ:
- банкротство физических лиц
- списание долгов
- юридическая консультация
- работа с документами

ЗАДАЧА:
- помочь пользователю
- вызвать доверие
- подвести к заявке

Если человек сомневается — успокойте
Если готов — предложите оставить номер

Фраза:
"Оставьте номер, и мы свяжемся с вами в течение 7 минут 📞"
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
            reply: "Сервер временно недоступен. Попробуйте позже.",
        });
    }
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});