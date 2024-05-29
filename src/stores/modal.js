import { defineStore } from "pinia"
import { ref } from "vue"

export const useModalStore = defineStore('modal', () => {
  
  const isOpen = ref(false)

  function setIsOpen(value) {
    isOpen.value = value
  }

  return {
    isOpen,
    setIsOpen,
  }
})
