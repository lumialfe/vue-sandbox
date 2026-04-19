<script setup lang="ts">
    import { useCounterStore } from '../stores/counter';
  
    const counterStore = useCounterStore();
</script>

<template>
  <div class="home">
    <h1 class="bg-blue-500 text-white p-5">About Us</h1>
    <button @click="counterStore.increment">Count++</button>
    <p>Count: {{ counterStore.count }}</p>
  </div>
</template>