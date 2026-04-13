<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const bubbles = computed(() => [
    {
        side: "left",
        color: "dark",
        text: t('chat.b1'),
        time: "10:35",
        delay: 0,
    },
    {
        side: "right",
        color: "teal",
        text: t('chat.b2'),
        time: "10:35",
        delay: 120,
    },
    {
        side: "left",
        color: "dark",
        text: t('chat.b3'),
        time: "10:36",
        delay: 240,
    },
    {
        side: "right",
        color: "teal",
        text: t('chat.b4'),
        time: "10:37",
        delay: 360,
    },
])

const socialBtn =
    "h-14 w-14 rounded-xl bg-[#008d80] grid place-items-center shadow-[0_10px_25px_rgba(0,141,128,0.25)] transition hover:scale-[1.04] active:scale-[0.98]"
</script>

<template>
    <section class="relative overflow-hidden bg-white">
        <div class="absolute inset-0 bg-[#f4f6f7]" />

        <!-- Декор -->
        <div class="pointer-events-none absolute -right-16 bottom-6 hidden md:block opacity-90">
            <svg width="520" height="360" viewBox="0 0 520 360" fill="none" class="text-[#008d80]">
                <path
                    d="M480 40c-88 30-168 64-240 116-52 38-100 86-116 134-12 36 6 62 48 60 44-2 70-42 54-74-14-28-50-28-74-10-34 26-54 76-34 116 30 62 126 74 196 34 62-36 104-104 120-166"
                    stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                <path d="M360 290c22 0 40 18 40 40" stroke="currentColor" stroke-width="3" />
                <path d="M412 262c12 0 22 10 22 22" stroke="currentColor" stroke-width="3" />
                <path d="M452 240c10 0 18 8 18 18" stroke="currentColor" stroke-width="3" />
            </svg>
        </div>

        <div class="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
            <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-12">

                <!-- LEFT -->
                <div class="order-2 lg:order-1 flex flex-col gap-6 sm:gap-8">

                    <div
                        class="rounded-2xl bg-[#eef1f3] px-5 py-5 sm:px-7 sm:py-7 text-[16px] sm:text-[18px] text-[#2b2f33]">
                        <span class="font-semibold text-[#008d80]">{{ t('chat.contact') }}</span>
                        {{ t('chat.contactText') }}
                    </div>

                    <div
                        class="rounded-2xl bg-[#eef1f3] px-5 py-5 sm:px-7 sm:py-7 text-[16px] sm:text-[18px] text-[#2b2f33]">
                        <span class="font-semibold text-[#008d80]">{{ t('chat.get') }}</span>
                        {{ t('chat.getText') }}
                    </div>

                </div>

                <!-- CENTER PHONE -->
                <div class="order-1 lg:order-2 flex justify-center">
                    <div class="relative h-[520px] w-[270px] sm:h-[640px] sm:w-[320px]
                        rounded-[48px] border border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

                        <div class="absolute inset-[10px] rounded-[40px] border border-black/10 bg-[#fbfbfb]" />

                        <div class="absolute left-1/2 top-[16px] z-20 flex -translate-x-1/2 gap-2">
                            <div class="h-[6px] w-[56px] rounded-full bg-black/70" />
                            <div class="h-[9px] w-[9px] rounded-full bg-black/60" />
                        </div>

                        <div class="absolute inset-[18px] z-10 overflow-hidden rounded-[36px] bg-white">

                            <div class="flex h-[52px] items-center justify-center border-b bg-white">
                                <span class="text-[15px] font-semibold">khamidov.uz</span>
                            </div>

                            <div class="flex h-[calc(100%-52px)] flex-col bg-[#f4f6f7] px-4 pt-4 pb-5">

                                <div class="flex flex-col gap-3">
                                    <div v-for="(b, i) in bubbles" :key="i"
                                        :class="b.side === 'right' ? 'items-end' : 'items-start'" class="flex flex-col"
                                        :style="{ animationDelay: `${b.delay}ms` }">

                                        <div class="bubble-in rounded-2xl px-4 py-3 text-[13px]" :class="b.color === 'dark'
                                            ? 'bg-[#2c2f33] text-white'
                                            : 'bg-[#008d80] text-white'">
                                            {{ b.text }}
                                        </div>

                                        <div class="text-[11px] text-black/35">
                                            {{ b.time }}
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-3 rounded-full border bg-white px-4 py-3 text-[13px] text-black/35">
                                    {{ t('chat.placeholder') }}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT -->
                <div class="order-3 flex flex-col items-center lg:items-start gap-6 sm:gap-10">

                    <div
                        class="rounded-2xl bg-[#eef1f3] px-5 py-5 sm:px-7 sm:py-7 text-[16px] sm:text-[18px] text-[#2b2f33]">
                        <span class="font-semibold text-[#008d80]">{{ t('chat.describe') }}</span>
                        {{ t('chat.describeText') }}
                    </div>

                    <div class="flex items-center gap-4">
                        <a href="https://t.me/Khamdwww" :class="socialBtn">
                            <i class="fa-brands fa-telegram text-white text-3xl"></i>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.bubble-in {
    opacity: 0;
    transform: translateY(10px);
    animation: bubbleIn 0.5s forwards;
}

@keyframes bubbleIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>