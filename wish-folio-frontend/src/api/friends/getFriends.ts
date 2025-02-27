import { api } from '../api'
import type { Friend } from '@/types/friend/friend'

export const getFriends = async (): Promise<Friend[]> => {
  const response = await api.get('/friends')
  return response.data
}
