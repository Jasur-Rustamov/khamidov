<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cards = computed(() => [
    {
        row: 1,
        icon: "👥",
        title: t('cases.c1.title'),
        items: [
            t('cases.c1.i1'),
            t('cases.c1.i2'),
            t('cases.c1.i3'),
            t('cases.c1.i4')
        ]
    },
    {
        row: 1,
        icon: "💍",
        title: t('cases.c2.title'),
        items: [
            t('cases.c2.i1'),
            t('cases.c2.i2'),
            t('cases.c2.i3'),
            t('cases.c2.i4')
        ]
    },
    {
        row: 1,
        icon: "💼",
        title: t('cases.c3.title'),
        items: [
            t('cases.c3.i1'),
            t('cases.c3.i2'),
            t('cases.c3.i3'),
            t('cases.c3.i4')
        ]
    },
    {
        row: 1,
        icon: "🏛️",
        title: t('cases.c4.title'),
        items: [
            t('cases.c4.i1'),
            t('cases.c4.i2'),
            t('cases.c4.i3'),
            t('cases.c4.i4')
        ]
    }
])

const cardBase =
    "rounded-3xl bg-white border border-slate-100 overflow-hidden flex flex-col shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
</script>

<template>
    <section class="py-14 md:py-20" id="services">
        <div class="container mx-auto px-4 mt-12">

            <!-- Заголовок -->
            <h2 class="text-center text-4xl md:text-6xl text-slate-900">
                {{ t('cases.title') }}
                <span class="text-[#008d80]">{{ t('cases.highlight') }}</span>
                {{ t('cases.after') }}
            </h2>

            <div class="mt-6 flex justify-center">
                <p class="text-xl md:text-3xl font-semibold text-[#008d80]">
                    {{ t('cases.subtitle') }}
                </p>
            </div>

            <!-- Карточки -->
            <div class="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <article v-for="(c, idx) in cards" :key="idx" :class="cardBase">
                    <div class="p-8 flex flex-col h-full">

                        <div class="mb-5 text-2xl">{{ c.icon }}</div>

                        <h3 class="text-2xl md:text-3xl text-slate-900 whitespace-pre-line leading-tight">
                            {{ c.title }}
                        </h3>

                        <div class="mt-8 border-t border-slate-200 flex-grow">
                            <div v-for="(it, i) in c.items" :key="i"
                                class="py-5 text-slate-700 border-b border-slate-200 last:border-b-0">
                                {{ it }}
                            </div>
                        </div>

                        <a href="#" class="mt-8 font-bold text-[#008d80] hover:opacity-80 transition">
                            {{ t('cases.more') }} →
                        </a>

                    </div>
                </article>
            </div>

        </div>
    </section>
</template>