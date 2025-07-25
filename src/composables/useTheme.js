import { ref, onMounted, watch } from 'vue'

export default function useTheme() {
  const isDark = ref(false)

  // Set initial theme based on preference
  const setInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = systemPrefersDark
    }
    updateThemeClasses()
  }

  // Update DOM classes based on theme
  const updateThemeClasses = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.setProperty('--text-primary', '#F3F4F6') // Bright text
      document.documentElement.style.setProperty('--text-secondary', '#D1D5DB') // Slightly dimmer text
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.setProperty('--text-primary', '#111827') // Dark text
      document.documentElement.style.setProperty('--text-secondary', '#6B7280') // Gray text
    }
  }

  // Toggle between themes
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    updateThemeClasses()
  }

  // Watch for system theme changes
  const watchSystemTheme = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches
        updateThemeClasses()
      }
    })
  }

  onMounted(() => {
    setInitialTheme()
    watchSystemTheme()
  })

  return {
    isDark,
    toggleTheme,
  }
}
