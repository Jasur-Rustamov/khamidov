<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue';
import Service from './components/Service.vue';
import PracticeCases from './components/PracticeCases.vue';
import Document from './components/Document.vue';
import ConsultSection from './components/ConsultSection.vue';
import InstructionService from './components/InstructionService.vue';
import Bank from './components/Bank.vue';
import Comment from './components/Comment.vue';
import About from './components/About.vue';
import Answers from './components/Answers.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="min-h-screen bg-gray-50 tracking-wider">
    <Header />
    <HeroSection />
    <StatsBar />
    <Service />
    <PracticeCases />
    <Document />
    <ConsultSection />
    <InstructionService />
    <Bank />
    <Comment />
    <About />
    <Answers />
    <Footer />
    <!-- Здесь можно добавить остальные секции сайта -->
  </div>
</template>