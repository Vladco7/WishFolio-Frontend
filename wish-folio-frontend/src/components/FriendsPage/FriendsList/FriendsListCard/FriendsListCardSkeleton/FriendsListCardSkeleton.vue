<script setup lang="ts">
import FlexComponent from '@/components/UI/FlexComponent/FlexComponent.vue'
import { Card, Skeleton } from 'primevue'
</script>

<template>
  <Card>
    <template #content>
      <FlexComponent direction="row" gap="8px">
        <Skeleton shape="circle" size="2rem" class="mr-2" />
        <Skeleton class="mb-2" borderRadius="16px" />
      </FlexComponent>
    </template>
  </Card>
</template>
