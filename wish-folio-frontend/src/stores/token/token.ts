import { defineStore } from 'pinia'
import type { DecodedToken } from '@/types/token/token'

const TOKEN_KEY = 'auth_token'

export const useTokenStore = defineStore('token', {
  state: () => ({
    token: localStorage.getItem(TOKEN_KEY) as string | null,
  }),

  getters: {
    isTokenExpired: (state): boolean => {
      if (!state.token) return true
      const decoded = decodeToken(state.token)
      if (!decoded || !decoded.exp) return true
      return Date.now() >= decoded.exp * 1000
    },
  },

  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },

    removeToken() {
      this.token = null
      localStorage.removeItem(TOKEN_KEY)
    },
  },
})

// Функция для декодирования токена
function decodeToken(token: string): DecodedToken | null {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('Error decoding token:', error)
    return null
  }
}
