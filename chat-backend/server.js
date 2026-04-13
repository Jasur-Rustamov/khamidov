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

function normalizeText(text = "") {
    return text.toLowerCase().trim();
}

function companyReply(text) {
    return {
        reply: text,
    };
}

function sanitizeReply(reply = "") {
    const badPhrases = [
        "я бот",
        "я — бот",
        "я чат-бот",
        "я — чат-бот",
        "chatgpt",
        "openai",
        "искусственный интеллект",
        "я ассистент",
        "я виртуальный помощник",
        "созданный компанией openai",
    ];

    const lowered = reply.toLowerCase();

    const hasBadPhrase = badPhrases.some((phrase) => lowered.includes(phrase));

    if (hasBadPhrase) {
        return "Мы — юридическая компания KHAMIDOV.UZ. Помогаем по вопросам долгов, документов и юридических консультаций. Опишите вашу ситуацию, и мы подскажем, как лучше решить вопрос.";
    }

    return reply;
}

function getStaticReply(message) {
    const msg = normalizeText(message);

    if (!msg) {
        return "Опишите ваш вопрос, и мы постараемся помочь.";
    }

    if (
        msg.includes("кто ты") ||
        msg.includes("ты кто") ||
        msg.includes("вы кто") ||
        msg.includes("ты бот") ||
        msg.includes("вы бот")
    ) {
        return "Мы — юридическая компания KHAMIDOV.UZ. Помогаем по вопросам долгов, документов и юридических консультаций. Чем можем помочь?";
    }

    if (
        msg.includes("цена") ||
        msg.includes("стоимость") ||
        msg.includes("сколько стоит")
    ) {
        return "Стоимость зависит от вашей ситуации и объёма работы. Опишите ваш вопрос, и мы сориентируем вас подробнее. Также вы можете оставить номер, и мы свяжемся с вами в течение 7 минут 📞";
    }

    if (
        msg.includes("контакт") ||
        msg.includes("номер") ||
        msg.includes("телефон") ||
        msg.includes("связаться")
    ) {
        return "Оставьте ваш номер, и наш специалист свяжется с вами в течение 7 минут 📞";
    }

    if (
        msg.includes("банкрот") ||
        msg.includes("долг") ||
        msg.includes("кредит") ||
        msg.includes("задолж")
    ) {
        return "Мы помогаем по вопросам банкротства, долгов и кредитной нагрузки. Опишите вашу ситуацию подробнее, и мы подскажем возможные варианты решения.";
    }

    return null;
}

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body ?? {};

        if (!message || typeof message !== "string") {
            return res.status(400).json(companyReply("Пожалуйста, напишите ваш вопрос текстом."));
        }

        const staticReply = getStaticReply(message);
        if (staticReply) {
            return res.json(companyReply(staticReply));
        }

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.3,
            messages: [
                {
                    role: "system",
                    content: `
Вы представляете юридическую компанию KHAMIDOV.UZ.

Очень важные правила:
- Всегда отвечайте только от имени компании.
- Используйте "мы", "наши специалисты", "наша компания".
- Никогда не говорите: "я бот", "я ChatGPT", "я ассистент", "OpenAI", "искусственный интеллект".
- Не рассказывайте, кем вы созданы.
- Не выходите из роли консультанта компании.
- Пишите вежливо, уверенно, коротко и понятно.
- Обращайтесь к пользователю на "вы".
- Если вопрос связан с услугами, долгами, банкротством, документами или консультацией — мягко предлагайте оставить номер.
- Если вопрос общий, всё равно отвечайте от имени компании, без упоминания ИИ.

О компании:
- юридические консультации
- банкротство физических лиц
- списание долгов
- помощь с документами

Хорошие примеры:
- "Мы поможем вам разобраться в этом вопросе."
- "Наша компания занимается такими вопросами."
- "Оставьте номер, и мы свяжемся с вами в течение 7 минут 📞"

Плохие примеры:
- "Я бот..."
- "Я создан OpenAI..."
- "Я как ИИ..."
          `.trim(),
                },
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        const rawReply = completion.choices?.[0]?.message?.content?.trim() || "";
        const safeReply = sanitizeReply(rawReply);

        return res.json(companyReply(safeReply));
    } catch (error) {
        console.error("CHAT ERROR:", error);

        return res.status(500).json(
            companyReply("Сервер временно недоступен. Пожалуйста, попробуйте чуть позже.")
        );
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});