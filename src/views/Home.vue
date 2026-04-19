<script setup lang="ts">
    import { useCounterStore } from '../stores/counter';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    import Button from "../components/Button.vue";


    const apiUrl = import.meta.env.VITE_API_URL;
    console.log('API URL:', apiUrl);

    const counterStore = useCounterStore();
</script>

<template>
  <div class="home">
    <h1 class="bg-blue-500 text-white p-5">{{ $t('message.hello') }}</h1>
    <p>Welcome to the home page!</p>
    <Button type="primary" @click="counterStore.increment">Count++</Button>
    <p>Count: {{ counterStore.count }}</p>
  </div>
</template>