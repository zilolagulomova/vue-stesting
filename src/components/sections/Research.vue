<template>
  <section class="bg-[#f8fbff] py-16">
    <div class="container">
      <div class="pb-16 flex items-center justify-between">
        <div class="relative">
          <h3 class="max-w-[143px] text-[32px] relative z-[9] font-bold">
            Last Researches
          </h3>
          <img class="absolute bottom-0" src="../../assets/images/vector2.png" alt="">
        </div>
        <a href="https://stesting.uz/en/news">
          <Button>All researches</Button>
        </a>
      </div>
      <ul class=" mb-8 gap-8 flex">
        <li v-for="card in research" :key="card.id" class="bg-white shadow-[0_8px_12px_rgba(22,28,39,.04)] relative w-[226px] hover:shadow-2xl  duration-500  h-[310px]">
          <router-link :to="`/research/${card.id}`">
          <img class="w-full h-[160px]" :src="card.image_url" alt="">
          <div class="flex items-center absolute text-white top-[105px] w-full pt-2 pb-2 justify-center gap-7 backdrop-blur-md ">
            <p>
              <img class="mb-1.5 w-5" src="../../assets/images/svg/eye.svg" /> {{card.views}}
            </p>
            <p>
              <img class="mb-1 w-4" src="../../assets/images/svg/date.svg" /> {{card.date}}
            </p>
          </div>
          <h4 class="mt-6 pl-3 font-bold line-clamp-2">{{card.title}}</h4>
          <p class="px-3 mt-1 text-sm text-[#73777d] w-58 line-clamp-3">{{card.description}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import {  defineProps } from "vue";
import Button from "@/components/buttons/Button.vue";

const props = defineProps({
  research: {
    type: Object,
    required: true,
  }
})
</script>


<style scoped>

</style>