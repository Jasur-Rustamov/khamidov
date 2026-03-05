<script setup>
</script>

<template>
    <header class="w-full border-b border-gray-200 bg-white">
        <div class="mx-auto max-w-[1200px] px-4">
            <div class="flex items-center justify-between py-4">

                <div class="flex items-center gap-5">
                    <h1 class="text-2xl font-semibold text-black">
                        <span class="font-normal">khamidov.uz</span>
                    </h1>

                    <button
                        class="flex h-11 items-center gap-2 rounded-full bg-[#008d80] px-5 text-sm font-medium text-white transition hover:opacity-90">
                        <i class="fa-solid fa-bars"></i>
                        <span>Услуги</span>
                    </button>

                    <div class="hidden md:flex flex-1 mx-6 max-w-xl">
                        <input type="text" placeholder="Поиск по услуге"
                            class="h-11 w-full flex-1 rounded-l-full border border-gray-300 px-4 outline-none focus:border-[#008d80]" />
                        <button
                            class="h-11 shrink-0 rounded-r-full bg-[#008d80] px-6 text-sm font-medium text-white transition hover:opacity-90">
                            <i class="fa-solid fa-magnifying-glass mr-2"></i>
                            Найти
                        </button>
                    </div>
                </div>

                <div class="flex items-center">
                    <div class="hidden lg:flex items-center gap-5 text-[#008d80]">
                        <img src="../images/icons8-телеграм-50.png"
                            class="w-6 cursor-pointer transition hover:scale-110" alt="Telegram" />
                        <img src="../images/icons8-whatsapp-50.png"
                            class="w-6 cursor-pointer transition hover:scale-110" alt="WhatsApp" />
                        <img src="../images/icons8-тема-50.png" class="w-6 cursor-pointer transition hover:scale-110"
                            alt="Theme toggle" />
                    </div>

                    <a href="tel:+998916686787"
                        class="hidden lg:flex ml-6 h-11 items-center rounded-full bg-gray-900 px-6 text-sm font-medium text-white transition hover:bg-black">
                        +998 91 668-67-87
                    </a>

                    <div class="ml-4">
                        <img src="../images/icons8-пользователь-без-половых-признаков-96.png"
                            class="w-7 cursor-pointer transition hover:scale-110" alt="Profile" />
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>