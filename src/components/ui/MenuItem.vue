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
  <li class="border-b border-gray-700 px-4 py-5 text-white">
    <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2">
      <slot></slot>
      <span>{{ title }}</span>
    </RouterLink>
  </li>
</template>
