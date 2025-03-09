<script setup lang="ts">
import { TypographyVariant } from '@/components/UI/TypographyComponent/types'
import type { FriendsListCardProps } from './types'
import FlexComponent from '@/components/UI/FlexComponent/FlexComponent.vue'
import TypographyComponent from '@/components/UI/TypographyComponent/TypographyComponent.vue'

const props = defineProps<FriendsListCardProps>()
</script>

<template>
  <Card>
    <template #content>
      <FlexComponent direction="row" gap="8px">
        <Avatar :label="props.friend.name?.slice(0, 1)" shape="circle" />
        <FlexComponent direction="column" gap="4px">
          <TypographyComponent :variant="TypographyVariant.h2">{{
            props.friend.name
          }}</TypographyComponent>
          <TypographyComponent :variant="TypographyVariant.body1" v-if="props.friend.status">{{
            props.friend.status
          }}</TypographyComponent>
        </FlexComponent>
      </FlexComponent>
    </template>
  </Card>
</template>
