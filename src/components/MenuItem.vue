<script setup>
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline';

defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  stock: {
    type: Number,
  }
})
</script>

<template>
  <div class="bg-white border border-gray-200 rounded p-3 shadow">
    <h3 class="mb-2.5 font-bold text-xl text-center">{{ name }}</h3>
    <div class="flex gap-10 justify-between">
      <div>
        <div class="mb-4">
          <p class="font-bold">Stock: <span class="font-normal">{{ stock }}</span></p>
        </div>
        <div class="flex gap-2">
          <button class="px-2 py-1 rounded bg-gray-200 text-sm">Edit</button>
          <button class="px-2 py-1 rounded bg-red-500 text-white text-sm">Delete</button>
        </div>
      </div>

      <div class="flex flex-col gap-2 items-center justify-center">
        <button class="p-2 rounded-full bg-indigo-500 text-white">
          <PlusIcon class="w-4 h-4" />
        </button>
        <button class="p-2 rounded-full bg-indigo-500 text-white">
          <MinusIcon class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>
