import { defineStore } from "pinia"
import { computed, onMounted, reactive, ref } from "vue"
import Swal from "sweetalert2"
import { useModalStore } from "./modal"
import { useToastStore } from "./toast"
import MenuAPI from "@/api/MenuAPI"

export const useMenuStore = defineStore('menu', () => {
  const modal = useModalStore()
  const toast = useToastStore()

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

  // Query database for item to edit and open modal 
  async function handleEdit(id) {
    const { data } = await MenuAPI.getById(id)
    modal.openModal(true)
    Object.assign(product, data)
  }

  // Show an alert before delete
  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteItem(id)
        toast.openNotification('Deleted correctly')
      }
    });
  }

  // If there an id then edit, else store item.
  async function saveItem() {
    if(!product.id) {
      storeItem()
      return
    }

    updateItem()
  }

  /** CRUD */

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

  /** End CRUD */

  // When component is mounted query all item menu
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
    handleDelete,
    saveItem,
    deleteItem,
    isEditing,
  }
})
