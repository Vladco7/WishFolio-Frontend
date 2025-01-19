import axios from 'axios'
import { tokenService } from '../services/tokenService'
import router from '../router'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers:{
    "Access-Control-Allow-Origin": "*",
  },
})

// Add a request interceptor to automatically add the token to all requests
api.interceptors.request.use(
  (config) => {
    const token = tokenService.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add a response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Remove token and redirect to login page
      tokenService.removeToken()
      console.error('Unauthorized')
      router.push({ name: 'login' })
    }
    return Promise.reject(error)
  }
)
