import type { User } from '@/types/user/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  function setUser(value: User | null) {
    user.value = value
  }
  return { user, setUser }
})
