<template>
  <section id="benefits" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-heading text-3xl md:text-4xl text-primary-light mb-4">
          Why Choose MagRoyal?
        </h2>
        <p class="font-body text-lg max-w-2xl mx-auto">
          The advantages of our premium artificial flowers
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
          :data-aos="'fade-up'"
          :data-aos-delay="(index + 1) * 100"
        >
          <div
            class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <component :is="benefit.icon" class="w-8 h-8 text-black" />
          </div>
          <h3 class="font-heading text-xl mb-2">{{ benefit.title }}</h3>
          <p class="font-body">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { HeartIcon, SunIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import AOS from 'aos'

const benefits = ref([
  {
    title: 'Long-lasting Beauty',
    description: 'Enjoy beautiful blooms that never wilt or fade',
    icon: HeartIcon,
  },
  {
    title: 'Allergy-free',
    description: 'Perfect for those with pollen allergies',
    icon: SunIcon,
  },
  {
    title: 'Low Maintenance',
    description: 'No watering or special care needed',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Year-round Freshness',
    description: 'Beautiful in any season',
    icon: SparklesIcon,
  },
])

onMounted(() => {
  AOS.init()
})
</script>
