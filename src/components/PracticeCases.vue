<script setup>
const cards = [
    {
        row: 1,
        icon: "👥",
        title: "Семейное\nправо",
        items: ["Разводы и раздел имущества", "Алименты", "Оспаривание отцовства", "Лишение отцовства"]
    },
    {
        row: 1,
        icon: "💍",
        title: "Наследство",
        items: ["Составление завещания", "Оспаривание завещания", "Отказ от наследства", "Принятие наследства"]
    },
    {
        row: 1,
        icon: "💼",
        title: "Трудовые\nвопросы",
        items: ["Оспаривание дисциплинарных взысканий и увольнений", "Восстановление на работе"]
    },
    {
        row: 1,
        icon: "🏛️",
        title: "Ведение дел\nв суде",
        items: [
            "Судебные споры",
            "Представительство в судах общей юрисдикции и в арбитражных судах",
            "Составление процессуальных документов, жалоб и претензий"
        ]
    },
    {
        row: 2,
        icon: "🏡",
        title: "Недвижимость\nи жилищные вопросы",
        items: [
            "Купля-продажа недвижимости",
            "Сопровождение сделок",
            "Сделки по доверенности",
            "Вопросы с управляющими компаниями",
            "Переустройство жилого помещения",
            "Приемка квартиры",
            "Переселение из ветхого жилья",
            "Затопление соседей"
        ]
    },
    {
        row: 2,
        icon: "🪖",
        title: "Военное право\nи мобилизация",
        items: [
            "Оспаривание решения призывной комиссии",
            "Консультация по вопросам мобилизации",
            "Вопросы по брони и отсрочке",
            "Постановка и снятие с воинского учета"
        ]
    },
    {
        row: 2,
        icon: "🛒",
        title: "Защита прав\nпотребителей",
        items: ["Сопровождение покупки", "Заключение договора бытового подряда", "Возврат товаров", "Претензии к продавцу"]
    }
]

const cardBase =
    "rounded-3xl bg-white border border-slate-100 overflow-hidden flex flex-col shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
</script>

<template>
    <section class="py-14 md:py-20">
        <div class="container mx-auto px-4 mt-12">
            <h2 class="text-center text-4xl md:text-6xl text-slate-900">
                Решаем <span class="text-[#008d80]">правовые</span> вопросы за вас
            </h2>

            <div class="mt-6 flex justify-center">
                <p class="text-xl md:text-3xl font-semibold text-[#008d80]">
                    Частые обращения:
                </p>
            </div>

            <div class="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <article v-for="(c, idx) in cards.filter(x => x.row === 1)" :key="idx" :class="cardBase">
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
                            Подробнее →
                        </a>
                    </div>
                </article>
            </div>

            <div class="mt-8 grid gap-8 grid-cols-1 md:grid-cols-3">
                <article v-for="(c, idx) in cards.filter(x => x.row === 2)" :key="idx" :class="cardBase">
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
                            Подробнее →
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>