<script setup lang="ts">
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log('API URL:', apiUrl);
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <p>Welcome to the home page!</p>
  </div>
</template>

<style scoped>
.home {
    padding: 20px;
}
</style>