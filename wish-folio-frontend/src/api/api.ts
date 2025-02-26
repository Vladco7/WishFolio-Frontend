import axios from 'axios'
import router from '../router'
import { useErrorStore } from '@/stores/error/error'
import { useTokenStore } from '@/stores/token/token'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

// Add a request interceptor to automatically add the token to all requests
api.interceptors.request.use(
  (config) => {
    const { token } = useTokenStore()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorStore = useErrorStore()
    const { removeToken } = useTokenStore()
    if (error.response?.status === 401) {
      removeToken()
      console.error('Unauthorized')
      router.push({ name: 'login' })
    } else {
      // toast.add({
      //   severity: 'error',
      //   summary: 'Error',
      //   detail: error.response?.data?.message || 'Что-то пошло не так',
      //   life: 3000,
      // })
      errorStore.setError(error.response?.data || 'Что-то пошло не так')
    }
    return Promise.reject(error)
  },
)
