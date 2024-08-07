<template>
  <button :class="variant">
    <slot></slot>
  </button>
</template>
<script setup>
  import {defineProps} from 'vue'
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
    color: #fff;
    transition: all .35s;
  }
  .primary:hover {
    background: #1064b2 !important;
  }
  .secondary {
    background: #89b9c8;
    padding: 12px 32px;
  }
  .secondary:hover {
    background: #64838d;
    padding: 12px 32px;
    transition: all .35s;
  }
</style>