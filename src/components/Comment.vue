<script setup>
const img = new URL(
    "../images/portrait-benjamin-franklin-vector-illustration-600nw-2464399497.webp",
    import.meta.url
).href

const cards = [
    { name: "Ибрагимова Нурида", role: "Руководитель департамента\nконтроля качества", avatar: img, href: "#" },
    { name: "Проскурова Елена", role: "Руководитель практики частного\nправа", avatar: img, href: "#" },
    { name: "Титов Александр", role: "Ведущий юрист практики\nжилищного права и социальных\nотношений", avatar: img, href: "#" },
]
</script>

<template>
    <section class="bg-white py-12 sm:py-16 lg:py-24">
        <div class="mx-auto container px-4 sm:px-6">
            <h2 class="text-center font-medium text-4xl sm:text-4xl lg:text-[60px] leading-[1.1]">
                Комментируем изменения в законе
                <br />
                для <span class="text-[#008d80]">прессы</span>
            </h2>

            <div class="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <article v-for="(c, i) in cards" :key="i" class="group relative overflow-hidden rounded-[22px] sm:rounded-[26px] bg-white
                 shadow-[0_18px_55px_rgba(0,0,0,0.16)]
                 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.18)]">
                    <div class="h-[82px] sm:h-[92px] bg-[#22262b]" />

                    <div class="px-5 sm:px-7 pb-6 sm:pb-7 pt-5 sm:pt-6">
                        <div class="flex items-start gap-3 sm:gap-4">
                            <img :src="c.avatar" alt=""
                                class="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white" />

                            <div class="min-w-0">
                                <div
                                    class="text-[16px] sm:text-[18px] font-extrabold text-[#111827] leading-snug truncate">
                                    {{ c.name }}
                                </div>

                                <div
                                    class="mt-1 whitespace-pre-line text-[14px] sm:text-[15px] leading-[1.35] text-[#4b5563]">
                                    {{ c.role }}
                                </div>
                            </div>
                        </div>

                        <!-- место под контент/картинку/анонс -->
                        <div class="h-[140px] sm:h-[160px] lg:h-[190px]" />

                        <div class="flex justify-end">
                            <a :href="c.href"
                                class="inline-flex items-center gap-2 text-[15px] sm:text-[16px] font-semibold text-[#008d80]">
                                Читать
                                <span
                                    class="text-[18px] transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>