<script setup lang="ts">
import { getFriends } from '@/api/friends/getFriends'
import EmptyFriendsList from './EmptyFriendsList/EmptyFriendsList.vue'
import { useQuery } from '@tanstack/vue-query'
import FriendsListSkeleton from './FriendsList/FriendsListSkeleton/FriendsListSkeleton.vue'
import FriendsList from './FriendsList/FriendsList.vue'

const { data, isFetching } = useQuery({
  queryKey: ['friends'],
  queryFn: getFriends,
})
</script>

<template>
  <div>
    <div v-if="isFetching">
      <FriendsListSkeleton />
    </div>
    <div v-if="data && !isFetching">
      <EmptyFriendsList v-if="data.length === 0" />
      <FriendsList v-else :friends="data" />
    </div>
  </div>
</template>
