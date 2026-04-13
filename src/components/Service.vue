<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

// ✅ все данные через computed (реактивно)
const services = computed(() => [
    {
        title: t('services.s1.title'),
        desc: t('services.s1.desc'),
        price: '100$',
        oldPrice: '250$'
    },
    {
        title: t('services.s2.title'),
        desc: t('services.s2.desc'),
        button: t('services.s2.button')
    },
    {
        title: t('services.s3.title'),
        desc: t('services.s3.desc'),
        price: '500$+',
        oldPrice: '800$+'
    }
])
</script>

<template>
    <div class="px-4 mt-12 max-w-7xl mx-auto scroll-mt-[100px]">

        <!-- Заголовок -->
        <h2 class="text-3xl md:text-6xl font-medium text-center mb-10">
            {{ t('services.title') }}
            <span class="text-[#008d80]">{{ t('services.highlight') }}</span>
        </h2>

        <div class="flex flex-col md:flex-row">

            <div v-for="(item, i) in services" :key="i"
                class="flex flex-col items-center text-center justify-center px-6 py-8 md:px-10 md:border-r border-gray-300 last:border-none">

                <h3 class="text-2xl md:text-3xl font-semibold mb-2 text-[#3c3c3c]">
                    {{ item.title }}
                </h3>

                <p class="text-gray-600 mb-4 max-w-sm">
                    {{ item.desc }}
                </p>

                <!-- если есть кнопка -->
                <template v-if="item.button">
                    <a href="/order" target="_blank">
                        <button
                            class="bg-[#008d80] hover:bg-[#0aa093] text-white px-10 py-2 rounded-2xl mt-5 transition">
                            {{ item.button }}
                        </button>
                    </a>
                </template>

                <!-- если есть цена -->
                <template v-else>
                    <div class="bg-[#eaf4f3] px-5 py-2 rounded-2xl mt-5 flex items-center justify-center gap-2">

                        <span class="text-xl md:text-2xl font-bold text-[#008d80] flex items-center">
                            <span class="text-xs mt-1 mr-1">
                                {{ t('services.from') }}
                            </span>
                            {{ item.price }}
                        </span>

                        <span class="line-through text-sm md:text-base">
                            {{ item.oldPrice }}
                        </span>

                    </div>
                </template>

            </div>

        </div>
    </div>
</template>