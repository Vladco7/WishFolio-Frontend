<script setup lang="ts">
import { getUsers } from '@/api/user/getUsers'
import FlexComponent from '@/components/UI/FlexComponent/FlexComponent.vue'
import ItemsListWithPagination from '@/components/UI/ItemsListWithPagination/ItemsListWithPagination.vue'
import { TypographyVariant } from '@/components/UI/TypographyComponent/types'
import TypographyComponent from '@/components/UI/TypographyComponent/TypographyComponent.vue'
import { refDebounced } from '@vueuse/core'
import { Avatar, Dialog, InputText } from 'primevue'
import { ref } from 'vue'

const props = defineProps({
  visible: Boolean,
})

const emit = defineEmits(['update:visible'])

const updateVisible = () => {
  emit('update:visible', false)
}

const filterName = ref('')
const debouncedFilterName = refDebounced(filterName, 2000)
</script>

<template>
  <Dialog
    :visible="props.visible"
    @update:visible="updateVisible"
    modal
    header="Добавить друга"
    :style="{ width: '28rem' }"
    dismissableMask
  >
    <FlexComponent direction="column" gap="16px">
      <InputText v-model="filterName" placeholder="Поиск по имени" />
      <ItemsListWithPagination
        :fetchFn="getUsers"
        :pagination="{ pageNumber: 1, pageSize: 2 }"
        :filters="{ FilterName: debouncedFilterName }"
      >
        <template #item="{ item }">
          <FlexComponent gap="8px" align="center">
            <Avatar :label="item.name?.slice(0, 1)" shape="circle" size="normal" />
            <TypographyComponent :variant="TypographyVariant.body1">{{
              item.name
            }}</TypographyComponent>
          </FlexComponent>
        </template>
      </ItemsListWithPagination>
    </FlexComponent>
  </Dialog>
</template>
