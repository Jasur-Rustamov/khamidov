<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ChatWidget from '../components/ChatWidget.vue'
import ConsultModal from './ConsultModal.vue'

const { t } = useI18n()
const isModalOpen = ref(false)

// ✅ реактивно обновляется при смене языка
const features = computed(() => [
    t('hero.f1'),
    t('hero.f2'),
    t('hero.f3')
])
</script>

<template>
    <div class="lg:w-1/2 text-center lg:text-left">
        <p class="mb-10 text-lg text-[#3c3c3c]">
            {{ t('hero.subtitle') }}
        </p>

        <h1 class="mb-8 text-5xl font-bold text-[#3c3c3c]">
            {{ t('hero.title') }}
        </h1>

        <ul class="mb-12 space-y-6">
            <li v-for="(item, i) in features" :key="i" class="flex items-start gap-3 text-[#3c3c3c]">
                <span class="mt-[2px] grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#008d80]">
                    <i class="fa-solid fa-check text-[12px] text-white"></i>
                </span>
                <p class="text-[16px] leading-6">
                    {{ item }}
                </p>
            </li>
        </ul>

        <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button @click="isModalOpen = true"
                class="h-14 rounded-2xl bg-[#008d80] px-10 text-base font-bold text-white shadow-lg transition hover:bg-[#09695f]">
                {{ t('hero.button') }}
            </button>

            <ChatWidget />

            <a href="tel:+998901605156"
                class="h-14 rounded-2xl border border-gray-300 bg-transparent px-10 grid place-items-center text-[18px] font-bold text-black shadow-lg">
                +998 90 160-51-56
            </a>
        </div>

        <ConsultModal :isOpen="isModalOpen" @close="isModalOpen = false" />
    </div>
</template>