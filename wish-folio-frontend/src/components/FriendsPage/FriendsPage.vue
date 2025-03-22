<script setup lang="ts">
import { getFriends } from '@/api/friends/getFriends'
import EmptyFriendsList from './EmptyFriendsList/EmptyFriendsList.vue'
import { useQuery } from '@tanstack/vue-query'
import FriendsListSkeleton from './FriendsList/FriendsListSkeleton/FriendsListSkeleton.vue'
import FriendsList from './FriendsList/FriendsList.vue'
import { ref, watch } from 'vue'
import type { Friend } from '@/types/friend/friend'
import FriendAddDialog from './FriendAddDialog/FriendAddDialog.vue'

const friendAddDialogVisible = ref<boolean>(false)

const { data, isFetching } = useQuery({
  queryKey: ['friends'],
  queryFn: getFriends,
})

const friends = ref<Friend[]>([])

watch(
  data,
  (newData) => {
    if (newData) {
      friends.value = newData.items
    }
  },
  { immediate: true },
)

const showFriendAddDialog = () => {
  friendAddDialogVisible.value = true
}
</script>

<template>
  <div>
    <div v-if="isFetching">
      <FriendsListSkeleton />
    </div>
    <div v-if="friends && !isFetching">
      <EmptyFriendsList v-if="friends.length === 0" @add-friend="showFriendAddDialog" />
      <FriendsList v-else :friends="friends" />
    </div>
  </div>
  <FriendAddDialog
    :visible="friendAddDialogVisible"
    @update:visible="(value: boolean) => (friendAddDialogVisible = value)"
  />
</template>
