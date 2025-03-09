<script setup lang="ts">
import { AppRoutesNames } from '@/router/AppRoutes'
import { useUserStore } from '@/stores/user/user'
import { storeToRefs } from 'pinia'
import { Avatar, Button, Popover } from 'primevue'
import MegaMenu from 'primevue/megamenu'
import type { MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MainLayoutHeaderItem from './MainLayoutHeaderItem/MainLayoutHeaderItem.vue'
import ThemeToggler from '@/components/UI/ThemeToggler/ThemeToggler.vue'
import FlexComponent from '@/components/UI/FlexComponent/FlexComponent.vue'
import { TypographyVariant } from '@/components/UI/TypographyComponent/types'
import TypographyComponent from '@/components/UI/TypographyComponent/TypographyComponent.vue'
import { useTokenStore } from '@/stores/token/token'
import { logout } from '@/api/authorization/logout'

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
const { removeToken } = useTokenStore()

const popover = ref()

const toggle = (event: MouseEvent) => {
  popover.value.toggle(event)
}

const onLogout = async () => {
  await logout()
  removeToken()
  userStore.resetUser()
  router.push({ name: AppRoutesNames.LOGIN })
}
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
            <Avatar :label="user?.name?.slice(0, 1)" shape="circle" @click="toggle" />
          </FlexComponent>
        </template>
      </MegaMenu>
    </div>
    <Popover ref="popover">
      <FlexComponent direction="column" gap="16px">
        <FlexComponent direction="column" gap="4px">
          <TypographyComponent :variant="TypographyVariant.h2">{{
            user?.name
          }}</TypographyComponent>
          <TypographyComponent :variant="TypographyVariant.body1">{{
            user?.email
          }}</TypographyComponent>
        </FlexComponent>
        <Button label="Выйти" severity="danger" outlined @click="onLogout"></Button>
      </FlexComponent>
    </Popover>
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
