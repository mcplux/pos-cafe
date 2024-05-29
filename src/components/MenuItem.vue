<script setup>
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline';

defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  }
})
</script>

<template>
  <div class="bg-white border border-gray-200 rounded p-3 shadow">
    <h3 class="mb-2.5 font-bold text-xl text-center">{{ name }}</h3>
    <div class="flex gap-10 justify-between">
      <div>
        <div class="mb-4">
          <p>
            {{ description }}
          </p>
        </div>
        <div class="flex gap-2">
          <button class="px-2 py-1 rounded bg-gray-200 text-sm">Edit</button>
          <button class="px-2 py-1 rounded bg-red-500 text-white text-sm">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
