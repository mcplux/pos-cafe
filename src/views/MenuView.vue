<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'

</script>

<template>
  <div>
    <button class="fixed bg-indigo-400 text-white rounded-full p-3 transition-colors hover:bg-indigo-500 z-10 right-2 lg:right-10 bottom-10">
      <PlusIcon class="w-6 h-6" />     
    </button>

    <h1 class="text-3xl font-bold text-center mb-5">Menu Management</h1>

    <!-- Menu list -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
    
    </div>
  </div>
</template>
