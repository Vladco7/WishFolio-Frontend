<script setup lang="ts">
import { Form, type FormSubmitEvent } from '@primevue/forms'
import { Button, Card, InputText, Message, Password } from 'primevue'
import FlexComponent from '../UI/FlexComponent/FlexComponent.vue'
import TypographyComponent from '../UI/TypographyComponent/TypographyComponent.vue'
import { TypographyVariant } from '../UI/TypographyComponent/types'
import { login } from '@/api/authorization/login'
import tokenService from '@/services/tokenService'
import router from '@/router'
import { AppRoutesNames } from '@/router/AppRoutes'
import { ref } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'
import AuthorizationContainer from '../UI/AuthorizationContainer/AuthorizationContainer.vue'

const initialValues = ref({
  email: '',
  password: '',
})

const resolver = zodResolver(
  z.object({
    email: z.string().email({ message: 'Неверная электронная почта' }),
    password: z.string().min(1, { message: 'Пароль должен быть не менее 1 символа' }),
  }),
)

const onSubmit = async (event: FormSubmitEvent) => {
  console.log(event)
  if (!event.valid) return
  const response = await login({
    email: event.states.email.value,
    password: event.states.password.value,
  })
  if (!response) return
  tokenService.setToken(response.value)
  router.push({ name: AppRoutesNames.HOME })
}
</script>

<template>
  <AuthorizationContainer>
    <Card>
      <template #content>
        <Form
          v-slot="$form"
          @submit="onSubmit"
          :initial-values="initialValues"
          :resolver="resolver"
        >
          <FlexComponent :direction="'column'" :gap="'16px'">
            <FlexComponent :align="'center'" :justify="'center'">
              <TypographyComponent :variant="TypographyVariant.h2">Вход</TypographyComponent>
            </FlexComponent>
            <InputText name="email" type="text" placeholder="E-mail" />
            <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
              {{ $form.email.error.message }}
            </Message>
            <Password name="password" :feedback="false" placeholder="Пароль" toggleMask />
            <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
              {{ $form.password.error.message }}
            </Message>
            <Button type="submit">Войти</Button>
            <Button as="router-link" :to="{ name: AppRoutesNames.REGISTER }" severity="secondary"
              >Регистрация</Button
            >
          </FlexComponent>
        </Form>
      </template>
    </Card>
  </AuthorizationContainer>
</template>

<style scoped></style>
