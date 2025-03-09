<script setup lang="ts">
import type { FriendsListProps } from './types'
import FriendsListCard from './FriendsListCard/FriendsListCard.vue'
import GridComponent from '@/components/UI/GridComponent/GridComponent.vue'

const props = defineProps<FriendsListProps>()
</script>

<template>
  <GridComponent :columns="'1fr 1fr 1fr'" :rowGap="'16px'" :columnGap="'16px'">
    <FriendsListCard v-for="friend in props.friends" :key="friend.id" :friend="friend" />
  </GridComponent>
</template>
