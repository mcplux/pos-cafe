<script setup>
import { computed } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'
import MenuItem from './SidebarItem.vue'
import { HomeIcon, ShoppingCartIcon, ArchiveBoxIcon, NewspaperIcon, ChartBarIcon, UserIcon, Cog8ToothIcon } from '@heroicons/vue/24/outline'

const sidebar = useSidebarStore()
const isOpen = computed(() => sidebar.isOpen)
</script>

<template>
  <nav class="fixed w-60 top-14 bg-gray-800 overflow-auto h-full transition-transform duration-500" :class="[isOpen ? 'translate-x-0' : '-translate-x-full']">
    <ul>
      <MenuItem name="home" title="Home">
        <HomeIcon class="w-6 h-6" />
      </MenuItem>

      <MenuItem name="orders" title="Orders">
        <ShoppingCartIcon class="w-6 h-6" />
      </MenuItem>

      <MenuItem name="inventory" title="Inventory">
        <ArchiveBoxIcon class="w-6 h-6" />
      </MenuItem>

      <MenuItem name="menu" title="Menu Management">
        <NewspaperIcon class="w-6 h-6" />
      </MenuItem>

      <MenuItem name="reports" title="Reports">
        <ChartBarIcon class="w-6 h-6" />
      </MenuItem>

      <MenuItem name="customers" title="Customer Management">
        <UserIcon class="w-6 h-6" />
      </MenuItem>

      <MenuItem name="settings" title="Settings">
        <Cog8ToothIcon class="w-6 h-6" />
      </MenuItem>
    </ul>
  </nav>
</template>
