<template>
    <section class="bg-[#f6f7f8] py-10 sm:py-14">
        <div class="mx-auto container px-4 sm:px-6">
            <div class="relative overflow-hidden rounded-[28px] sm:rounded-[48px] bg-white
               shadow-[0_30px_90px_rgba(0,0,0,0.08)]
               px-5 py-8 sm:px-10 sm:py-12 md:px-16 md:py-16">
                <div class="grid items-center gap-10 md:grid-cols-2 md:gap-8">
                    <!-- Текст -->
                    <div class="max-w-[560px]">
                        <h1 class="text-[#111827] font-medium leading-[1.1]
                     text-3xl sm:text-4xl lg:text-[60px]">
                            Банкротство
                            <br class="hidden sm:block" />
                            и законное списание
                            <br class="hidden sm:block" />
                            долгов
                        </h1>

                        <ul class="mt-8 sm:mt-10 space-y-4">
                            <li class="flex items-start gap-4">
                                <span
                                    class="mt-[2px] grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#111827] text-white">
                                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <p class="text-[14px] sm:text-[16px] text-[#111827]/80 leading-relaxed">
                                    Подскажем, что делать в вашей ситуации
                                </p>
                            </li>

                            <li class="flex items-start gap-4">
                                <span
                                    class="mt-[2px] grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#111827] text-white">
                                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <p class="text-[14px] sm:text-[16px] text-[#111827]/80 leading-relaxed">
                                    Ответим на вопросы о закрытии кредитов
                                </p>
                            </li>

                            <li class="flex items-start gap-4">
                                <span
                                    class="mt-[2px] grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#111827] text-white">
                                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <p class="text-[14px] sm:text-[16px] text-[#111827]/80 leading-relaxed">
                                    Проведем процедуру под ключ
                                </p>
                            </li>
                        </ul>

                        <button class="mt-8 sm:mt-10 inline-flex w-full sm:w-auto h-[54px] sm:h-[56px]
                     items-center justify-center rounded-[14px]
                     bg-[#0a8f80] px-6 sm:px-8
                     text-[15px] sm:text-[16px] font-semibold text-white
                     shadow-[0_18px_45px_rgba(10,143,128,0.25)]
                     transition hover:bg-[#0aa08f]">
                            Получить бесплатную консультацию
                        </button>
                    </div>

                    <!-- Картинка -->
                    <div class="relative flex justify-center md:justify-end">
                        <img src="../images/bankruptcy_women.svg" alt="illustration"
                            class="w-[280px] sm:w-[340px] md:w-[430px] select-none" draggable="false" />

                        <!-- Декор/стикер -->
                        <div class="pointer-events-none absolute left-[-25%] bottom-[12%] hidden md:block">
                            <img src="../images/bankruptcy_cases_mark.svg" alt="" class="w-[220px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>