<script setup lang="ts">
import { Button, Card, InputNumber, InputText, Message, Password, useToast } from 'primevue'
import AuthorizationContainer from '../UI/AuthorizationContainer/AuthorizationContainer.vue'
import { Form, type FormSubmitEvent } from '@primevue/forms'
import FlexComponent from '../UI/FlexComponent/FlexComponent.vue'
import TypographyComponent from '../UI/TypographyComponent/TypographyComponent.vue'
import { TypographyVariant } from '../UI/TypographyComponent/types'
import { AppRoutesNames } from '@/router/AppRoutes'
import { ref } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'
import { register } from '@/api/authorization/register'
import router from '@/router'

const initialValues = ref({
  email: '',
  name: '',
  age: null,
  password: '',
})

const toast = useToast()

const resolver = zodResolver(
  z.object({
    email: z.string().email({ message: 'Неверная электронная почта' }),
    name: z
      .string({ message: 'Имя обязательно' })
      .min(2, { message: 'Имя должно быть не менее 2 символов' })
      .max(60, { message: 'Имя должно быть не более 20 символов' }),
    age: z
      .number()
      .min(14, { message: 'Возраст должен быть не менее 14 лет' })
      .optional()
      .nullish(),
    password: z.string().min(1, { message: 'Пароль должен быть не менее 1 символа' }),
  }),
)

const onSubmit = async (event: FormSubmitEvent) => {
  console.log(event)
  if (!event.valid) return
  await register({
    email: event.states.email.value,
    password: event.states.password.value,
    name: event.states.name.value,
    age: event.states.age.value,
  })
  toast.add({
    severity: 'success',
    summary: 'Успешно',
    detail: 'Регистрация успешно завершена!',
    life: 3000,
  })
  router.push({ name: AppRoutesNames.LOGIN })
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
              <TypographyComponent :variant="TypographyVariant.h2">Регистрация</TypographyComponent>
            </FlexComponent>
            <InputText name="email" type="text" placeholder="E-mail" />
            <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
              {{ $form.email.error.message }}
            </Message>
            <InputText name="name" type="text" placeholder="Имя" />
            <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">
              {{ $form.name.error.message }}
            </Message>
            <InputNumber name="age" type="number" placeholder="Возраст" />
            <Message v-if="$form.age?.invalid" severity="error" size="small" variant="simple">
              {{ $form.age.error.message }}
            </Message>
            <Password name="password" :feedback="false" placeholder="Пароль" toggleMask />
            <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
              {{ $form.password.error.message }}
            </Message>
            <Button type="submit">Зарегистрироваться</Button>
            <Button as="router-link" :to="{ name: AppRoutesNames.LOGIN }" severity="secondary"
              >Вход</Button
            >
          </FlexComponent>
        </Form>
      </template>
    </Card>
  </AuthorizationContainer>
</template>
