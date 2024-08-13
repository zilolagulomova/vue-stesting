<template>
  <section class="bg-[#f8fbff] w-full max-w-[900px] mx-auto mt-16 mb-20 flex justify-center gap-10 items-center">
    <h2 class="text-[2rem] font-bold -ml-24 max-w-[226px]">About the Stesting project</h2>
    <p class="max-w-[482px] short_description text-lg ">{{shortDescription}}</p>
    <a href="https://stesting.uz/en/about">
      <Button>More</Button>
    </a>
  </section>
</template>
<script setup>
import {defineProps} from 'vue'
import Button from "@/components/buttons/Button.vue";
const props = defineProps({
  shortDescription: {
    type: String,
    required: true,
  }
})
</script>


<style scoped>

</style>