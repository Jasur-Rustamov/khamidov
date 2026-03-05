<script setup>
const bubbles = [
    {
        side: "left",
        color: "dark",
        text:
            "Здравствуйте! Хочу купить автомобиль у частника, он прислал договор купли-продажи. Сможете его проверить?",
        time: "10:35",
        delay: 0,
    },
    {
        side: "right",
        color: "teal",
        text: "Добрый день! Конечно, мы проанализируем договор.",
        time: "10:35",
        delay: 120,
    },
    {
        side: "left",
        color: "dark",
        text:
            "Я хочу, чтобы вы включили в договор условие о том, что если у автомобиля есть скрытые недостатки, продавец должен вернуть деньги…",
        time: "10:36",
        delay: 240,
    },
    {
        side: "right",
        color: "teal",
        text:
            "Это будет зависеть от недостатков, которые могут быть обнаружены. Разумеется, мы включим условия, которые защитят вас!",
        time: "10:37",
        delay: 360,
    },
]

const socialBtn =
    "h-14 w-14 rounded-xl bg-[#008d80] grid place-items-center shadow-[0_10px_25px_rgba(0,141,128,0.25)] transition hover:scale-[1.04] active:scale-[0.98]"
</script>

<template>
    <section class="relative overflow-hidden bg-white">
        <div class="absolute inset-0 bg-[#f4f6f7]" />

        <!-- Декор: скрываем на мобилке, чтобы не мешал -->
        <div class="pointer-events-none absolute -right-16 bottom-6 hidden md:block opacity-90">
            <svg width="520" height="360" viewBox="0 0 520 360" fill="none" class="text-[#008d80]">
                <path
                    d="M480 40c-88 30-168 64-240 116-52 38-100 86-116 134-12 36 6 62 48 60 44-2 70-42 54-74-14-28-50-28-74-10-34 26-54 76-34 116 30 62 126 74 196 34 62-36 104-104 120-166"
                    stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                <path d="M360 290c22 0 40 18 40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                <path d="M412 262c12 0 22 10 22 22" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                <path d="M452 240c10 0 18 8 18 18" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            </svg>
        </div>

        <div class="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
            <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-12">

                <!-- Левая колонка -->
                <div class="order-2 lg:order-1 flex flex-col gap-6 sm:gap-8">
                    <div
                        class="rounded-2xl bg-[#eef1f3] px-5 py-5 sm:px-7 sm:py-7 text-[16px] sm:text-[18px] leading-relaxed text-[#2b2f33]">
                        <span class="font-semibold text-[#008d80]">СВЯЖИТЕСЬ</span>
                        с нами любым удобным способом — звонок, форма обратной связи или мессенджер.
                    </div>

                    <div
                        class="rounded-2xl bg-[#eef1f3] px-5 py-5 sm:px-7 sm:py-7 text-[16px] sm:text-[18px] leading-relaxed text-[#2b2f33]">
                        <span class="font-semibold text-[#008d80]">ПОЛУЧИТЕ</span>
                        консультацию. Все материалы по вашему кейсу хранятся в личном кабинете. Вы сможете вернуться к
                        ним в любое
                        время.
                    </div>
                </div>

                <!-- Центр (телефон) -->
                <div class="order-1 lg:order-2 flex justify-center">
                    <div class="relative
                   h-[520px] w-[270px]
                   sm:h-[640px] sm:w-[320px]
                   rounded-[48px] sm:rounded-[52px]
                   border border-black/10 bg-white
                   shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                        <div
                            class="absolute inset-[10px] rounded-[40px] sm:rounded-[44px] border border-black/10 bg-[#fbfbfb]" />

                        <div class="absolute left-1/2 top-[16px] z-20 flex -translate-x-1/2 items-center gap-2">
                            <div class="h-[6px] w-[56px] rounded-full bg-black/70" />
                            <div class="h-[9px] w-[9px] rounded-full bg-black/60" />
                        </div>

                        <div
                            class="absolute inset-[18px] z-10 overflow-hidden rounded-[36px] sm:rounded-[40px] bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
                            <div class="flex h-[52px] items-center justify-center border-b border-black/5 bg-white">
                                <span class="text-[15px] font-semibold text-[#111827]">khamidov.uz</span>
                            </div>

                            <div class="flex h-[calc(100%-52px)] flex-col bg-[#f4f6f7] px-4 pt-4 pb-5">
                                <div class="flex-1 overflow-hidden">
                                    <div class="flex flex-col gap-3">
                                        <div v-for="(b, i) in bubbles" :key="i" class="flex flex-col"
                                            :class="b.side === 'right' ? 'items-end' : 'items-start'"
                                            :style="{ animationDelay: `${b.delay}ms` }">
                                            <div class="bubble-in max-w-[88%] sm:max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-sm"
                                                :class="b.color === 'dark' ? 'bg-[#2c2f33] text-white' : 'bg-[#008d80] text-white'">
                                                {{ b.text }}
                                            </div>

                                            <div class="mt-1 text-[11px] text-black/35"
                                                :class="b.side === 'right' ? 'mr-1' : 'ml-1'">
                                                {{ b.time }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="mt-3 rounded-full border border-black/10 bg-white px-4 py-3 text-[13px] text-black/35">
                                    Сообщение...
                                </div>
                            </div>
                        </div>

                        <!-- Блик: скрыть на мобилке, чтобы не резал экран -->
                        <div class="pointer-events-none absolute -left-12 top-14 hidden sm:block h-[280px] w-[120px] rotate-12 rounded-full
                     bg-gradient-to-b from-white/70 to-white/0 blur-[2px]" />
                    </div>
                </div>

                <!-- Правая колонка -->
                <div class="order-3 flex flex-col items-center lg:items-start gap-6 sm:gap-10">
                    <div
                        class="rounded-2xl bg-[#eef1f3] px-5 py-5 sm:px-7 sm:py-7 text-[16px] sm:text-[18px] leading-relaxed text-[#2b2f33]">
                        <span class="font-semibold text-[#008d80]">ОПИШИТЕ</span>
                        ситуацию и расскажите детали. Это поможет определить, какой юрист нужен именно вам.
                    </div>

                    <div class="flex items-center gap-4">
                        <a href="#" :class="socialBtn" aria-label="Telegram">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M21.8 4.6 3.9 11.6c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.7 5.2c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.8l3-14.2c.3-1.2-.4-1.7-1.3-1.3Z"
                                    fill="white" />
                            </svg>
                        </a>

                        <a href="#" :class="socialBtn" aria-label="WhatsApp">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.3c-1.6 0-3.1-.4-4.4-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.3 8.3 0 1 1 12 20.3Z"
                                    fill="white" />
                                <path
                                    d="M16.6 13.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1-.5-1.8-1.1-2.5-2-.1-.2-.1-.4.1-.5l.7-.8c.2-.2.2-.4.1-.6l-.7-1.6c-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.6.6-.9 1.5-.7 2.4.5 2.1 2.4 4 4.5 4.7.9.3 1.8.1 2.5-.5.2-.2.3-.4.3-.6v-.4c0-.2-.1-.4-.3-.5Z"
                                    fill="white" />
                            </svg>
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
    transform: translateY(10px) scale(0.98);
    animation: bubbleIn 520ms ease forwards;
}

@keyframes bubbleIn {
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
</style>