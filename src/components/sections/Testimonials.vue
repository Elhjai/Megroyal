<template>
  <section id="testimonials" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-heading text-3xl md:text-4xl text-primary-light mb-4">What Our Customers Say</h2>
        <p class="font-body text-lg max-w-2xl mx-auto">Hear from happy MagRoyal customers</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow"
          :data-aos="'fade-up'"
          :data-aos-delay="(index + 1) * 100"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
              <span class="text-xl">{{ testimonial.initials }}</span>
            </div>
            <div class="ml-4">
              <h4 class="font-heading">{{ testimonial.name }}</h4>
              <div class="flex">
                <StarIcon v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </div>
          <p class="font-body italic">"{{ testimonial.comment }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { StarIcon } from '@heroicons/vue/24/solid'
import AOS from 'aos'

const testimonials = ref([
  {
    name: "Sarah Johnson",
    initials: "SJ",
    comment: "The flowers look so real! I get compliments every time someone visits my home.",
    rating: 5
  },
  {
    name: "Michael Chen",
    initials: "MC",
    comment: "Excellent quality and customer service. Will definitely order again!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    initials: "ER",
    comment: "Perfect for my office where real flowers wouldn't last. Beautiful arrangement!",
    rating: 5
  }
])

onMounted(() => {
  AOS.init()
})
</script>