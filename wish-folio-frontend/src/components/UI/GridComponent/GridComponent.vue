<script setup lang="ts">
import type { GridComponentProps } from './types'

const props = defineProps<GridComponentProps>()
</script>

<template>
  <div
    class="grid-component"
    :style="{
      display: 'grid',
      gridTemplateColumns: props.columns,
      rowGap: props.rowGap,
      columnGap: props.columnGap,
      ...props.style,
    }"
  >
    <slot></slot>
  </div>
</template>
