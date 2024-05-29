import { ref } from "vue"
import { reset } from "@formkit/vue"
import { defineStore } from "pinia"

export const useModalStore = defineStore('modal', () => {
  
  const isOpen = ref(false)

  function setIsOpen(value) {
    isOpen.value = value
  }

  function closeModal() {
    setIsOpen(false)
    reset('menu-form')
  }

  return {
    isOpen,
    setIsOpen,
    closeModal,
  }
})
