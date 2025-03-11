import type { RequestWithPagination } from '@/types/pagination/pagination'
import { api } from '../api'
import type { UsersSearchResponse } from './types'

export const getUsers = async (params: RequestWithPagination): Promise<UsersSearchResponse> => {
  const response = await api.get('/users/search', {
    params,
  })
  return response.data
}
