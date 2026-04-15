<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isOpen = ref(false);
const messages = ref([]);
const input = ref("");
const loading = ref(false);
const waitingPhone = ref(false);
const chatRef = ref(null);

// приветствие
onMounted(() => {
    setTimeout(() => {
        messages.value.push({
            role: "bot",
            text: t('chatbot.hello'),
        });
    }, 500);
});

// скролл
const scrollToBottom = async () => {
    await nextTick();
    chatRef.value?.scrollTo({
        top: chatRef.value.scrollHeight,
        behavior: "smooth",
    });
};

// typing
const typeText = async (text) => {
    let current = "";
    messages.value.push({ role: "bot", text: "" });

    const index = messages.value.length - 1;

    for (let char of text) {
        current += char;
        messages.value[index].text = current;
        await new Promise((r) => setTimeout(r, 10));
        await scrollToBottom();
    }
};

// отправка
const sendMessage = async () => {
    if (!input.value.trim()) return;

    const userMessage = input.value;

    messages.value.push({ role: "user", text: userMessage });
    input.value = "";

    await scrollToBottom();

    // если ждем телефон
    if (waitingPhone.value) {
        messages.value.push({
            role: "bot",
            text: t('chatbot.success'),
        });
        waitingPhone.value = false;
        return;
    }

    loading.value = true;

    try {
        const res = await fetch("https://khamidov.onrender.com/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: userMessage,
                lang: locale.value // 🔥 ВАЖНО
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            messages.value.push({
                role: "bot",
                text: data.details || t('chatbot.error'),
            });
            loading.value = false;
            return;
        }

        await typeText(data.reply);
    } catch {
        messages.value.push({
            role: "bot",
            text: t('chatbot.server'),
        });
    }

    loading.value = false;
    await scrollToBottom();
};

// быстрые кнопки
const quickAsk = () => {
    input.value = t('chatbot.quick');
    sendMessage();
};

// запрос телефона
const requestPhone = () => {
    messages.value.push({
        role: "bot",
        text: t('chatbot.phone'),
    });
    waitingPhone.value = true;
};
</script>