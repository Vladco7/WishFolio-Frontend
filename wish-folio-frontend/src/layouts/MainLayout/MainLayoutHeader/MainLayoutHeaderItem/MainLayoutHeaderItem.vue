<script setup lang="ts">
import { TypographyVariant } from '@/components/UI/TypographyComponent/types'
import TypographyComponent from '@/components/UI/TypographyComponent/TypographyComponent.vue'
import type { MainLayoutHeaderItemProps } from './types'

const props = defineProps<MainLayoutHeaderItemProps>()
</script>

<template>
  <router-link v-if="props.item.route" :to="{ name: props.item.route }" :class="'routeItem'">
    <div style="padding: 0.5rem">
      <span :class="props.item.icon" />
      <TypographyComponent
        :variant="TypographyVariant.body1"
        :style="{ textTransform: `uppercase` }"
        >{{ props.item.label }}</TypographyComponent
      >
    </div>
  </router-link>
</template>

<style scoped>
.routeItem {
  text-decoration: none !important;
}
</style>
