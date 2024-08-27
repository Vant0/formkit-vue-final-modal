<script setup lang="ts">
import { ref } from 'vue'
import AppModal from '@/components/AppModal.vue'

const showModal = ref(false)

function toggleModal() {
  showModal.value = !showModal.value
}

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  { value: '4', label: 'Option 4' },
  { value: '5', label: 'Option 5' }
]
</script>

<template>
  <div>
    <div class="min-w-max">
      <h1 class="text-red-600">Several Formkit Pro inputs</h1>
      <p>If you open the modal, each FormKit input is starting to behave strangely.</p>
      <li>The datepicker and date will not show the datepicker overlay anymore.</li>
      <li>The autocomplete will show it is dropdown but will not close anymore.</li>
      <li>The dropdown doesnt show the overlay at all.</li>
      <p>This behavior is then permanent also when you close the modal.</p>
      <p>
        If you open and close the modal (without touching the inputs), the FormKit inputs are
        behaving as expected.
      </p>
    </div>

    <div class="flex flex-row pt-6 items-start gap-x-32">
      <div>
        <FormKit type="datepicker" label="datepicker" overlay popover></FormKit>
        <FormKit type="datepicker" label="date"></FormKit>
        <FormKit type="autocomplete" label="autocomplete" :options="options"></FormKit>
        <FormKit type="dropdown" label="dropdown" :options="options"></FormKit>
      </div>

      <div>
        <button @click="toggleModal" class="bg-red-500 p-4 rounded-xl text-white">
          Toggle Modal
        </button>
      </div>
    </div>
  </div>

  <AppModal v-model="showModal"> This is a random modal </AppModal>
</template>
