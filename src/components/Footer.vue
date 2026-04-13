<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const columns = computed(() => [
    {
        title: t('footer.col1.title'),
        links: [
            { label: t('footer.col1.l1'), href: "#" },
            { label: t('footer.col1.l2'), href: "#" },
            { label: t('footer.col1.l3'), href: "#" },
            { label: t('footer.col1.l4'), href: "#" },
            { label: t('footer.col1.l5'), href: "#" },
            { label: t('footer.col1.l6'), href: "#" }
        ]
    },
    {
        title: t('footer.col2.title'),
        links: [
            { label: t('footer.col2.l1'), href: "#" },
            { label: t('footer.col2.l2'), href: "#" },
            { label: t('footer.col2.l3'), href: "#" },
            { label: t('footer.col2.l4'), href: "#" },
            { label: t('footer.col2.l5'), href: "#" },
            { label: t('footer.col2.l6'), href: "#" }
        ]
    },
    {
        title: t('footer.col3.title'),
        links: [
            { label: t('footer.col3.l1'), href: "#" },
            { label: t('footer.col3.l2'), href: "#" },
            { label: t('footer.col3.l3'), href: "#" },
            { label: t('footer.col3.l4'), href: "#" }
        ]
    }
])

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

                <!-- Columns -->
                <div v-for="(col, idx) in columns" :key="idx">
                    <h3 class="mb-5 text-[22px] text-white">
                        {{ col.title }}
                    </h3>

                    <ul class="space-y-3 text-[15px]">
                        <li v-for="(l, i) in col.links" :key="i">
                            <a :href="l.href" class="hover:text-white">
                                {{ l.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Right block -->
                <div>
                    <div class="text-white text-[20px]">
                        khamidov.uz
                    </div>

                    <div class="mt-6 space-y-4 text-[14px]">

                        <!-- phone -->
                        <div>
                            <div class="text-white/55">
                                {{ t('footer.call') }}
                            </div>
                            <a href="tel:+998901605156" class="text-white">
                                +998 90 160-51-56
                            </a>
                        </div>

                        <!-- email -->
                        <div>
                            <a href="mailto:info@khamidov.uz" class="text-white">
                                info@khamidov.uz
                            </a>
                        </div>

                    </div>

                    <!-- socials -->
                    <div class="mt-8">
                        <div class="mb-3 text-[13px] text-white/55">
                            {{ t('footer.socials') }}
                        </div>

                        <div class="flex flex-wrap gap-3">
                            <a href="https://t.me/Khamdwww"
                                class="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/15"
                                aria-label="Telegram">

                                <!-- Telegram SVG -->
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 4L3.5 11.2c-.9.4-.9 1.6.1 1.9l4.4 1.3 1.7 5.2c.3.9 1.5 1 2 .2l2.4-3.3 4.7 3.4c.7.5 1.7.1 1.9-.8L23.1 5c.2-.9-.8-1.6-2.1-1z"
                                        fill="white" />
                                </svg>

                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <!-- bottom -->
            <div class="mt-10 border-t border-white/10 pt-6 text-[12px] text-white/50 space-y-3">
                <div>{{ t('footer.company') }}</div>
                <div>{{ t('footer.rules') }}</div>
                <a href="#">{{ t('footer.more') }}</a>
            </div>

        </div>
    </footer>
</template>