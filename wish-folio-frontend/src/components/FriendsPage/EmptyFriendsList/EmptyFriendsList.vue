<script setup lang="ts">
import FlexComponent from '@/components/UI/FlexComponent/FlexComponent.vue'
import { TypographyVariant } from '@/components/UI/TypographyComponent/types'
import TypographyComponent from '@/components/UI/TypographyComponent/TypographyComponent.vue'
import { getIconClass, IconName } from '@/types/icon/icon'
import { Button, Card } from 'primevue'

const emit = defineEmits(['addFriend'])

const onAddFriend = () => {
  emit('addFriend')
}
</script>

<template>
  <Card>
    <template #content>
      <FlexComponent direction="column" gap="16px" :align="'center'">
        <TypographyComponent :variant="TypographyVariant.h2"
          >Список друзей пуст</TypographyComponent
        >
        <TypographyComponent :variant="TypographyVariant.body1"
          >Добавьте друга, чтобы увидеть его в списке друзей</TypographyComponent
        >
        <Button
          label="Добавить друга"
          :icon="getIconClass(IconName.PLUS)"
          icon-pos="right"
          @click="onAddFriend"
        />
      </FlexComponent>
    </template>
  </Card>
</template>
