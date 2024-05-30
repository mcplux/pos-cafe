import { defineStore } from "pinia"
import { computed, onMounted, reactive, ref } from "vue"
import { useModalStore } from "./modal"
import MenuAPI from "@/api/MenuAPI"

export const useMenuStore = defineStore('menu', () => {
  const modal = useModalStore()

  const menu = ref([])
  const product = reactive({
    id: '',
    name: '',
    price: '',
    description: '',
  })

  function resetProduct() {
    Object.assign(product, {
      id: '',
      name: '',
      price: '',
      description: '',
    })
  }

  async function handleEdit(id) {
    const { data } = await MenuAPI.getById(id)
    modal.openModal(true)
    Object.assign(product, data)
  }

  async function saveItem() {
    if(!product.id) {
      storeItem()
      return
    }

    updateItem()
  }

  async function storeItem() {
    const { name, price, description } = product
    const { data } = await MenuAPI.store({ name, price, description })
    menu.value.push(data)
  }

  async function updateItem() {
    const { id } = product
    const { data } = await MenuAPI.update(id, product)
    menu.value = menu.value.map(item => item.id === id ? data : item)

  }

  async function deleteItem(id) {
    await MenuAPI.delete(id)
    menu.value = menu.value.filter(item => item.id !== id)
  }

  onMounted(async () => {
    try {
      const { data } = await MenuAPI.all()

      menu.value = data
    } catch (err) {
      console.log(err)
    }
  })

  const isEditing = computed(() => product.id)

  return {
    menu,
    product,
    resetProduct,
    handleEdit,
    saveItem,
    deleteItem,
    isEditing,
  }
})
