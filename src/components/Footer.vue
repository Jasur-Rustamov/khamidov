<script setup>
const columns = [
    {
        title: "Частным лицам",
        links: [
            { label: "Банкротство физических лиц", href: "#" },
            { label: "Автоюрист круглосуточно", href: "#" },
            { label: "Юрист по вопросам ОСАГО и КАСКО", href: "#" },
            { label: "Помощь автоюриста при ДТП", href: "#" },
            { label: "Юрист по вопросу лишения прав", href: "#" },
            { label: "Налоговые вопросы", href: "#" }
        ]
    },
    {
        title: "Бизнесу",
        links: [
            { label: "Шаблоны документов", href: "#" },
            { label: "Юрист для бизнеса", href: "#" },
            { label: "Юрист по корпоративному праву", href: "#" },
            { label: "Претензионная работа по 44-ФЗ", href: "#" },
            { label: "Представительство интересов в арбитражном суде", href: "#" },
            { label: "Претензионная работа с поставщиками", href: "#" }
        ]
    },
    {
        title: "О компании",
        links: [
            { label: "Вопрос-ответ", href: "#" },
            { label: "Контакты", href: "#" },
            { label: "Наши эксперты", href: "#" },
            { label: "О нас", href: "#" }
        ]
    }
]

const socials = [
    { name: "YouTube", href: "#", icon: "youtube" },
    { name: "VK", href: "#", icon: "vk" },
    { name: "Telegram", href: "#", icon: "telegram" },
    { name: "WhatsApp", href: "#", icon: "whatsapp" },
]
</script>

<template>
    <footer class="bg-[#2f2f2f] text-white/80">
        <div class="mx-auto max-w-[1200px] px-6 py-14">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-4">

                <div v-for="(col, idx) in columns" :key="idx">
                    <h3 class="mb-5 text-[22px] font-normal text-white">
                        {{ col.title }}
                    </h3>

                    <ul class="space-y-3 text-[15px] leading-snug">
                        <li v-for="(l, i) in col.links" :key="i">
                            <a :href="l.href" class="transition-colors hover:text-white">
                                {{ l.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <div class="flex items-center gap-2 text-white">
                        <span class="text-[20px] font-normal tracking-wide">khamidov.uz</span>
                    </div>

                    <div class="mt-6 space-y-4 text-[14px]">
                        <div class="flex gap-3">
                            <div class="mt-[2px] text-white/60">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M7 3h4l2 6-3 2c1 3 3 5 6 6l2-3 6 2v4c0 1-1 2-2 2C10 22 2 14 2 4c0-1 1-2 2-2h3z"
                                        stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div>
                                <div class="text-[13px] text-white/55">Единый колл-центр</div>
                                <a href="tel:+998916686787" class="transition-colors hover:text-white/90 text-white">
                                    +998 91 668-67-87
                                </a>
                            </div>
                        </div>

                        <div class="flex gap-3">
                            <div class="mt-[2px] text-white/60">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 6h16v12H4V6z" stroke="currentColor" stroke-width="1.6" />
                                    <path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div>
                                <a href="mailto:info@khamidov.uz"
                                    class="transition-colors hover:text-white/90 text-white">
                                    info@khamidov.uz
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <div class="mb-3 text-[13px] text-white/55">Khamidov в социальных сетях</div>

                        <div class="flex flex-wrap gap-3">
                            <a v-for="s in socials" :key="s.name" :href="s.href"
                                class="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/15"
                                :aria-label="s.name" :title="s.name">
                                <svg v-if="s.icon === 'youtube'" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M10 15l5-3-5-3v6z" fill="currentColor" />
                                    <path
                                        d="M21 8.2c0-1-0.7-1.9-1.7-2.1C17.7 5.7 12 5.7 12 5.7s-5.7 0-7.3.4C3.7 6.3 3 7.2 3 8.2 3 9.3 3 12 3 12s0 2.7 0 3.8c0 1 0.7 1.9 1.7 2.1 1.6.4 7.3.4 7.3.4s5.7 0 7.3-.4c1-.2 1.7-1.1 1.7-2.1 0-1.1 0-3.8 0-3.8s0-2.7 0-3.8z"
                                        stroke="currentColor" stroke-width="1.4" />
                                </svg>

                                <svg v-else-if="s.icon === 'vk'" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 7.5h3.2c.3 5.1 2.5 7.3 4.2 7.8V7.5H14v4.4c1.7-.2 3.6-2.3 4.2-4.4H20c-.5 2.4-2.5 4.6-3.9 5.5 1.4.7 3.8 2.7 4.5 5.5h-1.8c-.7-2-2.6-3.6-4.8-3.8v3.8h-.6C7.4 18.5 4.3 14.4 4 7.5z"
                                        fill="currentColor" />
                                </svg>

                                <svg v-else-if="s.icon === 'telegram'" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M21 4L3.5 11.2c-.9.4-.9 1.6.1 1.9l4.4 1.3 1.7 5.2c.3.9 1.5 1 2 .2l2.4-3.3 4.7 3.4c.7.5 1.7.1 1.9-.8L23.1 5c.2-.9-.8-1.6-2.1-1z"
                                        fill="currentColor" opacity=".9" />
                                </svg>

                                <svg v-else-if="s.icon === 'whatsapp'" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M12 4a8 8 0 0 0-6.9 12.1L4 20l4-1.1A8 8 0 1 0 12 4z" stroke="currentColor"
                                        stroke-width="1.6" stroke-linejoin="round" />
                                    <path
                                        d="M9.3 9.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.3l.7 1.6c.1.3.1.5-.1.8l-.4.5c.7 1.2 1.6 2.1 2.8 2.8l.5-.4c.3-.2.6-.2.8-.1l1.6.7c.3.1.3.3.3.5v.5c0 .3 0 .5-.4.7-.4.2-1.1.4-2 .2-2.4-.5-5.5-3.6-6-6-.2-.9 0-1.6.2-2z"
                                        fill="currentColor" opacity=".9" />
                                </svg>

                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="mt-10 space-y-3 border-t border-white/10 pt-6 text-[12.5px] text-white/50">
                <div>ООО “Национальная юридическая служба” ОГРН 1107746913064 ИНН 7702745920</div>

                <div>
                    Правила использования информации, размещенной на сайте Компании (ООО «Национальная Юридическая
                    Служба»)
                </div>

                <a href="#" class="inline-block text-white/45 transition-colors hover:text-white/70">
                    Еще документы
                </a>

                <div class="flex flex-wrap items-center gap-3 pt-4">
                    <a href="#"
                        class="flex h-10 items-center gap-2 rounded-xl bg-white/10 px-4 text-white/80 transition-colors hover:bg-white/15">
                        <span class="text-[12px]">Download on the</span>
                        <span class="font-semibold text-white">App Store</span>
                    </a>

                    <a href="#"
                        class="flex h-10 items-center gap-2 rounded-xl bg-white/10 px-4 text-white/80 transition-colors hover:bg-white/15">
                        <span class="text-[12px]">GET IT ON</span>
                        <span class="font-semibold text-white">Google Play</span>
                    </a>
                </div>
            </div>

        </div>
    </footer>
</template>