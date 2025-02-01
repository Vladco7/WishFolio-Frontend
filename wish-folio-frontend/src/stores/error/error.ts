import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useErrorStore = defineStore('error', () => {
  const error = ref<string | null>(null)
  function setError(value: string | null) {
    error.value = value
  }
  return {
    error,
    setError,
  }
})
