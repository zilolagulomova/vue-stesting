<template>
  <div>
    <img :src="logoUrl" alt="Logo" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const logoUrl = computed(() => store.getters.logoUrl);
</script>
