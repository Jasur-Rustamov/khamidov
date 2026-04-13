<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()

// 🌍 i18n
const { locale, t } = useI18n()

const changeLang = (lang) => {
    locale.value = lang
    localStorage.setItem('lang', lang)
}

const scrollToServices = async () => {
    if (route.path !== '/') {
        await router.push('/')

        setTimeout(() => {
            const el = document.getElementById('services')
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }, 300)

        return
    }

    const el = document.getElementById('services')
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
</script>

<template>
    <header class="w-full border-b border-gray-200 bg-white relative z-50">
        <div class="mx-auto max-w-[1200px] px-4">
            <div class="flex items-center justify-between py-4">

                <!-- LEFT -->
                <div class="flex items-center gap-5">
                    <h1 class="text-2xl font-semibold text-black">
                        khamidov.uz
                    </h1>

                    <button @click="scrollToServices"
                        class="flex h-11 items-center gap-2 rounded-full bg-[#008d80] px-5 text-sm font-medium text-white hover:opacity-90 transition">
                        {{ t('header.services') }}
                    </button>

                    <div class="hidden md:flex flex-1 mx-6 max-w-xl">
                        <input type="text" :placeholder="t('header.search')"
                            class="h-11 w-full rounded-l-full border border-gray-300 px-4 outline-none focus:border-[#008d80]" />
                        <button class="h-11 rounded-r-full bg-[#008d80] px-6 text-sm text-white">
                            {{ t('header.find') }}
                        </button>
                    </div>
                </div>

                <!-- RIGHT -->
                <div class="flex items-center gap-4">

                    <!-- 🔥 ПЕРЕКЛЮЧАТЕЛЬ -->
                    <div class="flex items-center bg-gray-100 rounded-full p-1">
                        <button @click="changeLang('ru')" :class="locale === 'ru'
                            ? 'bg-[#008d80] text-white'
                            : 'text-gray-600'" class="px-3 py-1 rounded-full text-sm transition">
                            RU
                        </button>

                        <button @click="changeLang('uz')" :class="locale === 'uz'
                            ? 'bg-[#008d80] text-white'
                            : 'text-gray-600'" class="px-3 py-1 rounded-full text-sm transition">
                            UZ
                        </button>
                    </div>

                    <!-- TELEGRAM -->
                    <div class="hidden lg:flex gap-5 text-[#008d80]">
                        <a href="https://t.me/Khamdwww" target="_blank">
                            <img src="../images/icons8-телеграм-50.png" class="w-6 hover:scale-110 transition" />
                        </a>
                    </div>

                    <!-- PHONE -->
                    <a href="tel:+998901605156"
                        class="hidden lg:flex h-11 items-center rounded-full bg-black px-6 text-white text-sm">
                        +998 90 160-51-56
                    </a>

                </div>

            </div>
        </div>
    </header>
</template>