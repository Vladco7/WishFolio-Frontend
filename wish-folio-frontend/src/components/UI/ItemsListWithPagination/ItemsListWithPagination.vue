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

const { data, isLoading } = useQuery({
  queryKey: ['items', pagination, props],
  queryFn: async () => props.fetchFn({ ...pagination.value, ...props.filters }),
})

const onPageChange = (event: PageState) => {
  console.log(event)
  pagination.value = { ...pagination.value, pageNumber: event.page + 1 }
}
</script>
<template>
  <FlexComponent :direction="'column'" gap="16px" v-show="isLoading">
    <Skeleton v-for="item in 5" :key="item" height="20px"></Skeleton>
  </FlexComponent>
  <FlexComponent :direction="'column'" gap="16px" v-show="!isLoading">
    <FlexComponent :direction="'column'" gap="16px">
      <slot v-for="item in data?.items" :key="item.id" :item="item" name="item"></slot>
    </FlexComponent>
    <Paginator
      :first="(props.pagination?.pageNumber || 1) - 1"
      :totalRecords="data?.totalItemsCount"
      :rows="props.pagination?.pageSize"
      @page="onPageChange"
    ></Paginator>
  </FlexComponent>
</template>
