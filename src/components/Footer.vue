<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const columns = computed(() => [
    {
        title: t('footer.col1.title'),
        links: [
            { label: t('footer.col1.l1'), href: "#services" },
            { label: t('footer.col1.l2'), href: "#services" },
            { label: t('footer.col1.l3'), href: "#services" },
            { label: t('footer.col1.l4'), href: "#services" },
            { label: t('footer.col1.l5'), href: "#services" },
            { label: t('footer.col1.l6'), href: "#services" }
        ]
    },
    {
        title: t('footer.col2.title'),
        links: [
            { label: t('footer.col2.l1'), href: "#services" },
            { label: t('footer.col2.l2'), href: "#services" },
            { label: t('footer.col2.l3'), href: "#services" },
            { label: t('footer.col2.l4'), href: "#services" },
            { label: t('footer.col2.l5'), href: "#services" },
        ]
    },
    {
        title: t('footer.col3.title'),
        links: [
            { label: t('footer.col3.l1'), href: "/order" },
            { label: t('footer.col3.l2'), href: "#" },
            { label: t('footer.col3.l3'), href: "#about" },
            { label: t('footer.col3.l4'), href: "#about" }
        ]
    }
])
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
                            <a href="mailto:qoshtepa-t@adliya.uz" class="text-white">
                                qoshtepa-t@adliya.uz
                            </a>
                        </div>

                    </div>

                    <!-- socials -->
                    <div class="mt-8">
                        <div class="mb-3 text-[13px] text-white/55">
                            {{ t('footer.socials') }}
                        </div>

                        <div class="flex flex-wrap gap-3">

                            <!-- TELEGRAM -->
                            <a href="https://t.me/Khamdwww"
                                class="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/15"
                                aria-label="Telegram">

                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 4L3.5 11.2c-.9.4-.9 1.6.1 1.9l4.4 1.3 1.7 5.2c.3.9 1.5 1 2 .2l2.4-3.3 4.7 3.4c.7.5 1.7.1 1.9-.8L23.1 5c.2-.9-.8-1.6-2.1-1z"
                                        fill="white" />
                                </svg>

                            </a>

                            <!-- WHATSAPP -->
                            <a href="https://wa.me/998901605156"
                                class="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-[#25D366]"
                                aria-label="WhatsApp">

                                <!-- WhatsApp SVG -->
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.42 0 .03 5.4.03 12.06c0 2.12.56 4.18 1.63 6l-1.73 6.31 6.46-1.7a11.94 11.94 0 005.67 1.44h.01c6.64 0 12.03-5.4 12.03-12.06 0-3.21-1.25-6.23-3.58-8.57zM12.07 22c-1.87 0-3.7-.5-5.3-1.46l-.38-.22-3.83 1.01 1.02-3.73-.25-.39a9.9 9.9 0 01-1.52-5.25c0-5.5 4.47-9.97 9.98-9.97 2.66 0 5.16 1.04 7.04 2.92a9.93 9.93 0 012.92 7.05c0 5.5-4.48 9.98-9.98 9.98zm5.47-7.46c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.41-.07-.12-.27-.2-.57-.35z"
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
            </div>

        </div>
    </footer>
</template>