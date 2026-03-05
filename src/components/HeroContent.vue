<script setup>
const features = [
    "На связи 24/7: поможем в любое время суток.",
    "Консультация в чате и по телефону.",
    "Ответим через 7 минут — не откладывайте решение проблем."
]
</script>

<template>
    <div class="lg:w-1/2 text-center lg:text-left">
        <p class="mb-10 text-lg text-[#3c3c3c]">
            Быстро и грамотно решим ваш юридический вопрос.
        </p>

        <h1 class="mb-8 text-5xl font-bold text-[#3c3c3c]">
            Юридический сервис
        </h1>

        <ul class="mb-12 space-y-6">
            <li v-for="(t, i) in features" :key="i" class="flex items-start gap-3 text-[#3c3c3c]">
                <span class="mt-[2px] grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#008d80]">
                    <i class="fa-solid fa-check text-[12px] text-white"></i>
                </span>
                <p class="text-[16px] leading-6">
                    {{ t }}
                </p>
            </li>
        </ul>

        <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button
                class="h-14 rounded-2xl bg-[#008d80] px-10 text-base font-bold text-white shadow-lg transition hover:bg-[#09695f]">
                Задать вопрос юристу
            </button>

            <a href="tel:+998916686787"
                class="h-14 rounded-2xl border border-gray-300 bg-transparent px-10 grid place-items-center text-[18px] font-bold text-black shadow-lg">
                +998 91 668-67-87
            </a>
        </div>
    </div>
</template>