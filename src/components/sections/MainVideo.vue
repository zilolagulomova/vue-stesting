<template>
  <section class="my-10">
    <div class="container flex gap-24 ">
      <div class="video">
        <iframe width="500" height="315" :src="mainVideo.video"></iframe>
      </div>
      <div class="pt-4">
        <h4 class="text-4xl font-bold mb-8">Video tutorials</h4>
        <a href="https://stesting.uz/en/tutorials">
          <Button>All tutorials</Button>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import {defineProps} from 'vue'
import Button from "@/components/buttons/Button.vue";

const props = defineProps({
  mainVideo: {
    type: Object,
  }
})
</script>


<style scoped>

</style>