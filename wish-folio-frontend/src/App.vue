<script setup lang="ts">
import { watch } from 'vue'
import { getProfile } from './api/profile/getProfile'
import AppError from './components/AppError/AppError.vue'
import { useTokenStore } from './stores/token/token'
import { useUserStore } from './stores/user/user'
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'

const { token } = storeToRefs(useTokenStore())
const { setUser } = useUserStore()

const getUser = async () => {
  const response = await getProfile()
  if (response) {
    setUser(response)
  }
}

if (token.value) getUser()

watch(token, () => {
  if (!token.value) return
  getUser()
})
</script>

<template>
  <RouterView />
  <AppError />
</template>

<style scoped></style>
