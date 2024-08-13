<template>
  <section class="mt-24">
    <div class="container">
    <div v-if="researchDetail" >
      <div class="bg-blue px-7 pt-10 pb-5 shadow-[0_8px_12px_rgba(22,28,39,.04)]">
        <h3 class="text-4xl font-medium">
          {{ researchDetail.title }}
        </h3>
        <div class="flex items-center gap-7 pt-3">
          <div class="flex items-center gap-2">
            <i class="icon-eye text-xl text-zinc-400"></i>
            <p>{{ researchDetail.views }}</p>
          </div>
          <div class="flex items-center gap-2">
            <i class="icon-date text-zinc-400"></i>
            <p>{{ researchDetail.date }}</p>
          </div>
        </div>
      </div>
      <div class="mt-12 mx-24">
        <img :src="researchDetail.image_url" alt="">
        <p class="mt-5">{{ cleanContent }}</p>
      </div>
      <ul class=" mt-20 gap-8 flex">
        <li v-for="card in researchDetail.related" :key="card.id"
            class="bg-white shadow-[0_8px_12px_rgba(22,28,39,.04)] relative w-[226px] hover:shadow-2xl  duration-500  h-[310px]">
          <router-link :to="`/research/${card.id}`">
            <img class="w-full h-[160px]" :src="card.image_url" alt="">
            <div
                class="flex items-center absolute text-white top-[105px] w-full pt-2 pb-2 justify-center gap-7 backdrop-blur-md ">
              <div class="flex items-center gap-2">
                <i class="icon-eye text-xl"></i>
                <p>{{ researchDetail.views }}</p>
              </div>
              <div class="flex items-center gap-2">
                <i class="icon-date"></i>
                <p>{{ researchDetail.date }}</p>
              </div>
            </div>
            <h4 class="mt-6 pl-3 font-bold line-clamp-2">{{ card.title }}</h4>
            <p class="px-3 mt-1 text-sm text-[#73777d] w-58 line-clamp-3">{{ card.description }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    </div>
  </section>
</template>

<script setup>
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted, watch} from "vue";

const store = useStore();
const route = useRoute();

const cleanContent = computed(() => {
  if (researchDetail.value.content) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(researchDetail.value.content, 'text/html');
    return doc.body.textContent || "";
  }
  return '';
});
const updateResearchDetail = () => {
  store.dispatch('getResearchDetail', route.params.id)
}
onMounted(() => {
  updateResearchDetail()
})
const researchDetail = computed(() => store.getters.researchDetail)
watch(() => route.params.id, () => {
  updateResearchDetail()
})
</script>


<style scoped>

</style>