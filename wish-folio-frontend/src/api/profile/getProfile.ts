import type { User } from '@/types/user/user'
import { api } from '../api'

export const getProfile = async (): Promise<User> => {
  const response = await api.get('/profile')
  return response.data
}
