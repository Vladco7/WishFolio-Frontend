import type { RequestPagination, ResponseWithPagination } from '@/types/pagination/pagination'
import type { UserSearchItem } from '@/types/user/user'

export type UsersSearchResponse = ResponseWithPagination<UserSearchItem>
export interface UsersSearchRequest extends RequestPagination {
  searchName?: string
}
