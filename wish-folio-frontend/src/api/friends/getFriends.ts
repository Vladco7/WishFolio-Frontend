import type { ResponseWithPagination } from '@/types/pagination/pagination'
import { api } from '../api'
import type { Friend } from '@/types/friend/friend'

export const getFriends = async (): Promise<ResponseWithPagination<Friend>> => {
  const response = await api.get('/friends')
  return response.data
}
