<script setup lang="ts">
import { getFriends } from '@/api/friends/getFriends'
// import type { Friend } from '@/types/friend/friend'
// import { ref } from 'vue'
import EmptyFriendsList from './EmptyFriendsList/EmptyFriendsList.vue'
import { useQuery } from '@tanstack/vue-query'
import FriendsListSkeleton from './FriendsList/FriendsListSkeleton/FriendsListSkeleton.vue'

// const friends = ref<Friend[]>([])

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
    </div>
  </div>
</template>
