<script setup>
import HeroContent from './HeroContent.vue'
import HeroImage from './HeroImage.vue'
import { useI18n } from 'vue-i18n'

import bgImage from '../images/720_460_95_1005776413.jpg'

// подключили (если потом добавишь текст сюда)
const { t } = useI18n()
</script>

<template>
    <section class="relative md:py-20 overflow-hidden">

        <!-- фон -->
        <div class="absolute inset-0 bg-cover bg-center"
            :style="{ backgroundImage: `url(${bgImage})` }"></div>

        <div class="absolute inset-0 bg-white/90"></div>

        <!-- контент -->
        <div class="relative max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-12">
                <HeroContent />
                <HeroImage />
            </div>
        </div>

    </section>
</template>