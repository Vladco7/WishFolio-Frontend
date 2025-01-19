import type { DecodedToken } from "@/types/token/token"

const TOKEN_KEY = 'auth_token'

export const tokenService = {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY)
  },

  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token)
  },

  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY)
  },

  decodeToken(token: string): DecodedToken | null {
    try {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
      return JSON.parse(jsonPayload)
    } catch (error) {
      console.error('Error decoding token:', error)
      return null
    }
  },

  isTokenExpired(): boolean {
    const token = this.getToken()
    if (!token) return true

    const decoded = this.decodeToken(token)
    if (!decoded || !decoded.exp) return true

    // exp в JWT указывается в секундах
    const expirationDate = decoded.exp * 1000 // переводим в миллисекунды
    return Date.now() >= expirationDate
  }
}

export default tokenService
