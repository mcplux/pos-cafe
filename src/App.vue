<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'
import Header from '@/components/ui/Header.vue'
import Sidebar from '@/components/ui/Sidebar.vue'

const sidebar = useSidebarStore()
const isOpen = computed(() => sidebar.isOpen)
</script>

<template>
  <Header />

  <div>
    <Sidebar />

    <main class="mt-12 p-5 overflow-auto transition-all duration-500" :class="[isOpen ? 'md:ml-60' : '']">
      <RouterView />
    </main>
  </div>
</template>

