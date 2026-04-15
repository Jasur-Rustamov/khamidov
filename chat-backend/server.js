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

    const uzWords = [
        "salom", "assalomu", "qanday", "rahmat", "iltimos",
        "yordam", "kerak", "qarz", "kredit", "sud", "huquq"
    ];

    const ruWords = [
        "привет", "здравствуйте", "как", "спасибо",
        "помогите", "долг", "кредит", "суд", "юрист"
    ];

    const uzCount = uzWords.filter((w) => msg.includes(w)).length;
    const ruCount = ruWords.filter((w) => msg.includes(w)).length;

    return uzCount > ruCount ? "uz" : "ru";
}

// =======================
// ОЧИСТКА ОТВЕТА
// =======================
function sanitizeReply(reply = "") {
    return reply
        .replace(/я бот|я — бот|chatgpt|openai|искусственный интеллект/gi, "")
        .replace(/men botman|sun.?iy intellekt/gi, "")
        .trim();
}

// =======================
// ПРОМПТ
// =======================
function buildSystemPrompt(lang, isFirstMessage) {
    if (lang === "uz") {
        if (isFirstMessage) {
            return `
Siz KHAMIDOV.UZ yuridik kompaniyasining onlayn konsultantisiz.

QOIDALAR:
- Foydalanuvchi qaysi tilda yozsa, shu tilda javob bering
- O‘zingizni bot yoki AI deb tanishtirmang
- Birinchi xabarda kompaniya nomidan javob bering: "biz"
- Qisqa, tushunarli va xushmuomala yozing

VAZIFA:
- Salomlashing
- Kompaniyani tanishtiring
- Qanday yordam kerakligini so‘rang
            `.trim();
        }

        return `
Siz tajribali yuridik konsultantsiz.

QOIDALAR:
- Foydalanuvchi qaysi tilda yozsa, shu tilda javob bering
- O‘zingizni bot yoki AI deb tanishtirmang
- Javoblarni tabiiy, foydali va tushunarli yozing
- Shablon gaplarni takrorlamang
- "raqamingizni qoldiring" degan gapni faqat kerak bo‘lsa yozing
- Agar savol aniq bo‘lsa, darhol mazmunli javob bering

USLUB:
- Oddiy
- Jonli
- Amaliy

AGAR savol qarz haqida bo‘lsa:
- guvohlar
- yozishmalar
- pul o‘tkazmasi
- sudga murojaat qilish imkoniyatini tushuntiring
            `.trim();
    }

    if (isFirstMessage) {
        return `
Вы — онлайн-консультант юридической компании KHAMIDOV.UZ.

ПРАВИЛА:
- Отвечайте на том языке, на котором пишет клиент
- Не говорите, что вы бот или ИИ
- В первом сообщении отвечайте от имени компании: "мы"
- Пишите кратко, понятно и вежливо

ЗАДАЧА:
- Поздороваться
- Представиться
- Спросить, чем можете помочь
        `.trim();
    }

    return `
Вы — опытный юридический консультант.

ПРАВИЛА:
- Отвечайте на том языке, на котором пишет клиент
- Не говорите, что вы бот или ИИ
- Пишите естественно, без шаблонов
- Не повторяйте одни и те же фразы
- Не просите номер телефона без необходимости
- Если вопрос уже понятен, сразу дайте полезный ответ

СТИЛЬ:
- Простой
- Живой
- По делу

ЕСЛИ вопрос о долге:
- упоминайте свидетелей
- переписку
- переводы
- возможность обращения в суд
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
            (lang === "uz"
                ? "Kechirasiz, xatolik yuz berdi. Iltimos, yana urinib ko‘ring."
                : "Извините, произошла ошибка. Попробуйте еще раз.");

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