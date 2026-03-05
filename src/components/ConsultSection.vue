<script setup>
const name = defineModel("name", { default: "" })
const phone = defineModel("phone", { default: "" })
const agree = defineModel("agree", { default: true })
</script>

<template>
    <section class="relative bg-[#008d80] py-12 sm:py-[70px] overflow-hidden">
        <div class="max-w-[1200px] mx-auto px-4 sm:px-6">
            <h1 class="text-center text-white font-medium text-3xl sm:text-4xl lg:text-[60px] leading-tight">
                Нужна консультация юриста?
            </h1>

            <div class="mt-10 sm:mt-[60px] flex flex-col items-center">
                <div class="w-full max-w-[820px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                        <label class="block mb-2 text-white text-[14px] sm:text-[16px] font-light">
                            Как нам к вам обращаться
                        </label>

                        <div class="flex items-center h-[54px] sm:h-[56px] px-5 sm:px-6 bg-white rounded-[16px]">
                            <input v-model="name" type="text" placeholder="Владимир Владимирович"
                                class="w-full text-[15px] sm:text-[16px] font-light outline-none" />
                        </div>
                    </div>

                    <div>
                        <label class="block mb-2 text-white text-[14px] sm:text-[16px] font-light">
                            Номер телефона
                        </label>

                        <div class="flex items-center h-[54px] sm:h-[56px] px-5 sm:px-6 bg-white rounded-[16px]">
                            <input v-model="phone" type="tel" placeholder="+7 ___ ___ ___"
                                class="w-full text-[15px] sm:text-[16px] font-light outline-none" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center gap-3 mt-6">
                    <button type="button" @click="agree = !agree"
                        class="grid place-items-center w-[26px] h-[26px] rounded-[8px] border border-white/45 bg-white/10 shrink-0"
                        aria-label="Согласие на обработку данных">
                        <svg v-if="agree" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17l-5-5" stroke="white" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>

                    <span class="text-white/70 text-[12px] sm:text-[13px] font-light">
                        Даю
                        <span class="underline underline-offset-4">согласие</span>
                        на обработку данных
                    </span>
                </div>

                <button class="mt-8 h-[56px] sm:h-[60px] w-full sm:w-[320px] rounded-[15px]
                 bg-[#ff3b1d] hover:bg-[#ff4c30] text-white text-[18px] sm:text-[20px]
                 font-semibold transition">
                    Перезвоните мне
                </button>
            </div>

            <!-- Декор (прячем на мобилке, чтобы не ломал) -->
            <img src="../images/callback_answer.svg"
                class="hidden lg:block absolute right-[60px] top-[420px] w-[220px] pointer-events-none select-none"
                alt="" />

            <!-- Блок "Что вы получите" -->
            <div class="flex justify-center mt-12 sm:mt-[80px]">
                <div
                    class="w-full max-w-[900px] bg-white rounded-[28px] sm:rounded-[60px] shadow-xl px-5 sm:px-10 pt-6 sm:pt-8 pb-8 sm:pb-10">
                    <h2 class="text-center text-[#161616] text-[20px] sm:text-[26px] lg:text-[30px] font-normal">
                        Что вы получите:
                    </h2>

                    <div class="mx-auto mt-8 sm:mt-10 space-y-6 w-full max-w-[650px]">
                        <div class="flex gap-4">
                            <div
                                class="flex items-center justify-center w-6 h-6 text-white bg-black rounded-full shrink-0">
                                ✓
                            </div>

                            <p class="text-[14px] sm:text-[16px] font-light text-[#161616] leading-relaxed">
                                Прогнозы разрешения вашего кейса, исходя из похожих случаев на рынке
                            </p>
                        </div>

                        <div class="flex gap-4">
                            <div
                                class="flex items-center justify-center w-6 h-6 text-white bg-black rounded-full shrink-0">
                                ✓
                            </div>

                            <p class="text-[14px] sm:text-[16px] font-light text-[#161616] leading-relaxed">
                                Решение: мы подберем юриста, выступающего экспертом в этой области права
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>