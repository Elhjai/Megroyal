<template>
  <header
    class="sticky top-0 z-50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border-b border-white/10 dark:border-gray-700/20"
  >
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <img src="@/assets/logos/logo-gold.png" alt="MegRoyal" class="h-10" />
        <span class="ml-2 text-xl font-playfair font-bold text-gray-800 dark:text-white"
          >MegRoyal</span
        >
      </div>
      <nav class="hidden md:flex space-x-8">
        <a
          href="#"
          class="font-playfair text-gray-700 dark:text-gray-200 hover:text-primary-light transition-colors font-medium"
          >Home</a
        >
        <a
          href="#products"
          class="font-playfair text-gray-700 dark:text-gray-200 hover:text-primary-light transition-colors font-medium"
          >Products</a
        >
        <a
          href="#benefits"
          class="font-playfair text-gray-700 dark:text-gray-200 hover:text-primary-light transition-colors font-medium"
          >Benefits</a
        >
        <a
          href="#testimonials"
          class="font-playfair text-gray-700 dark:text-gray-200 hover:text-primary-light transition-colors font-medium"
          >Reviews</a
        >
      </nav>
      <ThemeToggle />
    </div>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>

<style scoped>
/* Import Playfair Display font */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

/* Playfair Display font class */
.font-playfair {
  font-family: 'Playfair Display', serif;
}

/* Enhanced transparency and blur effect */
header {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Subtle shadow for better definition */
header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(212, 175, 55, 0.3) 20%,
    rgba(212, 175, 55, 0.5) 50%,
    rgba(212, 175, 55, 0.3) 80%,
    transparent 100%
  );
}

/* Smooth text shadow for better readability on transparent background */
.font-playfair {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Dark mode text shadow adjustment */
@media (prefers-color-scheme: dark) {
  .font-playfair {
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
  }
}
</style>
