<script setup>
const stats = [
    {
        number: "3M",
        text: "клиентов решили свои вопросы с нашей помощью. Правовые заключения и консультации, сопровождение сделок, сотни тысяч подготовленных договоров, жалоб, исков, ходатайств — всё это наш опыт."
    },
    {
        number: "35 лет",
        text: "средний возраст наших юристов. Мы имеем экспертизу в каждой из отраслей права, и вместе с тем достаточно молоды, чтобы говорить с клиентом на одном языке и делать сложное — понятным."
    },
    {
        number: "4,85",
        text: "средняя оценка от клиентов. Мы держим на контроле каждую консультацию и следим за качеством услуг. Такая оценка держится с 2013 года."
    }
]
</script>

<template>
    <section class="bg-[#f3f4f6] py-20">
        <div class="max-w-[1200px] mx-auto px-6">

            <h2 class="text-center text-[44px] font-semibold text-gray-900 mb-16">
                Об
                <span class="relative text-[#008d80]">
                    KHAMIDOV
                    <span class="absolute left-0 -bottom-2 w-full h-[4px] bg-[#008d80] rounded-full"></span>
                </span>
            </h2>

            <div class="grid md:grid-cols-3 gap-8">

                <div v-for="(item, i) in stats" :key="i"
                    class="bg-white rounded-[24px] p-10 shadow-sm hover:shadow-lg transition">

                    <div class="text-[#008d80] text-[56px] font-semibold mb-6">
                        {{ item.number }}
                    </div>

                    <p class="text-gray-700 leading-relaxed text-[16px]">
                        {{ item.text }}
                    </p>

                </div>

            </div>

        </div>
    </section>
</template>