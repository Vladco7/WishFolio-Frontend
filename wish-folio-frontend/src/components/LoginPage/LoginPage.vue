<script setup lang="ts">
import { Form, type FormSubmitEvent } from '@primevue/forms'
import { Button, Card, InputText, Password } from 'primevue'
import FlexComponent from '../UI/FlexComponent/FlexComponent.vue';
import TypographyComponent from '../UI/TypographyComponent/TypographyComponent.vue';
import {TypographyVariant} from '../UI/TypographyComponent/types';
import { login } from '@/api/authorization/login';
import tokenService from '@/services/tokenService';
import router from '@/router';
import { AppRoutesNames } from '@/router/AppRoutes';
import { ref } from 'vue';

const initialValues = ref({
  email: '',
  password: ''
});

const onSubmit = async (event: FormSubmitEvent) => {
  console.log(event);
  if(!event.valid) return
    const response = await login({email: event.states.email.value, password: event.states.password.value})
    if(!response) return
    tokenService.setToken(response.value)
    router.push({ name: AppRoutesNames.HOME })
}

</script>

<template>
  <div class="container">
    <Card>
        <template #content>
        <Form @submit="onSubmit" :initial-values="initialValues">
            <FlexComponent :direction="'column'" :gap="'16px'">
                <FlexComponent :align="'center'" :justify="'center'" >
                <TypographyComponent :variant="TypographyVariant.h2">Вход</TypographyComponent>
            </FlexComponent>
                <InputText name="email" type="text" placeholder="E-mail" />
                <Password name="password" :feedback="false" placeholder="Пароль" toggleMask />
                <Button type="submit">Войти</Button>
            </FlexComponent>
        </Form>
    </template>
    </Card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>
