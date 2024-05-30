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
    try {
      const { data } = await MenuAPI.getById(id)
      modal.openModal(true)
      Object.assign(product, data)
    } catch (err) {
      console.error("Failed to fetch product data for editing:", err)
    }
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
        try {
          await deleteItem(id)
          toast.openNotification('Deleted correctly')
        } catch (err) {
          console.error("Failed to delete product:", err)
        }
      }
    });
  }

  // If there is an id then edit, else store item.
  async function saveItem() {
    try {
      if (!product.id) {
        await storeItem()
      } else {
        await updateItem()
      }
    } catch (err) {
      console.error("Failed to save product:", err)
    }
  }

  /** CRUD */

  async function getAllItems() {
    try {
      const { data } = await MenuAPI.all()
      menu.value = data
    } catch (err) {
      console.error("Failed to fetch all items:", err)
    }
  }

  async function storeItem() {
    try {
      const { name, price, description } = product
      const { data } = await MenuAPI.store({ name, price, description })
      menu.value.push(data)
    } catch (err) {
      console.error("Failed to store new product:", err)
    }
  }

  async function updateItem() {
    try {
      const { id } = product
      const { data } = await MenuAPI.update(id, product)
      menu.value = menu.value.map(item => item.id === id ? data : item)
    } catch (err) {
      console.error("Failed to update product:", err)
    }
  }

  async function deleteItem(id) {
    try {
      await MenuAPI.delete(id)
      menu.value = menu.value.filter(item => item.id !== id)
    } catch (err) {
      console.error("Failed to delete product:", err)
    }
  }

  /** End CRUD */

  // When component is mounted, query all item menu
  onMounted(async () => {
    await getAllItems()
  })

  const isEditing = computed(() => !!product.id)

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
