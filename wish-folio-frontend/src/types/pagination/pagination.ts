export interface Pagination {
  totalItemsCount: number
  currentPageNumber: number
  pageSize: number
  totalPagesCount: number
}

export interface PaginationItemBase {
  id: string
}

export interface ResponseWithPagination<T extends PaginationItemBase> extends Pagination {
  items: T[]
}

export interface RequestPagination {
  orderBy?: string
  pageNumber?: number
  pageSize?: number
}
