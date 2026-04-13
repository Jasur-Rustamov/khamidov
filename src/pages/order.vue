<script setup>
import { ref } from 'vue'

const name = ref('')
const phone = ref('')
const problem = ref('')
const time = ref('')

const TELEGRAM_TOKEN = '8784415024:AAH9G1l6k7Y0G7m3DSNop1vF4c8HUh6ujY4'
const CHAT_ID = '7814112802'

const sendToTelegram = async () => {
    const text = `
📩 Новая заявка

👤 Имя: ${name.value}
📞 Телефон: ${phone.value}
⏰ Время: ${time.value}
💬 Тема: ${problem.value}
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
        alert('Заполните имя и телефон')
        return
    }

    await sendToTelegram()

    // очистка формы
    name.value = ''
    phone.value = ''
    problem.value = ''
    time.value = ''

    alert('Заявка отправлена ✅')
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center px-4 py-10 bg-[#f6f7f8]">

        <div class="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8">

            <!-- TITLE -->
            <h2 class="text-3xl font-bold mb-2 text-[#3c3c3c]">
                Заявка
            </h2>

            <p class="text-gray-500 mb-6 text-sm">
                Ответим в течение 7 минут
            </p>

            <!-- FORM -->
            <div class="space-y-4">

                <!-- TEXTAREA -->
                <textarea v-model="problem" placeholder="Опишите вашу тему"
                    class="w-full h-28 border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80] focus:ring-2 focus:ring-[#008d80]/20 transition resize-none">
        </textarea>

                <!-- NAME -->
                <input v-model="name" type="text" placeholder="Ваше имя"
                    class="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80] focus:ring-2 focus:ring-[#008d80]/20 transition" />

                <!-- PHONE -->
                <input v-model="phone" type="text" placeholder="+998 __ ___ __ __"
                    class="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80] focus:ring-2 focus:ring-[#008d80]/20 transition" />

                <!-- TIME -->
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

                <!-- BUTTON -->
                <button @click="submitForm"
                    class="w-full h-14 bg-[#008d80] hover:bg-[#0aa093] transition text-white rounded-2xl font-bold">
                    Подать заявку
                </button>

                <p class="text-center text-xs text-gray-400">
                    Нажимая кнопку, вы соглашаетесь с условиями
                </p>

            </div>
        </div>
    </div>
</template>