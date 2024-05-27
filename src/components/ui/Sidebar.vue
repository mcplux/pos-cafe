<script setup>
import MenuItem from './MenuItem.vue'
import { HomeIcon, ShoppingCartIcon, ArchiveBoxIcon, NewspaperIcon, ChartBarIcon, UserIcon, Cog8ToothIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <nav class="fixed w-60 top-14 -translate-x-full md:translate-x-0 overflow-auto bg-gray-800 h-full transition-transform duration-500">
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
