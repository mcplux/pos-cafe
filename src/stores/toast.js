import { defineStore } from "pinia"
import { useToast } from "vue-toast-notification"

export const useToastStore = defineStore('toast', () => {
  
  const $toast = useToast({
    duration: 3000,
    position: 'top-right',
  })

  function openNotification(message, type='success') {
    $toast.open({
      message,
      type,
    })
  }

  return {
    openNotification,
  }
})
