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

    const uzWords = [
        "salom", "qanday", "yordam", "kerak", "rahmat", "iltimos",
        "muammo", "ha", "yo‘q", "yoq", "emas", "qancha", "narx"
    ];

    const ruWords = [
        "привет", "здравствуйте", "как", "помочь", "нужно",
        "спасибо", "пожалуйста", "проблема", "да", "нет",
        "сколько", "цена"
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
// 🔹 БЫСТРЫЕ ОТВЕТЫ
// =======================
function getStaticReply(message, lang) {
    const msg = normalizeText(message);

    if (!msg) {
        return lang === "uz"
            ? "Savolingizni yozing, yordam beramiz."
            : "Опишите ваш вопрос, и мы постараемся помочь.";
    }

    // кто ты
    if (
        msg.includes("кто ты") ||
        msg.includes("ты кто") ||
        msg.includes("вы кто") ||
        msg.includes("bot")
    ) {
        return lang === "uz"
            ? "Biz — KHAMIDOV.UZ yuridik kompaniyamiz. Sizga qanday yordam bera olamiz?"
            : "Мы — юридическая компания KHAMIDOV.UZ. Чем можем помочь?";
    }

    // цена
    if (
        msg.includes("цена") ||
        msg.includes("стоимость") ||
        msg.includes("сколько") ||
        msg.includes("narx") ||
        msg.includes("qancha")
    ) {
        return lang === "uz"
            ? "Narx sizning holatingizga bog‘liq. Batafsil yozing yoki raqamingizni qoldiring 📞"
            : "Стоимость зависит от вашей ситуации. Опишите вопрос или оставьте номер 📞";
    }

    // контакты
    if (
        msg.includes("номер") ||
        msg.includes("телефон") ||
        msg.includes("aloqa") ||
        msg.includes("raqam")
    ) {
        return lang === "uz"
            ? "Raqamingizni qoldiring, 7 daqiqada bog‘lanamiz 📞"
            : "Оставьте номер, и мы свяжемся с вами в течение 7 минут 📞";
    }

    // долги / банкротство
    if (
        msg.includes("долг") ||
        msg.includes("кредит") ||
        msg.includes("банкрот") ||
        msg.includes("qarz")
    ) {
        return lang === "uz"
            ? "Biz qarzlar va bankrotlik masalalarida yordam beramiz. Batafsil yozing."
            : "Мы помогаем с долгами и банкротством. Опишите вашу ситуацию подробнее.";
    }

    return null;
}


// =======================
// 🔹 ОСНОВНОЙ РОУТ
// =======================
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body ?? {};

        if (!message) {
            return res.status(400).json(
                companyReply("Пожалуйста, напишите сообщение.")
            );
        }

        // 🔥 авто определение языка
        const lang = detectLanguage(message);

        // 🔥 быстрые ответы
        const staticReply = getStaticReply(message, lang);
        if (staticReply) {
            return res.json(companyReply(staticReply));
        }

        // язык для prompt
        const language = lang === "uz" ? "узбекском" : "русском";

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.3,
            messages: [
                {
                    role: "system",
                    content: `
Вы — онлайн консультант юридической компании KHAMIDOV.UZ.

ВАЖНО:
- Отвечайте строго на ${language} языке
- Отвечайте от имени компании (мы, наша компания)
- Не говорите что вы бот или ИИ
- Пишите кратко, понятно и профессионально
- Обращайтесь на "вы"

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


// =======================
// 🔹 СТАРТ СЕРВЕРА
// =======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});