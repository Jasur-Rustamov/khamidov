<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = computed(() => [
    { number: t('stats.n1'), text: t('stats.s1') },
    { number: t('stats.n2'), text: t('stats.s2') },
    { number: t('stats.n3'), text: t('stats.s3') },
    { number: t('stats.n4'), text: t('stats.s4') }
])
</script>

<template>
    <section class="py-8">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-4 text-center border-b border-gray-300">

                <div v-for="(stat, i) in stats" :key="i" class="relative flex flex-col items-center px-6 py-8">

                    <div class="text-2xl md:text-4xl font-semibold text-gray-800">
                        {{ stat.number }}
                    </div>

                    <p class="mt-4 max-w-xs px-8 text-sm md:text-base leading-relaxed text-gray-600">
                        {{ stat.text }}
                    </p>

                    <div v-if="i !== stats.length - 1"
                        class="absolute right-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gray-300 md:block">
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>