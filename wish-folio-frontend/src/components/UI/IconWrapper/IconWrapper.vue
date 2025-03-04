<script setup lang="ts">
import type { IconName } from '@/types/icon/icon'

const props = defineProps<{
  name: IconName
}>()
</script>

<template>
  <i :class="`pi ${props.name}`"></i>
</template>
