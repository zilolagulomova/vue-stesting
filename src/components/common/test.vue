<template>
  <div>
    <h1>Automatic Counter</h1>
    <p>Current Count: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const count = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    count.value++;
  }, 1000); // Increment every second

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
