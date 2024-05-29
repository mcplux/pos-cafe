import { defineStore } from "pinia"
import { onMounted, ref } from "vue"
import MenuAPI from "@/api/MenuAPI"

export const useMenuStore = defineStore('menu', () => {
  const menu = ref([])

  onMounted(async () => {
    try {
      const { data } = await MenuAPI.all()

      menu.value = data
    } catch (err) {
      console.log(err)
    }
  })

  return {
    menu,
  }
})
