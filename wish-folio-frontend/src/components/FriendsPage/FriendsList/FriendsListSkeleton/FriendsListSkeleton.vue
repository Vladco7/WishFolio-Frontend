<script setup lang="ts">
import GridComponent from '@/components/UI/GridComponent/GridComponent.vue'
import FriendsListCardSkeleton from '../FriendsListCard/FriendsListCardSkeleton/FriendsListCardSkeleton.vue'
</script>

<template>
  <GridComponent :columns="'1fr 1fr 1fr'" :rowGap="'16px'" :columnGap="'16px'">
    <FriendsListCardSkeleton v-for="i in 6" :key="i" />
  </GridComponent>
</template>
