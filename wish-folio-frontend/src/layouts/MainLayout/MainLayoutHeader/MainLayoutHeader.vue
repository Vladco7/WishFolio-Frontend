<script setup lang="ts">
import { AppRoutesNames } from '@/router/AppRoutes'
import { useUserStore } from '@/stores/user/user'
import { storeToRefs } from 'pinia'
import { Avatar } from 'primevue'
import MegaMenu from 'primevue/megamenu'
import type { MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MainLayoutHeaderItem from './MainLayoutHeaderItem/MainLayoutHeaderItem.vue'
import ThemeToggler from '@/components/UI/ThemeToggler/ThemeToggler.vue'
import FlexComponent from '@/components/UI/FlexComponent/FlexComponent.vue'

const items = ref<MenuItem[]>([
  {
    label: 'Friends',
    root: true,
    items: [],
    route: AppRoutesNames.FRIENDS,
  },
])

const router = useRouter()

const onLogoClick = () => {
  router.push({ name: AppRoutesNames.HOME })
}

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>

<template>
  <header class="mainLayoutHeader">
    <div class="card">
      <MegaMenu :model="items as MenuItem[][]" class="p-4 bg-surface-0" style="border-radius: 3rem">
        <template #start>
          <Avatar
            label="WF"
            class="mr-2"
            shape="circle"
            size="large"
            :style="{ cursor: `pointer` }"
            @click="onLogoClick"
          />
        </template>
        <template #item="{ item }">
          <MainLayoutHeaderItem :item="item" />
        </template>
        <template #end>
          <FlexComponent gap="16px" :align="'center'">
            <ThemeToggler />
            <Avatar :label="user?.name?.slice(0, 1)" shape="circle" />
          </FlexComponent>
        </template>
      </MegaMenu>
    </div>
  </header>
</template>

<style scoped>
.routeItem {
  text-decoration: none !important;
}
.mainLayoutHeader {
  position: fixed;
  top: 10px;
  left: 8px;
  width: calc(100% - 16px);
}
</style>
