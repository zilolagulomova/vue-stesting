<template>
  <button :class="variant">
    <slot></slot>
  </button>
</template>
<script setup>
  import { defineProps } from 'vue'
  const props = defineProps({
    variant: {
      type: String,
      default: "primary",
    },
  })
</script>

<style scoped>
  .primary {
    background: #4f95ff;
    padding: 8px 64px;
    font-weight: 600;
    color: #fff;
    transition: all .35s;
  }
  .primary:hover {
    background: #1064b2;
  }
  .secondary {
    color: #fff;
    background: #89b9c8;
    transition: all .35s;
  }
  .secondary:hover {
    background: #64838d;
  }
</style>