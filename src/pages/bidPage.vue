<script setup>
import { ref } from 'vue'

const props = defineProps({
    isOpen: Boolean
})

const emit = defineEmits(['close'])

const name = ref('')
const phone = ref('')
const problem = ref('')
const time = ref('')

const TELEGRAM_TOKEN = '8784415024:AAH9G1l6k7Y0G7m3DSNop1vF4c8HUh6ujY4'
const CHAT_ID = '7814112802'
const closeModal = () => {
    emit('close')
}
const sendToTelegram = async () => {
    const text = `
📩 Новая заявка

👤 Имя: ${name.value}
📞 Телефон: ${phone.value}
⏰ Время: ${time.value}
💬 Проблема: ${problem.value}
    `

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
        })
    })
}

const submitForm = async () => {
    if (!name.value || !phone.value) {
        alert('Заполните данные')
        return
    }

    await sendToTelegram()

    // 🔥 открываем Телемост

    emit('close')
}
</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex justify-end">

        <!-- BACKDROP -->
        <div @click="closeModal" class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <!-- MODAL -->
        <div
            class="relative w-full max-w-md bg-white h-full p-8 shadow-2xl animate-slide flex flex-col justify-between">

            <!-- TOP -->
            <div>
                <!-- CLOSE -->
                <button @click="closeModal"
                    class="absolute top-5 right-5 text-gray-400 hover:text-black text-xl transition">
                    ✕
                </button>

                <!-- TITLE -->
                <h2 class="text-3xl font-bold mb-2 text-[#3c3c3c]">
                    Заявка на консультацию
                </h2>

                <p class="text-gray-500 mb-6 text-sm">
                    Ответим в течение 7 минут
                </p>

                <!-- FORM -->
                <div class="space-y-4">

                    <!-- TEXTAREA -->
                    <textarea v-model="problem" placeholder="Опишите вашу проблему"
                        class="w-full h-28 border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80] focus:ring-2 focus:ring-[#008d80]/20 transition resize-none"></textarea>

                    <!-- NAME -->
                    <input v-model="name" type="text" placeholder="Ваше имя"
                        class="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80] focus:ring-2 focus:ring-[#008d80]/20 transition" />

                    <!-- PHONE -->
                    <input v-model="phone" type="text" placeholder="+998 __ ___ __ __"
                        class="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80] focus:ring-2 focus:ring-[#008d80]/20 transition" />

                    <!-- TIME (🔥 добавили) -->
                    <select v-model="time"
                        class="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80]">
                        <option disabled selected>Выберите время консультации</option>
                        <option>10:00</option>
                        <option>12:00</option>
                        <option>15:00</option>
                        <option>18:00</option>
                    </select>

                    <!-- CHECKBOX -->
                    <label class="flex items-start gap-3 text-sm text-gray-500">
                        <input type="checkbox" class="mt-1 accent-[#008d80]" />
                        Даю согласие на обработку персональных данных
                    </label>
                </div>
            </div>

            <!-- BOTTOM -->
            <div class="mt-6">

                <!-- BUTTON -->
                <button @click="submitForm" class="w-full h-14 bg-[#008d80] text-white rounded-2xl font-bold">
                    Получить консультацию
                </button>

                <p class="text-center text-xs text-gray-400 mt-3">
                    Нажимая кнопку, вы соглашаетесь с условиями
                </p>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes slide {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}

.animate-slide {
    animation: slide 0.35s ease;
}
</style>