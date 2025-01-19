<script setup lang="ts">
</script>

<template>
  <div class="main-layout">
    <header>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
    </footer>
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
}
</style>
