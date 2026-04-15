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
    return { reply: text };
}

// =======================
// ОПРЕДЕЛЕНИЕ ЯЗЫКА
// =======================
function detectLanguage(text = "") {
    const msg = text.toLowerCase();

    const uzWords = [
        "salom", "assalomu", "qanday", "yordam", "kerak", "rahmat",
        "iltimos", "muammo", "ha", "yoq", "yo‘q", "emas", "qancha",
        "narx", "telefon", "raqam", "masala", "huquq", "yuridik",
        "qarz", "kredit", "bankrotlik", "sud", "advokat", "ishga",
        "nikoh", "aliment", "ajrim", "meros"
    ];

    const ruWords = [
        "привет", "здравствуйте", "как", "помочь", "нужно", "спасибо",
        "пожалуйста", "проблема", "да", "нет", "сколько", "цена",
        "телефон", "номер", "вопрос", "юрист", "юрид", "долг",
        "кредит", "банкрот", "суд", "адвокат", "развод", "алименты",
        "наследство", "работа"
    ];

    const uzCount = uzWords.filter((w) => msg.includes(w)).length;
    const ruCount = ruWords.filter((w) => msg.includes(w)).length;

    return uzCount > ruCount ? "uz" : "ru";
}

// =======================
// ОЧИСТКА ОТВЕТА
// =======================
function sanitizeReply(reply = "", lang = "ru") {
    const lower = reply.toLowerCase();

    const bannedPhrases = [
        "я бот",
        "я — бот",
        "я чат-бот",
        "я — чат-бот",
        "искусственный интеллект",
        "openai",
        "chatgpt",
        "я искусственный интеллект",
        "я виртуальный помощник",
        "men botman",
        "sun’iy intellekt",
        "suniy intellekt",
        "chatgptman",
        "openai tomonidan"
    ];

    for (const phrase of bannedPhrases) {
        if (lower.includes(phrase)) {
            return lang === "uz"
                ? "Bu masalada sizga yordam beramiz. Vaziyatingizni batafsil yozing yoki raqamingizni qoldiring — mutaxassisimiz siz bilan bog‘lanadi."
                : "Мы поможем вам разобраться в этом вопросе. Опишите ситуацию подробнее или оставьте номер телефона — наш специалист свяжется с вами.";
        }
    }

    return reply;
}

// =======================
// БЫСТРЫЕ ОТВЕТЫ
// =======================
function getStaticReply(message, lang) {
    const msg = normalizeText(message);

    if (!msg) {
        return lang === "uz"
            ? "Savolingizni yozing, sizga yordam beramiz."
            : "Напишите ваш вопрос, и мы постараемся вам помочь.";
    }

    // приветствие
    if (
        msg.includes("привет") ||
        msg.includes("здравствуйте") ||
        msg.includes("добрый день") ||
        msg.includes("салом") ||
        msg.includes("salom") ||
        msg.includes("assalomu alaykum")
    ) {
        return lang === "uz"
            ? "Assalomu alaykum. KHAMIDOV.UZ kompaniyasiga xush kelibsiz. Sizga qanday yordam bera olamiz?"
            : "Здравствуйте. Добро пожаловать в KHAMIDOV.UZ. Чем можем вам помочь?";
    }

    // кто вы
    if (
        msg.includes("кто ты") ||
        msg.includes("ты кто") ||
        msg.includes("вы кто") ||
        msg.includes("кто вы") ||
        msg === "bot" ||
        msg.includes("бот")
    ) {
        return lang === "uz"
            ? "Biz — KHAMIDOV.UZ yuridik kompaniyamiz. Huquqiy masalalarda sizga yordam beramiz."
            : "Мы — юридическая компания KHAMIDOV.UZ. Помогаем клиентам по юридическим вопросам.";
    }

    // цена / стоимость
    if (
        msg.includes("цена") ||
        msg.includes("стоимость") ||
        msg.includes("сколько стоит") ||
        msg.includes("сколько") ||
        msg.includes("narx") ||
        msg.includes("qancha")
    ) {
        return lang === "uz"
            ? "Xizmat narxi holatingizga bog‘liq. Muammoni qisqacha yozing yoki raqamingizni qoldiring — sizga aniq ma’lumot beramiz 📞"
            : "Стоимость услуги зависит от вашей ситуации. Кратко опишите вопрос или оставьте номер — мы сориентируем вас по цене 📞";
    }

    // контакты / телефон
    if (
        msg.includes("номер") ||
        msg.includes("телефон") ||
        msg.includes("контакт") ||
        msg.includes("aloqa") ||
        msg.includes("raqam")
    ) {
        return lang === "uz"
            ? "Raqamingizni qoldiring, mutaxassisimiz siz bilan tez orada bog‘lanadi 📞"
            : "Оставьте ваш номер телефона, и наш специалист свяжется с вами в ближайшее время 📞";
    }

    // консультация
    if (
        msg.includes("консультация") ||
        msg.includes("проконсультировать") ||
        msg.includes("maslahat") ||
        msg.includes("konsultatsiya")
    ) {
        return lang === "uz"
            ? "Albatta, sizga konsultatsiya beramiz. Muammoni yozing yoki telefon raqamingizni qoldiring."
            : "Конечно, мы проконсультируем вас. Напишите ваш вопрос или оставьте номер телефона.";
    }

    // долг / кредит / банкротство
    if (
        msg.includes("долг") ||
        msg.includes("долги") ||
        msg.includes("кредит") ||
        msg.includes("банкрот") ||
        msg.includes("qarz") ||
        msg.includes("kredit") ||
        msg.includes("bankrot")
    ) {
        return lang === "uz"
            ? "Biz qarz, kredit va bankrotlik masalalarida yordam beramiz. Holatingizni batafsil yozing."
            : "Мы помогаем по вопросам долгов, кредитов и банкротства. Опишите вашу ситуацию подробнее.";
    }

    // суд / адвокат / юрист
    if (
        msg.includes("суд") ||
        msg.includes("юрист") ||
        msg.includes("адвокат") ||
        msg.includes("huquq") ||
        msg.includes("sud") ||
        msg.includes("advokat")
    ) {
        return lang === "uz"
            ? "Huquqiy masalangiz bo‘yicha yordam bera olamiz. Muammoni qisqacha yozing."
            : "Мы можем помочь вам по юридическому вопросу. Кратко опишите вашу ситуацию.";
    }

    // развод / алименты / семья
    if (
        msg.includes("развод") ||
        msg.includes("алименты") ||
        msg.includes("брак") ||
        msg.includes("ajrim") ||
        msg.includes("aliment") ||
        msg.includes("nikoh")
    ) {
        return lang === "uz"
            ? "Oilaviy huquq masalalarida ham yordam beramiz. Vaziyatingizni yozing, sizga yo‘l-yo‘riq beramiz."
            : "Мы также помогаем по семейным юридическим вопросам. Опишите вашу ситуацию, и мы подскажем дальнейшие действия.";
    }

    return null;
}

// =======================
// СБОРКА СИСТЕМНОГО ПРОМПТА
// =======================
function buildSystemPrompt(lang) {
    if (lang === "uz") {
        return `
Siz — KHAMIDOV.UZ yuridik kompaniyasining onlayn konsultantisiz.

QOIDALAR:
- Faqat o‘zbek tilida javob bering
- Hech qachon o‘zingizni bot, sun’iy intellekt yoki AI deb tanishtirmang
- Har doim kompaniya nomidan gapiring: "biz", "kompaniyamiz"
- Mijozga hurmat bilan murojaat qiling
- Javoblar qisqa, aniq, tushunarli va professional bo‘lsin
- Asosiy maqsad: mijozning muammosini tushunish va uni konsultatsiyaga olib kelish
- Kerak bo‘lsa telefon raqamini qoldirishni taklif qiling
- Noto‘g‘ri yoki xavfli huquqiy va’dalar bermang
- Agar ma’lumot yetarli bo‘lmasa, vaziyatni aniqlashtiruvchi savol bering

JAVOB USLUBI:
1. Muammoni tushunganingizni ko‘rsating
2. Qisqa foydali javob bering
3. Keyingi qadamni taklif qiling

MISOLLAR:
- "Bu masalada sizga yordam bera olamiz. Holatingizni batafsil yozing."
- "Vaziyatni ko‘rib chiqishimiz uchun qisqacha ma’lumot yuboring yoki raqamingizni qoldiring."
- "Bu xizmat narxi holatingizga bog‘liq. Aniqlik kiritish uchun bog‘lanamiz."
        `.trim();
    }

    return `
Вы — онлайн-консультант юридической компании KHAMIDOV.UZ.

ПРАВИЛА:
- Отвечайте только на русском языке
- Никогда не говорите, что вы бот, ИИ или искусственный интеллект
- Всегда отвечайте от имени компании: "мы", "наша компания"
- Общайтесь уважительно, на "вы"
- Пишите кратко, понятно и профессионально
- Главная задача: понять проблему клиента и подвести его к консультации
- При необходимости предлагайте оставить номер телефона
- Не давайте ложных обещаний и не гарантируйте результат
- Если информации мало, задайте уточняющий вопрос

СТИЛЬ ОТВЕТА:
1. Покажите, что вы поняли вопрос клиента
2. Дайте краткий полезный ответ
3. Предложите следующий шаг

ПРИМЕРЫ:
- "Мы поможем вам разобраться в этой ситуации. Опишите вопрос подробнее."
- "Для точной консультации напишите детали или оставьте номер телефона."
- "Стоимость зависит от вашей ситуации. Мы можем сориентировать вас после уточнения деталей."
    `.trim();
}

// =======================
// ОСНОВНОЙ ROUTE
// =======================
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body ?? {};

        if (!message || typeof message !== "string" || !message.trim()) {
            return res.status(400).json(
                companyReply("Пожалуйста, напишите сообщение.")
            );
        }

        const lang = detectLanguage(message);

        // быстрый ответ
        const staticReply = getStaticReply(message, lang);
        if (staticReply) {
            return res.json(companyReply(staticReply));
        }

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.3,
            messages: [
                {
                    role: "system",
                    content: buildSystemPrompt(lang),
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
                ? "Kechirasiz, hozir javob berishda xatolik yuz berdi. Iltimos, yana urinib ko‘ring."
                : "Извините, произошла ошибка при ответе. Пожалуйста, попробуйте еще раз.");

        reply = sanitizeReply(reply, lang);

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
// ПРОВЕРКА СЕРВЕРА
// =======================
app.get("/", (req, res) => {
    res.send("Chat server is running");
});

// =======================
// ЗАПУСК
// =======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});