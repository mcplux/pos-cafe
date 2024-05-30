<script setup>
import { useMenuStore } from '@/stores/menu'
import { useModalStore } from '@/stores/modal'
import { useToastStore } from '@/stores/toast'

const menu = useMenuStore()
const modal = useModalStore()
const toast = useToastStore()

const handleSubmit = async (data) => {
  try {
    await menu.saveItem(data)
    modal.closeModal() // Close modal
    toast.openNotification('Added correctly') // Show notification

  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <div class="p-5">
    <FormKit 
      type="form" 
      :actions="false"
      @submit="handleSubmit"
      id="menu-form"
      :value="menu.product"
    >

      <FormKit 
        type="text"
        label="Name"
        name="name"
        placeholder="Product name"
        validation="required"
        v-model.trim="menu.product.name"
      />

      <FormKit 
        type="number"
        label="Price"
        name="price"
        placeholder="Product name"
        validation="required|min:1"
        v-model.number="menu.product.price"
      />

      <FormKit 
        type="textarea"
        label="Description"
        name="description"
        placeholder="Product description"
        validation="required|length:0,75"
        v-model.trim="menu.product.description"
      />

      <FormKit type="submit">
        Save
      </FormKit>

    </FormKit>
  </div>
</template>
