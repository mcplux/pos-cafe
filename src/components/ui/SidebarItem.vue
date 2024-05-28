<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  name: {
    type: String,
  },

  title: {
    type: String,
  },
})
</script>

<template>
  <li class="border-b border-gray-700 text-white p-1">
    <RouterLink :to="{ name }" class="flex items-center gap-2 px-4 py-5">
      <slot></slot>
      <span>{{ title }}</span>
    </RouterLink>
  </li>
</template>
