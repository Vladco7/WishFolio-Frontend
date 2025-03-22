import type { ListFetchFn } from '@/types/list/list'
import { api } from '../api'
import type { UsersSearchRequest, UsersSearchResponse } from './types'
import type { User } from '@/types/user/user'

export const getUsers: ListFetchFn<User, UsersSearchRequest> = async (
  params: UsersSearchRequest,
): Promise<UsersSearchResponse> => {
  const response = await api.get('/users/search', {
    params,
  })
  return response.data
}
