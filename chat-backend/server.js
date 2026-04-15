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

function companyReply(text) {
    return { reply: text };
}

// =======================
// ОПРЕДЕЛЕНИЕ ЯЗЫКА
// =======================
function detectLanguage(text = "") {
    const msg = text.toLowerCase();

    const uzWords = ["salom", "assalomu", "qanday", "rahmat", "iltimos"];
    const ruWords = ["привет", "здравствуйте", "как", "спасибо"];

    const uzCount = uzWords.filter((w) => msg.includes(w)).length;
    const ruCount = ruWords.filter((w) => msg.includes(w)).length;

    return uzCount > ruCount ? "uz" : "ru";
}

// =======================
// ОЧИСТКА ОТВЕТА
// =======================
function sanitizeReply(reply = "") {
    return reply
        .replace(/я бот|chatgpt|openai|искусственный интеллект/gi, "")
        .trim();
}

// =======================
// ПРОМПТ
// =======================
function buildSystemPrompt(lang, isFirstMessage) {
    if (lang === "ru") {

        // 🔹 ПЕРВОЕ СООБЩЕНИЕ
        if (isFirstMessage) {
            return `
Вы — онлайн-консультант юридической компании KHAMIDOV.UZ.

ЗАДАЧА:
- Поздороваться
- Представиться от имени компании
- Спросить, чем помочь

ПРИМЕР:
"Здравствуйте. Мы юридическая компания KHAMIDOV.UZ. Чем можем вам помочь?"
            `.trim();
        }

        // 🔹 ОБЫЧНЫЙ РЕЖИМ (как юрист)
        return `
Вы — опытный юрист-консультант.

ПРАВИЛА:
- Отвечайте как живой человек
- Без шаблонов и повторов
- Давайте конкретные советы
- Не пишите "оставьте номер" без причины
- Не пишите "опишите подробнее", если уже всё понятно
- Не говорите, что вы бот или ИИ

СТИЛЬ:
- Простой и понятный
- По делу, без воды

ВАЖНО:
Если вопрос про долг без договора:
- скажите про свидетелей
- переписку
- переводы
- возможность обращения в суд

Отвечайте максимально полезно.
        `.trim();
    }

    // если узбек (можем потом добавить)
    return `
Siz yuridik konsultantsiz. Oddiy va foydali javob bering.
    `.trim();
}

// =======================
// ROUTE
// =======================
app.post("/chat", async (req, res) => {
    try {
        const { message, isFirstMessage = false } = req.body ?? {};

        if (!message || typeof message !== "string" || !message.trim()) {
            return res.status(400).json(
                companyReply("Пожалуйста, напишите сообщение.")
            );
        }

        const lang = detectLanguage(message);

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.5,
            messages: [
                {
                    role: "system",
                    content: buildSystemPrompt(lang, isFirstMessage),
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        let reply =
            completion.choices?.[0]?.message?.content?.trim() ||
            "Произошла ошибка, попробуйте еще раз.";

        reply = sanitizeReply(reply);

        return res.json(companyReply(reply));
    } catch (error) {
        console.error("CHAT ERROR:", error);

        return res.status(500).json(
            companyReply("Сервер временно недоступен.")
        );
    }
});

// =======================
// CHECK
// =======================
app.get("/", (req, res) => {
    res.send("Chat server is running");
});

// =======================
// START
// =======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});