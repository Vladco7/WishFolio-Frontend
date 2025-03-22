<script setup lang="ts" generic="T extends PaginationItemBase">
import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue'
import type { PaginationItemBase, RequestPagination } from '@/types/pagination/pagination'
import FlexComponent from '../FlexComponent/FlexComponent.vue'
import { Paginator, Skeleton, type PageState } from 'primevue'
import type { ListFetchFn } from '@/types/list/list'

const props = defineProps<{
  fetchFn: ListFetchFn<T, RequestPagination>
  pagination?: RequestPagination
  filters?: Record<string, unknown>
  sort?: string
}>()

const pagination = ref<RequestPagination | undefined>(props.pagination)

const { data, isFetching } = useQuery({
  queryKey: ['items', pagination],
  queryFn: async () => props.fetchFn({ ...pagination.value, ...props.filters }),
})

const onPageChange = (event: PageState) => {
  pagination.value = { ...pagination.value, pageNumber: event.page + 1 }
}
</script>
<template>
  <FlexComponent :direction="'column'" v-if="isFetching">
    <Skeleton v-for="item in 10" :key="item"></Skeleton>
  </FlexComponent>
  <FlexComponent :direction="'column'" v-else>
    <div>
      <slot v-for="item in data?.items" :key="item.id" :item="item" name="item"></slot>
    </div>
    <Paginator
      :first="data?.currentPageNumber ? data.currentPageNumber - 1 : 0"
      :totalRecords="data?.totalItemsCount"
      :rows="props.pagination?.pageSize"
      @page="onPageChange"
    ></Paginator>
  </FlexComponent>
</template>
