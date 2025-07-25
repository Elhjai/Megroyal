import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function useScrollAnimation() {
  const initAOS = () => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      disable: window.innerWidth < 768
    })
  }

  onMounted(() => {
    initAOS()
    
    // Refresh AOS when route changes (if using Vue Router)
    window.addEventListener('load', initAOS)
    window.addEventListener('resize', initAOS)
  })

  return {
    initAOS
  }
}