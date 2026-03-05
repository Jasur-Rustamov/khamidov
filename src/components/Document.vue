<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

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
                        <h1 class="text-4xl md:text-6xl font-medium">Документы</h1>

                        <p class="mt-6 text-sm md:text-base leading-6 opacity-80">
                            Шаблоны договоров на все случаи жизни.<br />
                            Проверены лучшими юристами.<br />
                            Защищают от недобросовестных контрагентов.
                        </p>

                        <a href="#"
                            class="inline-flex items-center gap-2 mt-8 text-xl md:text-2xl font-medium text-[#008d80]">
                            Смотреть шаблоны
                            <span class="text-xl">→</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Правая часть -->
            <div class="relative bg-white">
                <div class="relative mx-auto w-full max-w-7xl px-6 py-10 lg:px-0 lg:py-0">
                    <!-- На мобилке: обычный блок.
               На lg: абсолютный и вылезает влево как у тебя -->
                    <div class="z-20 flex flex-col items-center bg-no-repeat bg-cover bg-right rounded-3xl overflow-hidden
                   p-8 md:p-12 lg:p-20
                   lg:absolute lg:left-[-190px] lg:top-30"
                        style="background-image: url('/src/images/documents_back_2.svg')">
                        <p class="mt-3 mb-10 text-xl md:text-3xl font-light text-center text-[#008d80] max-w-xl">
                            Наш юрист поможет разобраться в ситуации и адаптирует договор под вас.
                        </p>

                        <button
                            class="h-14 w-full max-w-[360px] rounded-2xl bg-[#008d80] hover:bg-[#0aa093] transition text-white font-semibold">
                            Заказать
                        </button>
                    </div>

                    <!-- чтобы правая колонка не "схлопывалась" на lg, когда блок absolute -->
                    <div class="hidden lg:block h-[520px]"></div>
                </div>
            </div>
        </section>
    </main>
</template>