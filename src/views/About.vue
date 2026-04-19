<script setup lang="ts">
    import { useCounterStore } from '../stores/counter';
    import Button from "../components/Button.vue";

    const counterStore = useCounterStore();
</script>

<template>
  <div class="home">
    <h1 class="bg-blue-500 text-white p-5">About Us</h1>
    <Button type="secondary" @click="counterStore.increment">Count++</Button>
    <p>Count: {{ counterStore.count }}</p>
  </div>
</template>