<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()

const { locale, t } = useI18n()
const search = ref('')

const changeLang = (lang) => {
    locale.value = lang
    localStorage.setItem('lang', lang)
}

const changeAndScroll = async () => {
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

const onSearch = async () => {
    if (!search.value.trim()) return

    if (route.path !== '/') {
        await router.push({
            path: '/',
            query: { search: search.value }
        })
    } else {
        await router.push({
            query: { ...route.query, search: search.value }
        })
    }

    setTimeout(() => {
        const el = document.getElementById('services')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, 300)
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

                    <button @click="changeAndScroll"
                        class="flex h-11 items-center gap-2 rounded-full bg-[#008d80] px-5 text-sm font-medium text-white hover:opacity-90 transition">
                        {{ t('header.services') }}
                    </button>

                    <div class="hidden md:flex flex-1 mx-6 max-w-xl">
                        <input v-model="search" @keyup.enter="onSearch" type="text" :placeholder="t('header.search')"
                            class="h-11 w-full rounded-l-full border border-gray-300 px-4 outline-none focus:border-[#008d80]" />
                        <button @click="onSearch" class="h-11 rounded-r-full bg-[#008d80] px-6 text-sm text-white">
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
                    <!-- TELEGRAM + WHATSAPP -->
                    <div class="hidden lg:flex gap-4 items-center text-[#008d80]">

                        <!-- TELEGRAM -->
                        <a href="https://t.me/Khamdwww" target="_blank">
                            <img src="../images/icons8-телеграм-50.png"
                                class="w-6 hover:scale-110 transition duration-200" />
                        </a>

                        <!-- WHATSAPP -->
                        <a href="https://wa.me/998901605156" target="_blank">
                            <img src="../images/icons8-whatsapp-50.png"
                                class="w-6 hover:scale-110 transition duration-200" />
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