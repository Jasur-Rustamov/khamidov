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

// нормализация
function normalizeText(text = "") {
    return text.toLowerCase().trim();
}

// ответ компании
function companyReply(text) {
    return { reply: text };
}

// быстрые ответы
function getStaticReply(message, lang) {
    const msg = normalizeText(message);

    if (!msg) {
        return lang === "uz"
            ? "Savolingizni yozing, yordam beramiz."
            : "Опишите ваш вопрос, и мы постараемся помочь.";
    }

    // кто ты
    if (msg.includes("кто ты") || msg.includes("ты кто") || msg.includes("bot")) {
        return lang === "uz"
            ? "Biz — KHAMIDOV.UZ yuridik kompaniyamiz. Sizga qanday yordam bera olamiz?"
            : "Мы — юридическая компания KHAMIDOV.UZ. Чем можем помочь?";
    }

    // цена
    if (msg.includes("цена") || msg.includes("стоимость")) {
        return lang === "uz"
            ? "Narx sizning holatingizga bog‘liq. Batafsil yozing yoki raqamingizni qoldiring 📞"
            : "Стоимость зависит от вашей ситуации. Опишите вопрос или оставьте номер 📞";
    }

    // контакты
    if (msg.includes("номер") || msg.includes("телефон")) {
        return lang === "uz"
            ? "Raqamingizni qoldiring, 7 daqiqada bog‘lanamiz 📞"
            : "Оставьте номер, и мы свяжемся с вами в течение 7 минут 📞";
    }

    return null;
}

app.post("/chat", async (req, res) => {
    try {
        const { message, lang = "ru" } = req.body ?? {};

        if (!message) {
            return res.status(400).json(
                companyReply(
                    lang === "uz"
                        ? "Iltimos, savolingizni yozing."
                        : "Пожалуйста, напишите ваш вопрос."
                )
            );
        }

        // быстрые ответы
        const staticReply = getStaticReply(message, lang);
        if (staticReply) {
            return res.json(companyReply(staticReply));
        }

        // язык
        const language = lang === "uz" ? "узбекском" : "русском";

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.3,
            messages: [
                {
                    role: "system",
                    content: `
Вы — консультант юридической компании KHAMIDOV.UZ.

Правила:
- Отвечайте строго на ${language} языке
- Говорите от имени компании (мы, наша компания)
- Не говорите что вы бот или ИИ
- Будьте краткими, уверенными и вежливыми
- Предлагайте оставить номер при необходимости

Пример:
"Мы поможем вам разобраться. Опишите ситуацию подробнее."
                    `.trim(),
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        const reply =
            completion.choices?.[0]?.message?.content?.trim() ||
            (lang === "uz"
                ? "Kechirasiz, yana urinib ko‘ring."
                : "Извините, попробуйте еще раз.");

        return res.json(companyReply(reply));
    } catch (error) {
        console.error("CHAT ERROR:", error);

        return res.status(500).json(
            companyReply(
                "Сервер временно недоступен. Попробуйте позже."
            )
        );
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});