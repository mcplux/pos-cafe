import { defineStore } from "pinia"
import { onMounted, ref } from "vue"

export const useSidebarStore = defineStore('sidebar', () => {
  
  const isOpen = ref(false)

  function toggle() {
    isOpen.value = !isOpen.value
  }

  function setInitialState() {
    if (window.innerWidth < 768) {
      isOpen.value = false
    } else {
      isOpen.value = true
    }
  }

  onMounted(() => {
    setInitialState()
  })

  return {
    isOpen,
    toggle,
  }
})
