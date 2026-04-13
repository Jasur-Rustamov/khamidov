<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const name = defineModel("name", { default: "" })
const phone = defineModel("phone", { default: "" })
const agree = defineModel("agree", { default: true })

const success = ref(false)
const loading = ref(false)

const TOKEN = '8784415024:AAH9G1l6k7Y0G7m3DSNop1vF4c8HUh6ujY4'
const CHAT_ID = '7814112802'

const sendForm = async () => {
    if (!name.value || !phone.value) {
        alert(t('form.errorFill'))
        return
    }

    if (!agree.value) {
        alert(t('form.errorAgree'))
        return
    }

    loading.value = true

    const text = `
📩 ${t('form.newRequest')}

👤 ${t('form.name')}: ${name.value}
📞 ${t('form.phone')}: ${phone.value}
    `

    try {
        await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text
            })
        })

        success.value = true
        name.value = ""
        phone.value = ""

        setTimeout(() => {
            success.value = false
        }, 5000)

    } catch {
        alert(t('form.errorSend'))
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <section class="relative bg-[#008d80] py-12 sm:py-[70px] overflow-hidden">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6">

            <!-- TITLE -->
            <h1 class="text-center text-white font-medium text-3xl sm:text-4xl lg:text-[60px] leading-tight">
                {{ t('form.title') }}
            </h1>

            <div class="mt-10 sm:mt-[60px] flex flex-col items-center">
                <div class="w-full max-w-[820px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    <!-- NAME -->
                    <div>
                        <label class="block mb-2 text-white text-[14px] sm:text-[16px] font-light">
                            {{ t('form.labelName') }}
                        </label>

                        <div class="flex items-center h-[56px] px-6 bg-white rounded-[16px]">
                            <input v-model="name" type="text" :placeholder="t('form.placeholderName')"
                                class="w-full text-[16px] font-light outline-none" />
                        </div>
                    </div>

                    <!-- PHONE -->
                    <div>
                        <label class="block mb-2 text-white text-[14px] sm:text-[16px] font-light">
                            {{ t('form.labelPhone') }}
                        </label>

                        <div class="flex items-center h-[56px] px-6 bg-white rounded-[16px]">
                            <input v-model="phone" type="tel" :placeholder="t('form.placeholderPhone')"
                                class="w-full text-[16px] font-light outline-none" />
                        </div>
                    </div>

                </div>

                <!-- AGREEMENT -->
                <div class="flex items-center justify-center gap-3 mt-6">
                    <button @click="agree = !agree"
                        class="grid place-items-center w-[26px] h-[26px] rounded-[8px] border border-white/45 bg-white/10">
                        <svg v-if="agree" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5" stroke="white" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>

                    <span class="text-white/70 text-[13px] font-light">
                        {{ t('form.agree') }}
                    </span>
                </div>

                <!-- BUTTON -->
                <button @click="sendForm" :disabled="loading" class="mt-8 h-[60px] w-full sm:w-[320px] rounded-[15px]
                    bg-[#ff3b1d] hover:bg-[#ff4c30] text-white text-[20px]
                    font-semibold transition disabled:opacity-50">

                    {{ loading ? t('form.sending') : t('form.button') }}
                </button>

                <!-- SUCCESS -->
                <p v-if="success" class="text-white text-center mt-4 text-lg font-medium">
                    {{ t('form.success') }}
                </p>
            </div>

            <!-- INFO BLOCK -->
            <div class="flex justify-center mt-12 sm:mt-[80px]">
                <div class="w-full max-w-[900px] bg-white rounded-[40px] shadow-xl px-10 pt-8 pb-10">

                    <h2 class="text-center text-[#161616] text-[26px] font-normal">
                        {{ t('form.resultTitle') }}
                    </h2>

                    <div class="mx-auto mt-10 space-y-6 w-full max-w-[650px]">

                        <div class="flex gap-4">
                            <div class="flex items-center justify-center w-6 h-6 text-white bg-black rounded-full">✓
                            </div>
                            <p class="text-[16px] font-light text-[#161616]">
                                {{ t('form.result1') }}
                            </p>
                        </div>

                        <div class="flex gap-4">
                            <div class="flex items-center justify-center w-6 h-6 text-white bg-black rounded-full">✓
                            </div>
                            <p class="text-[16px] font-light text-[#161616]">
                                {{ t('form.result2') }}
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
</template>