<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/ui/Header.vue'
import Sidebar from './components/ui/Sidebar.vue'
</script>

<template>
  <Header />

  <div>
    <Sidebar />

    <main class="mt-12 md:ml-60 p-5 overflow-auto transition-all duration-500">
      <RouterView />
    </main>
  </div>
</template>

