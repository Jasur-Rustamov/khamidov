<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const isOpen = ref(false);
const messages = ref([]);
const input = ref("");
const loading = ref(false);
const chatRef = ref(null);

// приветствие
onMounted(() => {
    setTimeout(() => {
        messages.value.push({
            role: "bot",
            text: "Здравствуйте! Чем могу помочь?",
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

// печать
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

    loading.value = true;

    try {
        const res = await fetch("https://khamidov.onrender.com/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: userMessage,
            }),
        });

        const data = await res.json();

        await typeText(data.reply);
    } catch {
        messages.value.push({
            role: "bot",
            text: "Ошибка сервера",
        });
    }

    loading.value = false;
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
                        💬
                    </div>
                    <span class="font-semibold">Онлайн чат</span>
                </div>
                <button @click="isOpen = false">✕</button>
            </div>

            <!-- сообщения -->
            <div ref="chatRef" class="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8fafc]">
                <div v-for="(msg, i) in messages" :key="i">
                    <div :class="msg.role === 'user'
                        ? 'flex justify-end'
                        : 'flex items-start gap-2'">

                        <div v-if="msg.role === 'bot'"
                            class="w-7 h-7 bg-[#008d80] text-white rounded-full flex items-center justify-center text-sm">
                            💬
                        </div>

                        <div :class="msg.role === 'user'
                            ? 'bg-[#008d80] text-white'
                            : 'bg-gray-100 text-gray-800'"
                            class="px-4 py-2 rounded-2xl max-w-[75%] text-[14px] leading-5">
                            {{ msg.text }}
                        </div>
                    </div>
                </div>

                <div v-if="loading">
                    Печатает...
                </div>
            </div>

            <!-- input -->
            <div class="flex items-center border-t bg-white px-2 py-2">
                <input v-model="input" @keydown.enter.prevent="sendMessage" placeholder="Напишите сообщение..."
                    class="flex-1 px-4 py-3 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-[#008d80] bg-gray-50" />

                <button @click="sendMessage"
                    class="bg-[#008d80] text-white px-5 py-2 rounded-xl ml-2 hover:scale-105 transition">
                    ➤
                </button>
            </div>
        </div>
    </transition>
</template>