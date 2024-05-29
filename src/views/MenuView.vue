<script setup>
import { useModalStore } from '@/stores/modal'
import { useMenuStore } from '@/stores/menu'
import MenuModal from '@/components/MenuModal.vue'
import MenuItem from '@/components/MenuItem.vue';
import { PlusIcon } from '@heroicons/vue/24/outline'

const modal = useModalStore()
const menu = useMenuStore()
</script>

<template>
  <div>
    <button @click="modal.setIsOpen(true)" class="fixed bg-indigo-400 text-white rounded-full p-3 transition-colors hover:bg-indigo-500 z-10 right-2 lg:right-10 bottom-10">
      <PlusIcon class="w-6 h-6" />     
    </button>

    <MenuModal/>

    <h1 class="text-3xl font-bold text-center mb-5">Menu Management</h1>

    <!-- Menu list -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
      <MenuItem
        v-for="item in menu.menu"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :description="item.description"
        :price="item.price"
      />
    </div>
  </div>
</template>
