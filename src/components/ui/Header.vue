<script setup>
import { RouterLink } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'
import { Bars3Icon } from '@heroicons/vue/24/outline'

const sidebar = useSidebarStore()
</script>

<template>
  <header class="fixed top-0 w-full">
    <div class="flex justify-between items-center bg-gray-100 p-3.5 border-b border-gray-200 w-auto">
      <div class="flex items-center">
        <button id="sidebarToggle" class="px-3" @click="sidebar.toggle">
          <Bars3Icon class="size-6" />
        </button>
        <RouterLink :to="{name: 'home'}" class="text-xl font-bold">POS Café</RouterLink>
      </div>
      <div class="flex items-center">
        <span class="hidden lg:block text-lg">Today's sales: - | Completed orders: - | Tips: -</span>
      </div>
  
      <div class="flex items-center gap-3">
        <span class="hidden sm:block">Hi, username</span>
        <button>Cerrar Sesión</button>
      </div>
    </div>
  </header>
</template>
