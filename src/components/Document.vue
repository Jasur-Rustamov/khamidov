<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const isDark = ref(false)
let observer

onMounted(() => {
    const triggerEl = document.querySelector("#dark-trigger")

    observer = new IntersectionObserver(
        ([entry]) => {
            isDark.value = !entry.isIntersecting
        },
        {
            root: null,
            threshold: 0,
            rootMargin: "-80px 0px 0px 0px",
        }
    )

    if (triggerEl) observer.observe(triggerEl)
})

onBeforeUnmount(() => {
    if (observer) observer.disconnect()
})
</script>

<template>
    <main class="min-h-[100vh] mt-12">
        <div id="dark-trigger" class="h-px"></div>

        <section class="grid min-h-screen grid-cols-1 lg:grid-cols-[70%_30%]">

            <!-- Левая часть -->
            <div class="relative overflow-hidden transition-colors duration-500"
                :class="isDark ? 'bg-[#1f2327] text-[#b3b5b9]' : 'bg-white text-black'">

                <div class="mx-auto w-full max-w-7xl px-6 py-16 lg:pl-20 lg:py-24">
                    <div class="max-w-xl">

                        <h1 class="text-4xl md:text-6xl font-medium">
                            {{ t('docs.title') }}
                        </h1>

                        <p class="mt-6 text-sm md:text-base leading-6 opacity-80">
                            {{ t('docs.text1') }}<br />
                            {{ t('docs.text2') }}<br />
                            {{ t('docs.text3') }}
                        </p>

                    </div>
                </div>
            </div>

            <!-- Правая часть -->
            <div class="relative bg-white">
                <div class="relative mx-auto w-full max-w-7xl px-6 py-10 lg:px-0 lg:py-0">

                    <div class="z-20 flex flex-col items-center bg-no-repeat bg-cover bg-right rounded-3xl overflow-hidden
                   p-8 md:p-12 lg:p-20
                   lg:absolute lg:left-[-190px] lg:top-30"
                        style="background-image: url('../images/documents_back_2.svg')">

                        <p class="mt-3 mb-10 text-xl md:text-3xl font-light text-center text-[#008d80] max-w-xl">
                            {{ t('docs.cta') }}
                        </p>

                        <a href="/order" target="_blank">
                            <button
                                class="h-14 w-[350px] max-w-[360px] rounded-2xl bg-[#008d80] hover:bg-[#0aa093] transition text-white font-semibold">
                                {{ t('docs.button') }}
                            </button>
                        </a>

                    </div>

                    <div class="hidden lg:block h-[520px]"></div>
                </div>
            </div>

        </section>
    </main>
</template>