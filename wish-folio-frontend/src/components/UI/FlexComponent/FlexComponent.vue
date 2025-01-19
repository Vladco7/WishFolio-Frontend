<script setup lang="ts">
import type { FlexComponentProps } from './types';

    const props = defineProps<FlexComponentProps>()
</script>

<template>
    <div class="flex-component" :style="{
        display: 'flex',
        flexDirection: props.direction,
        justifyContent: props.justify,
        alignItems: props.align,
        gap: props.gap
    }">
        <slot></slot>
    </div>
</template>