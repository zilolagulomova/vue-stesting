<template>
  <section class="mb-20">
    <div class="container pt-20">
      <div
          class="bg-[url('../src/assets/images/instruction_img1.jpg')] text-center bg-no-repeat bg-cover bg-center w-full max-w-[597px] mx-auto py-10">
        <h1 class="text-[2.125rem] text-2xl mb-2 font-semibold">Instructions</h1>
        <p class="text-lg text-black/60">Platform user's guide</p>
      </div>
      <div class="shadow-[0_8px_12px_rgba(22,28,39,.04)]  px-8 pb-8 tabs container w-full max-w-[1060px] flex items-start justify-between">
        <ul class="pl-5 pt-5 text-center w-[250px]">
          <li v-for="item in getInstructions"
              :key="item.id"
              class="border-b cursor-pointer text-start text-lg border-black/20 hover:opacity-50 duration-500 mt-3 font-semibold pb-3"
              :class="{'text-blue-500': activeTab && activeTab.id === item.id}"
              @click="selectedTab(item)">
            {{ item.title }}
          </li>
        </ul>
        <div class="pt-5">
          <div v-if="activeTab">
            <div v-html="generateVideoTag(activeTab.text)"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import {ref, computed, onMounted} from 'vue'
import {useStore} from "vuex";

const store = useStore();
const getInstructions = computed(() => store.getters.instructions);

const activeTab = ref(null)

onMounted(async () => {
  await store.dispatch('getInstructions');
  if (getInstructions.value.length > 0) {
    activeTab.value = getInstructions.value[0]
  }
})

const selectedTab = (item) => {
  activeTab.value = item
}
const generateVideoTag = (text) => {
  return text.replace(/<oembed url="([^"]+)"><\/oembed>/g, (match, url) => {
    const embedUrl = url.replace('watch?v=', 'embed/');
    return `<iframe width="677" height="600" src="${embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  });
};
</script>


<style scoped>

</style> 