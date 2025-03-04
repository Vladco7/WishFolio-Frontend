<script setup lang="ts">
import { IconName } from '@/types/icon/icon'
import IconWrapper from '../IconWrapper/IconWrapper.vue'
import Button from 'primevue/button'
import { themeService } from '@/services/themeService'

const toggleTheme = () => {
  themeService.toggleTheme()
}
</script>

<template>
  <Button severity="secondary" @click="toggleTheme">
    <IconWrapper :name="IconName.SUN" />
  </Button>
</template>
