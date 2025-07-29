<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image Carousel -->
    <div class="absolute inset-0 w-full h-full">
      <div
        v-for="(image, index) in backgroundImages"
        :key="index"
        class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
        :class="{
          'opacity-100': currentImageIndex === index,
          'opacity-0': currentImageIndex !== index,
        }"
      >
        <img
          :src="image.jpg"
          :alt="`MagRoyal artificial flowers background ${index + 1}`"
          class="w-full h-full object-cover"
          :loading="index === 0 ? 'eager' : 'lazy'"
          @error="handleImageError(index, $event)"
          @load="handleImageLoad(index)"
        />
      </div>
    </div>

    <!-- Carousel Indicators -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
      <button
        v-for="(image, index) in backgroundImages"
        :key="index"
        @click="setCurrentImage(index)"
        class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
        :class="
          currentImageIndex === index
            ? 'bg-primary-light scale-110'
            : 'bg-white/50 hover:bg-white/70'
        "
        :aria-label="`Go to background image ${index + 1}`"
      ></button>
    </div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30 dark:bg-black/50 transition-colors duration-300"></div>

    <!-- Content -->
    <div class="container mx-auto px-4 z-10 text-center">
      <div data-aos="fade-up" data-aos-delay="200">
        <!-- Logo with optimized loading -->
        <picture class="inline-block">
          <source srcset="@/assets/logos/logo-gold.png" type="image/png" />
          <img
            src="@/assets/logos/logo-gold.png"
            alt="MagRoyal"
            class="mx-auto h-24 mb-8"
            loading="eager"
            width="96"
            height="96"
          />
        </picture>
        <h1 class="font-heading text-4xl md:text-6xl text-primary-light mb-4">
          Nature-Inspired 🌿 Luxury
        </h1>
        <p class="font-body text-xl text-white max-w-2xl mx-auto mb-8">
          Discover the elegance of artificial flowers and plants that bring the beauty of nature
          into your home. Explore our exclusive collections designed to elevate your space with
          timeless charm.
        </p>
        <a
          href="#products"
          class="bg-primary-light hover:bg-primary-dark text-black font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Explore Collections
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Background images array - add your actual image paths here
const backgroundImages = ref([
  {
    jpg: '/images/bg1.jpg',
  },
  {
    jpg: '/images/bg2.jpg',
  },
  {
    jpg: '/images/bg3.jpg',
  },
  {
    jpg: '/images/bg4.jpg',
  },
  {
    jpg: '/images/bg5.jpg',
  },
])

const currentImageIndex = ref(0)
const intervalId = ref(null)
const SLIDE_INTERVAL = 5000 // 5 seconds

// Function to go to next image
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.value.length
}

// Function to set specific image
const setCurrentImage = (index) => {
  currentImageIndex.value = index
  // Reset the interval when user manually changes image
  clearInterval(intervalId.value)
  startCarousel()
}

function handleImageLoad(index) {
  console.log(`Image ${index + 1} loaded`)
}

// Start the automatic carousel
const startCarousel = () => {
  intervalId.value = setInterval(nextImage, SLIDE_INTERVAL)
}

// Stop the carousel
const stopCarousel = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

onMounted(() => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out-quad',
    once: true,
    mirror: false,
  })

  // Start the carousel
  startCarousel()
})

onUnmounted(() => {
  // Clean up interval on component unmount
  stopCarousel()
})
</script>

<style scoped>
section {
  min-height: 100vh;
  min-height: 100dvh; /* For mobile browsers */
}

/* Optimize image rendering */
picture img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* Ensure smooth transitions */
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

/* Pause carousel on hover for better UX */
section:hover .carousel-pause {
  animation-play-state: paused;
}
</style>
