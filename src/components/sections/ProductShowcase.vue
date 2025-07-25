<template>
  <section id="products" class="py-20 bg-marble relative">
    <!-- Subtle gold accent overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-light/5"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="font-heading text-3xl md:text-4xl text-green-200 dark:text-white mb-4">
          Our Collections
        </h2>
        <p class="font-body text-lg max-w-2xl mx-auto text-gray-200 dark:text-gray-300">
          Beautiful artificial flowers
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-gray-200/50 dark:border-gray-600/50 hover:border-primary-light/30"
          :data-aos="'fade-up'"
          :data-aos-delay="(index + 1) * 100"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-64 object-cover"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="font-heading text-xl mb-2 dark:text-white">{{ product.name }}</h3>
            <p class="text-primary-light font-bold mb-4">{{ formatPrice(product.price) }}</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ product.description }}</p>
            <a
              :href="generateWhatsAppLink(product)"
              class="bg-primary hover:bg-primary-dark text-black dark:text-white font-bold py-2 px-6 rounded-full transition-all duration-300 inline-block transform hover:scale-105 shadow-lg hover:shadow-xl"
              target="_blank"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useProducts from '@/composables/useProducts'
import useScrollAnimation from '@/composables/useScrollAnimation'

const { products, formatPrice, generateWhatsAppLink } = useProducts()
useScrollAnimation()
</script>

<style scoped>
/* Premium Marble Texture */
.bg-marble {
  background-color: #f8fafc;
  background:
    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%);
  background-size:
    600px 600px,
    400px 400px,
    500px 500px,
    100% 100%;
  background-position:
    0 0,
    100% 0,
    50% 100%,
    0 0;
}

/* Enhanced shadow */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Premium card styling */
.container .grid > div {
  position: relative;
}

.container .grid > div::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: inherit;
  pointer-events: none;
  z-index: 1;
}

.container .grid > div > * {
  position: relative;
  z-index: 2;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .bg-marble {
    background-color: #1f2937;
    background:
      radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(75, 85, 99, 0.8) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
      linear-gradient(135deg, #1f2937 0%, #374151 25%, #4b5563 50%, #374151 75%, #1f2937 100%);
  }
}
</style>
