<script setup>
import { useModalStore } from '@/stores/modal'
import { useMenuStore } from '@/stores/menu'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import MenuForm from '@/components/MenuForm.vue'

const modal = useModalStore()
const menu = useMenuStore()
</script>

<template>
  <!-- Wrap your dialog in a `TransitionRoot`. -->
  <TransitionRoot :show="modal.isOpen" as="template">
    <Dialog @close="modal.closeModal()">
      <!-- Wrap your backdrop in a `TransitionChild`. -->
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30" />
      </TransitionChild>

      <!-- Wrap your panel in a `TransitionChild`. -->
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <!-- Full-screen scrollable container -->
        <div class="fixed inset-0 w-screen overflow-y-auto">
          <!-- Container to center the panel -->
          <div class="flex min-h-full items-center justify-center p-4">
            <!-- The actual dialog panel -->
            <DialogPanel class="w-full max-w-2xl rounded bg-white">
              <DialogTitle class="text-2xl font-bold text-center mt-5">
                {{ menu.isEditing ? "Edit Product" : "Create product" }}
              </DialogTitle>

              <MenuForm />
            </DialogPanel>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
