import type {
  PaginationItemBase,
  RequestPagination,
  ResponseWithPagination,
} from '../pagination/pagination'

export type ListFetchFn<T extends PaginationItemBase, P extends RequestPagination> = (
  params: P,
) => Promise<ResponseWithPagination<T>>
