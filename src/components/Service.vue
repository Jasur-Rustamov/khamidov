<script setup>
</script>

<template>
    <div class="px-4 mt-12 max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-6xl font-medium text-center mb-10">
            Выберите <span class="text-[#008d80]">услугу</span>
        </h2>

        <div class="flex flex-col md:flex-row">

            <!-- Карточка -->
            <div
                class="flex flex-col items-center text-center justify-center px-6 py-8 md:px-10 md:border-r border-gray-300">

                <h3 class="text-2xl md:text-3xl font-semibold mb-2 text-[#3c3c3c]">
                    Работа с документами
                </h3>

                <p class="text-gray-600 mb-4 max-w-sm">
                    Анализ, составление и изменение документов.
                </p>

                <div class="bg-[#eaf4f3] px-5 py-2 rounded-2xl mt-5 flex items-center justify-center gap-2">
                    <span class="text-xl md:text-2xl font-bold text-[#008d80] flex items-center">
                        <span class="text-xs mt-1 mr-1">от</span>
                        14 990 ₽
                    </span>

                    <span class="line-through text-sm md:text-base">
                        25 590 ₽
                    </span>
                </div>
            </div>

            <!-- Карточка -->
            <div
                class="flex flex-col items-center text-center justify-center px-6 py-8 md:px-10 md:border-r border-gray-300">

                <h3 class="text-2xl md:text-3xl font-semibold mb-2 text-[#3c3c3c]">
                    Консультация
                </h3>

                <p class="text-gray-600 mb-4 max-w-sm">
                    Консультация (устная) без ограничения по времени.
                </p>

                <button class="bg-[#008d80] hover:bg-[#0aa093] text-white px-10 py-2 rounded-2xl mt-5 transition">
                    Заказать
                </button>
            </div>

            <!-- Карточка -->
            <div class="flex flex-col items-center text-center justify-center px-6 py-8 md:px-10">

                <h3 class="text-2xl md:text-3xl font-semibold mb-2 text-[#3c3c3c]">
                    Судебные споры
                </h3>

                <p class="text-gray-600 mb-4 max-w-sm">
                    Правовая защита ваших интересов в суде
                </p>

                <div class="bg-[#eaf4f3] px-5 py-2 rounded-2xl mt-5 flex items-center justify-center gap-2">
                    <span class="text-xl md:text-2xl font-bold text-[#008d80] flex items-center">
                        <span class="text-xs mt-1 mr-1">от</span>
                        25 590 ₽
                    </span>

                    <span class="line-through text-sm md:text-base">
                        35 590 ₽
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>