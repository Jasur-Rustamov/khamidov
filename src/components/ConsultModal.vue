<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    isOpen: Boolean
})

const emit = defineEmits(['close'])

const name = ref('')
const phone = ref('')
const problem = ref('')
const time = ref('')
const agree = ref(false)

const TELEGRAM_TOKEN = '8784415024:AAH9G1l6k7Y0G7m3DSNop1vF4c8HUh6ujY4'
const CHAT_ID = '7814112802'

const closeModal = () => {
    emit('close')
}

const sendToTelegram = async () => {
    const text = `
📩 ${t('modal.new')}

👤 ${t('modal.name')}: ${name.value}
📞 ${t('modal.phone')}: ${phone.value}
⏰ ${t('modal.time')}: ${time.value}
💬 ${t('modal.problem')}: ${problem.value}
    `

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text
        })
    })
}

const submitForm = async () => {
    if (!name.value || !phone.value) {
        alert(t('modal.error'))
        return
    }

    if (!agree.value) {
        alert(t('modal.agreeError'))
        return
    }

    await sendToTelegram()

    name.value = ''
    phone.value = ''
    problem.value = ''
    time.value = ''

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
                    {{ t('modal.title') }}
                </h2>

                <p class="text-gray-500 mb-6 text-sm">
                    {{ t('modal.subtitle') }}
                </p>

                <!-- FORM -->
                <div class="space-y-4">

                    <!-- TEXTAREA -->
                    <textarea v-model="problem" :placeholder="t('modal.problemPlaceholder')"
                        class="w-full h-28 border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80] focus:ring-2 focus:ring-[#008d80]/20 transition resize-none"></textarea>

                    <!-- NAME -->
                    <input v-model="name" type="text" :placeholder="t('modal.namePlaceholder')"
                        class="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80] focus:ring-2 focus:ring-[#008d80]/20 transition" />

                    <!-- PHONE -->
                    <input v-model="phone" type="text" :placeholder="t('modal.phonePlaceholder')"
                        class="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#008d80] focus:ring-2 focus:ring-[#008d80]/20 transition" />

                    <!-- TIME (🔥 добавили) -->
                    <select v-model="time">
                        <option disabled value="">
                            {{ t('modal.selectTime') }}
                        </option>
                        <option>10:00</option>
                        <option>12:00</option>
                        <option>15:00</option>
                        <option>18:00</option>
                    </select>
                    <br>
                    <!-- CHECKBOX -->
                    <label>
                        <input type="checkbox" v-model="agree" />
                        {{ t('modal.agree') }}
                    </label>
                </div>
            </div>

            <!-- BOTTOM -->
            <div class="mt-6">

                <!-- BUTTON -->
                <button class="w-full h-14 bg-[#008d80] text-white rounded-2xl font-bold">
                    {{ t('modal.button') }}
                </button>

                <p>
                    {{ t('modal.footer') }}
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