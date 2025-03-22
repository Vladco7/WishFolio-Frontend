<script setup lang="ts">
import { getUsers } from '@/api/user/getUsers'
import ItemsListWithPagination from '@/components/UI/ItemsListWithPagination/ItemsListWithPagination.vue'
import { Dialog } from 'primevue'

const props = defineProps({
  visible: Boolean,
})

const emit = defineEmits(['update:visible'])

const updateVisible = () => {
  emit('update:visible', false)
}
</script>

<template>
  <Dialog
    :visible="props.visible"
    @update:visible="updateVisible"
    modal
    header="Добавить друга"
    :style="{ width: '25rem' }"
    dismissableMask
  >
    <ItemsListWithPagination :fetchFn="getUsers" :pagination="{ pageNumber: 1, pageSize: 1 }">
      <template #item="{ item }">
        <div>
          {{ item.name }}
        </div>
      </template>
    </ItemsListWithPagination>
  </Dialog>
</template>
