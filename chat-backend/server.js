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

// простой формат ответа
function companyReply(text) {
    return { reply: text };
}

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body ?? {};

        if (!message) {
            return res.status(400).json(
                companyReply("Напишите сообщение")
            );
        }

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.7,
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        const reply =
            completion.choices?.[0]?.message?.content?.trim() ||
            "Попробуйте еще раз";

        return res.json(companyReply(reply));
    } catch (error) {
        console.error(error);

        return res.status(500).json(
            companyReply("Server error")
        );
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("🚀 Server running on port " + PORT);
});