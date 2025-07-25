<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Header />
    <main>
      <Hero />
      <ProductShowcase />
      <Benefits />
      <Testimonials />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Hero from '@/components/sections/Hero.vue'
import ProductShowcase from '@/components/sections/ProductShowcase.vue'
import Benefits from '@/components/sections/Benefits.vue'
import Testimonials from '@/components/sections/Testimonials.vue'
import WhatsAppButton from '@/components/common/WhatsAppButton.vue'
</script>