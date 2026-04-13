<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
        await new Promise((r) => setTimeout(r, 15));
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
        const res = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: userMessage }),
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

<template>
    <!-- кнопка -->
    <button @click="isOpen = !isOpen"
        class="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#008d80] to-[#00bfa6] text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition">
        💬
    </button>

    <!-- чат -->
    <transition name="chat">
        <div v-if="isOpen"
            class="fixed bottom-20 right-4 z-50 w-[95%] sm:w-[370px] max-h-[80vh] bg-white shadow-2xl rounded-3xl flex flex-col overflow-hidden border border-gray-200">
            <!-- header -->
            <div class="bg-gradient-to-r from-[#008d80] to-[#00bfa6] text-white p-4 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        🤖
                    </div>
                    <span class="font-semibold">{{ t('chatbot.title') }}</span>
                </div>
                <button @click="isOpen = false">✕</button>
            </div>

            <!-- сообщения -->
            <div ref="chatRef" class="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8fafc]">
                <div v-for="(msg, i) in messages" :key="i">
                    <div :class="msg.role === 'user'
                        ? 'flex justify-end'
                        : 'flex items-start gap-2'">
                        <!-- аватар -->
                        <div v-if="msg.role === 'bot'"
                            class="w-7 h-7 bg-[#008d80] text-white rounded-full flex items-center justify-center text-sm">
                            🤖
                        </div>

                        <!-- сообщение -->
                        <div :class="msg.role === 'user'
                            ? 'bg-[#008d80] text-white shadow-md'
                            : 'bg-gray-100 text-gray-800 shadow-sm'"
                            class="px-4 py-2 rounded-2xl max-w-[75%] text-[14px] leading-5">
                            {{ msg.text }}
                        </div>
                    </div>
                </div>

                <div v-if="loading">
                    {{ t('chatbot.typing') }}
                </div>
            </div>

            <!-- FAQ -->
            <div class="p-2 flex flex-wrap gap-2 border-t bg-white">
                <button @click="quickAsk" class="chip">
                    📞 {{ t('chatbot.contacts') }}
                </button>

                <button @click="requestPhone" class="chip-primary">
                    📲 {{ t('chatbot.leave') }}
                </button>
            </div>

            <!-- input -->
            <div class="flex items-center border-t bg-white px-2 py-2">
                <input v-model="input" @keydown.enter.prevent="sendMessage" :placeholder="t('chatbot.placeholder')"
                    class="flex-1 px-4 py-3 text-sm border text-[#008d80] rounded-xl outline-none focus:ring-2 focus:ring-[#008d80] bg-gray-50" />
                <button @click="sendMessage"
                    class="bg-[#008d80] text-white px-5 py-2 rounded-xl ml-2 shadow hover:scale-105 transition">
                    ➤
                </button>
            </div>
        </div>
    </transition>
</template>

<style>
.chat-enter-active,
.chat-leave-active {
    transition: all 0.3s ease;
}

.chat-enter-from,
.chat-leave-to {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
}

.chip {
    background: #e2e8f0;
    color: #1e293b;
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
}

.chip:hover {
    background: #cbd5f5;
}

.chip-primary {
    background: #008d80;
    color: white;
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
}

.chip-primary:hover {
    opacity: 0.9;
}
</style>