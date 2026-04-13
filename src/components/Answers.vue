<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// ✅ через computed (чтобы язык обновлялся)
const faqs = computed(() => [
    {
        title: t('faq.f1.title'),
        text: t('faq.f1.text'),
    },
    {
        title: t('faq.f2.title'),
        text: t('faq.f2.text'),
    },
    {
        title: t('faq.f3.title'),
        text: t('faq.f3.text'),
    },
])
</script>
<template>
    <section class="bg-[#f5f6f7] py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-6">

            <h2
                class="text-center text-5xl sm:text-4xl lg:text-[60px] font-semibold mb-10 sm:mb-14 lg:mb-16 text-gray-900 leading-tight">
                {{ t('faq.title1') }}

                <span class="relative inline-block text-[#008d80] px-1">
                    {{ t('faq.highlight') }}
                    <span
                        class="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-[3px] sm:h-[4px] bg-[#008d80] rounded-full"></span>
                </span>

                {{ t('faq.title2') }}
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

                <div v-for="(faq, i) in faqs" :key="i"
                    class="bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

                    <h3
                        class="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold mb-3 sm:mb-4 leading-snug text-gray-900">
                        {{ faq.title }}
                    </h3>

                    <p
                        class="text-gray-600 leading-relaxed text-[14px] sm:text-[15px] lg:text-[16px] whitespace-pre-line">
                        {{ faq.text }}
                    </p>

                </div>

            </div>
        </div>
    </section>
</template>