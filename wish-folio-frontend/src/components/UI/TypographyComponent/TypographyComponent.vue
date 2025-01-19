<script setup lang="ts">
import { TypographyVariantToStylesMap, type TypographyComponentProps } from './types';

const props = defineProps<TypographyComponentProps>()

const variantStyles = TypographyVariantToStylesMap[props.variant]

</script>

<template>
    <div :style="{
        fontSize: variantStyles.fontSize,
        fontWeight: variantStyles.fontWeight,
        lineHeight: variantStyles.lineHeight
    }">
        <slot />
    </div>
</template>