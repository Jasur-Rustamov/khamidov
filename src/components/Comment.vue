<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const img = new URL(
    "../images/portrait-benjamin-franklin-vector-illustration-600nw-2464399497.webp",
    import.meta.url
).href

// ✅ карточки через computed (важно)
const cards = computed(() => [
    {
        name: t('team.c1.name'),
        role: t('team.c1.role'),
        avatar: img,
        href: "#"
    },
    {
        name: t('team.c2.name'),
        role: t('team.c2.role'),
        avatar: img,
        href: "#"
    },
    {
        name: t('team.c3.name'),
        role: t('team.c3.role'),
        avatar: img,
        href: "#"
    },
    // {
    //     name: t('team.c4.name'),
    //     role: t('team.c4.role'),
    //     avatar: img,
    //     href: "#"
    // },
])
</script>

<template>
    <section class="bg-white py-12 sm:py-16 lg:py-24">
        <div class="mx-auto container px-4 sm:px-6">

            <!-- TITLE -->
            <h2 class="text-center font-medium text-4xl sm:text-4xl lg:text-[60px] leading-[1.1]">
                {{ t('team.title1') }}
            </h2>

            <!-- CARDS -->
            <div class="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                <article v-for="(c, i) in cards" :key="i" class="group relative overflow-hidden rounded-[22px] sm:rounded-[26px] bg-white
                 shadow-[0_18px_55px_rgba(0,0,0,0.16)]
                 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.18)]">

                    <div class="h-[82px] sm:h-[92px] bg-[#22262b]" />

                    <div class="px-5 sm:px-7 pb-6 sm:pb-7 pt-5 sm:pt-6">

                        <div class="flex items-start gap-3 sm:gap-4">
                            <img :src="c.avatar"
                                class="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white" />

                            <div class="min-w-0">
                                <div class="text-[16px] sm:text-[18px] font-extrabold text-[#111827] truncate">
                                    {{ c.name }}
                                </div>

                                <div class="mt-1 whitespace-pre-line text-[14px] sm:text-[15px] text-[#4b5563]">
                                    {{ c.role }}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </section>
</template>