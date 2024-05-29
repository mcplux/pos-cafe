import { defineStore } from "pinia"
import { onMounted, reactive, ref } from "vue"
import MenuAPI from "@/api/MenuAPI"

export const useMenuStore = defineStore('menu', () => {
  const menu = ref([])
  const product = reactive({
    id: '',
    name: '',
    price: '',
    description: '',
  })

  async function storeItem(data) {
    await MenuAPI.store(data)
    menu.value.push(data)
  }

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
    product,
    storeItem,
  }
})
