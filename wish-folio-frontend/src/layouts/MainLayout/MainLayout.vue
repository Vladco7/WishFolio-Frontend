<script setup lang="ts">
import MainLayoutHeader from './MainLayoutHeader/MainLayoutHeader.vue'
</script>

<template>
  <div class="main-layout">
    <MainLayoutHeader />

    <main>
      <RouterView />
    </main>

    <footer></footer>
  </div>
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  margin-top: 86px;
}
</style>
