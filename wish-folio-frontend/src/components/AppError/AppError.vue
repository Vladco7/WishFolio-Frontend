<template>
  <Toast position="bottom-right" />
</template>

<script setup lang="ts">
import { useErrorStore } from '@/stores/error/error'
import { Toast, useToast } from 'primevue'
import { watch } from 'vue'
const errorStore = useErrorStore()
const toast = useToast()

watch(
  () => errorStore.error,
  (value) => {
    if (value !== null) {
      toast.add({ severity: 'error', summary: 'Ошибка', detail: value, life: 3000 })
      errorStore.setError(null)
    }
  },
)
</script>

<style scoped></style>
