<script setup lang="ts">
    const props = defineProps<{
        type: {
            type: 'primary' | 'secondary';
            default: 'primary';
        };
    }>();

    console.log('Button type:', props.type);
</script>

<template>
  <button :class="'text-white cursor-pointer font-semibold py-2 px-4 rounded-lg ' + (props.type === 'primary' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700')">
    <slot>Button</slot>
  </button>
</template>