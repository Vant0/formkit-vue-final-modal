<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'close'): void
}>()

const showModal = useVModel(props, 'modelValue', emits)
</script>

<template>
  <VueFinalModal
    v-model="showModal"
    overlay-transition="vfm-fade"
    overlay-class="backdrop-blur-[4px]"
    content-transition="vfm-fade"
    content-class="absolute top-0 -right-2 bg-gray-500 whitespace-nowrap w-[400px] h-full p-4 rounded-lg p-10 flex flex-col text-white"
  >
    <slot />
  </VueFinalModal>
</template>
