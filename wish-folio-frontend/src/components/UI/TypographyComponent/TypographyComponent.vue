<script setup lang="ts">
import { TypographyVariantToStylesMap, type TypographyComponentProps } from './types'

const props = defineProps<TypographyComponentProps>()

const variantStyles = TypographyVariantToStylesMap[props.variant]
const additionalStyle = props?.style ?? {}
</script>

<template>
  <div
    :style="{
      fontSize: variantStyles.fontSize,
      fontWeight: variantStyles.fontWeight,
      lineHeight: variantStyles.lineHeight,
      textDecoration: 'uppercase',
      ...additionalStyle,
    }"
  >
    <slot />
  </div>
</template>
