import { ref } from "vue"
import { defineStore } from "pinia"
import { useMenuStore } from "./menu"

export const useModalStore = defineStore('modal', () => {
  
  const menu = useMenuStore()

  const isOpen = ref(false)

  function setIsOpen(value) {
    isOpen.value = value
  }

  function openModal() {
    setIsOpen(true)
    menu.resetProduct()
  }

  function closeModal() {
    setIsOpen(false)
    menu.resetProduct()
  }

  return {
    isOpen,
    setIsOpen,
    openModal,
    closeModal,
  }
})
