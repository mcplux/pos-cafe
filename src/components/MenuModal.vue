<script setup>
import { useModalStore } from '@/stores/modal'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const modal = useModalStore()
</script>

<template>
  <!-- Wrap your dialog in a `TransitionRoot`. -->
  <TransitionRoot :show="modal.isOpen" as="template">
    <Dialog @close="modal.setIsOpen">
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
              <DialogTitle class="text-2xl font-bold text-center mt-5">New Product</DialogTitle>

              <div class="p-5">
                <FormKit type="form" :actions="false">

                  <FormKit 
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Product name"
                    validation="required"
                  />

                  <FormKit 
                    type="textarea"
                    label="Description"
                    name="description"
                    placeholder="Product description"
                    validation="required|length:0,75"
                  />

                  <FormKit type="submit">
                    Save
                  </FormKit>

                </FormKit>
              </div>
            </DialogPanel>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
