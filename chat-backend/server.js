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
// 🔹 ОПРЕДЕЛЕНИЕ ЯЗЫКА
// =======================
function detectLanguage(text = "") {
    const msg = text.toLowerCase();

    // явный выбор языка
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
// 🔹 УМНЫЕ СТАТИЧЕСКИЕ ОТВЕТЫ (БЕЗ СПАМА НОМЕРОМ)
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

    // цена (без навязчивости)
    if (msg.includes("цена") || msg.includes("стоимость") || msg.includes("narx")) {
        return lang === "uz"
            ? "Narx holatingizga qarab belgilanadi. Muammoni yozsangiz, aniqroq tushuntirib beramiz."
            : "Стоимость зависит от вашей ситуации. Опишите подробнее, и мы подскажем ориентир.";
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

        // 🔥 статический ответ
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
Вы — опытный юрист-консультант компании KHAMIDOV.UZ.

ПРАВИЛА:
- Отвечайте на том же языке, что и клиент
- Отвечайте от имени компании (мы)
- Не говорите что вы бот или ИИ
- Пишите как живой специалист

ГЛАВНОЕ:
- Понять проблему клиента
- Дать полезный совет
- Объяснить простым языком

ЗАПРЕЩЕНО:
- НЕ писать "оставьте номер" без причины
- НЕ быть навязчивым
- НЕ давать шаблонные ответы

МОЖНО:
- задавать уточняющие вопросы
- объяснять варианты решения

ПРИМЕР ХОРОШЕГО ОТВЕТА:
"В вашей ситуации важно уточнить, есть ли договор. Если он есть, можно рассмотреть…"
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
        // 🔥 ФИЛЬТР ПРОДАЖ (УБИРАЕМ НОМЕР)
        // =======================
        if (
            reply.includes("оставьте номер") ||
            reply.includes("оставьте ваш номер") ||
            reply.includes("7 минут")
        ) {
            reply = reply.replace(
                /оставьте.*номер.*\./gi,
                ""
            ).trim();
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
// 🔹 START
// =======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});