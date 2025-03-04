<script setup lang="ts">
import { TypographyVariant } from '@/components/UI/TypographyComponent/types'
import TypographyComponent from '@/components/UI/TypographyComponent/TypographyComponent.vue'
import type { MainLayoutHeaderItemProps } from './types'

const props = defineProps<MainLayoutHeaderItemProps>()
</script>

<template>
  <RouterLink
    v-if="props.item.route"
    :to="{ name: props.item.route }"
    :class="'route-item'"
    activeClass="active-route"
  >
    <div style="padding: 0.5rem">
      <span :class="props.item.icon" />
      <TypographyComponent
        :variant="TypographyVariant.body1"
        :style="{ textTransform: `uppercase` }"
        >{{ props.item.label }}</TypographyComponent
      >
    </div>
  </RouterLink>
</template>

<style scoped>
.route-item {
  text-decoration: none !important;
}
.active-route {
  color: var(--p-primary-color);
}
</style>
