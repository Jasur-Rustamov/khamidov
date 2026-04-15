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


// =======================
// 🔹 ОПРЕДЕЛЕНИЕ ЯЗЫКА (УЛУЧШЕННОЕ)
// =======================
function detectLanguage(text = "") {
    const msg = text.toLowerCase();

    // 🔥 узбек кириллица
    if (
        msg.includes("қ") ||
        msg.includes("ғ") ||
        msg.includes("ў") ||
        msg.includes("ҳ")
    ) {
        return "uz";
    }

    // 🔥 явный выбор языка
    if (msg.includes("узбек") || msg.includes("o‘zbek") || msg.includes("uzbek")) {
        return "uz";
    }

    if (msg.includes("русск") || msg.includes("russian")) {
        return "ru";
    }

    const uzWords = [
        "salom", "qanday", "yordam", "kerak", "rahmat", "iltimos",
        "muammo", "ha", "yo‘q", "emas", "qancha", "narx"
    ];

    const ruWords = [
        "привет", "здравствуйте", "как", "помочь", "нужно",
        "спасибо", "пожалуйста", "проблема", "да", "нет", "сколько", "цена"
    ];

    const uzCount = uzWords.filter(w => msg.includes(w)).length;
    const ruCount = ruWords.filter(w => msg.includes(w)).length;

    return uzCount > ruCount ? "uz" : "ru";
}


// =======================
// 🔹 НОРМАЛИЗАЦИЯ
// =======================
function normalizeText(text = "") {
    return text.toLowerCase().trim();
}


// =======================
// 🔹 ФОРМАТ ОТВЕТА
// =======================
function companyReply(text) {
    return { reply: text };
}


// =======================
// 🔹 СТАТИЧЕСКИЕ ОТВЕТЫ (БЕЗ ПРОДАЖИ)
// =======================
function getStaticReply(message, lang) {
    const msg = normalizeText(message);

    if (!msg) {
        return lang === "uz"
            ? "Savolingizni yozing, yordam beramiz."
            : "Опишите вашу ситуацию, постараемся помочь.";
    }

    // кто вы
    if (
        msg.includes("кто ты") ||
        msg.includes("ты кто") ||
        msg.includes("вы кто")
    ) {
        return lang === "uz"
            ? "Biz — KHAMIDOV.UZ yuridik kompaniyamiz. Qanday masalada yordam kerak?"
            : "Мы — юридическая компания KHAMIDOV.UZ. По какому вопросу нужна помощь?";
    }

    // язык
    if (msg.includes("узбек") || msg.includes("o‘zbek")) {
        return "Albatta, sizga o‘zbek tilida yordam bera olamiz. Savolingizni yozing.";
    }

    return null;
}


// =======================
// 🔹 CHAT ROUTE
// =======================
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body ?? {};

        if (!message) {
            return res.status(400).json(
                companyReply("Пожалуйста, напишите сообщение.")
            );
        }

        const lang = detectLanguage(message);

        // 🔥 быстрые ответы
        const staticReply = getStaticReply(message, lang);
        if (staticReply) {
            return res.json(companyReply(staticReply));
        }

        // =======================
        // 🔹 OPENAI
        // =======================
        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.4,
            messages: [
                {
                    role: "system",
                    content: `
Вы — профессиональный юрист-консультант компании KHAMIDOV.UZ.

СТРОГИЕ ПРАВИЛА:
- Отвечайте на том же языке, что и клиент
- Компания работает на двух языках: узбекский и русский
- НИКОГДА не говорите:
  "мы отвечаем только на русском"
  "мы не можем ответить"
- Не придумывайте ограничения

ЗАПРЕЩЕНО:
- говорить что вы бот или ИИ
- давать шаблонные ответы
- навязывать оставить номер

ЗАДАЧА:
- понять проблему клиента
- дать полезный совет
- объяснить решение

СТИЛЬ:
- как живой юрист
- понятно и по делу
- можно задавать уточняющие вопросы

ПРИМЕР:
"В вашей ситуации важно уточнить детали. Скажите, есть ли у вас договор?"
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
                ? "Kechirasiz, yana urinib ko‘ring."
                : "Извините, попробуйте еще раз.");

        // =======================
        // 🔥 АНТИ-БАГ ФИЛЬТР
        // =======================
        if (
            reply.includes("только на русском") ||
            reply.includes("не можем отвечать") ||
            reply.includes("фақат рус")
        ) {
            reply =
                lang === "uz"
                    ? "Albatta, sizga o‘zbek tilida yordam beramiz. Muammoingizni yozing."
                    : "Мы можем ответить на вашем языке. Опишите ситуацию подробнее.";
        }

        return res.json(companyReply(reply));

    } catch (error) {
        console.error("CHAT ERROR:", error);

        return res.status(500).json(
            companyReply("Сервер временно недоступен. Попробуйте позже.")
        );
    }
});


// =======================
// 🔹 СТАРТ
// =======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});