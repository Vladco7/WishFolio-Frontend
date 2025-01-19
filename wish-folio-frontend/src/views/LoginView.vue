<script setup lang="ts">
import { api } from '@/api/api';

const onClick = async () =>{
    const response = await api.get('/friends')
    console.log(response)
}
</script>

<template>
    <div>Login</div>
    <button @click="onClick">Login</button>
</template>