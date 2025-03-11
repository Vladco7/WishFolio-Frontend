export interface Pagination {
  totalItemsCount: number
  currentPageNumber: number
  pageSize: number
  totalPagesCount: number
}

export interface ResponseWithPagination<T> extends Pagination {
  items: T[]
}

export interface RequestWithPagination {
  searchName: string
  orderBy?: string
  pageNumber?: number
  pageSize?: number
}
