<template>
  <section @click="handleOutsideClick">
    <div class="container">
      <div class="shadow-xl  px-5 text-left mt-32 py-8 mb-10 bg-[#3b82f680]/5">
        <h1 class="text-[2.125rem] text-2xl mb-2 font-bold">Researchers</h1>
        <div class="flex items-center justify-between mt-5 relative">
          <div class="flex items-center gap-2">
            <button
                class="bg-[#e1edff] international py-2.5 px-16 text-[#4f95ff] font-semibold hover:text-black duration-300"
                @click="fetchPublication(1)"
            >
              International
            </button>
            <button
                class="bg-[#e1edff] national py-2.5 px-16 text-[#4f95ff] font-semibold hover:text-black duration-300"
                @click="fetchPublication(2)"
            >
              National
            </button>
          </div>
          <div
              class="border flex items-center cursor-pointer justify-between px-3 py-2 border-[#3b82f680] hover:border-black/20 duration-300 bg-white w-full max-w-[262px]"
              @click.stop="toggleDropdown">
            <div :class="['font-semibold', 'text-sm', 'text-zinc-500', { 'text-blue-500': isTextBlue }]">
              {{ selectedCategoryTitle }}
            </div>
            <i :class="['icon-arrow', 'text-blue-500', 'text-[6px]', 'duration-200', { 'rotate-180': isRotated }]"></i>
          </div>
          <ul
              :class="['absolute z-[99] option bg-white top-12 rounded text-sm text-black/60 border border-black/10 shadow right-0 w-full max-w-[262px]', { 'show': isDropdownVisible, 'hide': !isDropdownVisible }]">
            <li class="hover:bg-[#f5f7fa] cursor-pointer py-2 pl-4" v-for="category in getCategories"
                @click="itemClicked(category)"
                :key="category.id">
              {{ category.title }}
            </li>
          </ul>
        </div>
      </div>
      <ul class=" mb-8 gap-8 flex">
        <li v-for="card in getResearch" :key="card.id" class="bg-white shadow-[0_8px_12px_rgba(22,28,39,.04)] relative w-[226px] hover:shadow-2xl  duration-500  h-[310px]">
          <router-link :to="`/research/${card.id}`">
            <img class="w-full h-[160px]" :src="card.image_url" alt="">
            <div class="flex items-center absolute text-white top-[105px] w-full pt-2 pb-2 justify-center gap-7 backdrop-blur-md ">
              <p>
<!--                <img class="mb-1.5 w-5" src="../../assets/images/svg/eye.svg" /> {{card.views}}-->
              </p>
              <p>
<!--                <img class="mb-1 w-4" src="../../assets/images/svg/date.svg" /> {{card.date}}-->
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
import {ref, onMounted, computed} from 'vue';
import {useStore} from "vuex";
import Button from "@/components/buttons/Button.vue";

const store = useStore();
const isRotated = ref(false);
const isDropdownVisible = ref(false);
const selectedCategoryTitle = ref('Select');
const isTextBlue = ref(false);

const itemClicked = (category) => {
  selectedCategoryTitle.value = category.title;
  isTextBlue.value = true;
  isDropdownVisible.value = false;
  isRotated.value = false;
  fetchPublication(null);
}

const toggleDropdown = () => {
  isRotated.value = !isRotated.value;
  isDropdownVisible.value = !isDropdownVisible.value;
}

const handleOutsideClick = () => {
  if (isDropdownVisible.value) {
    isDropdownVisible.value = false;
    isRotated.value = false;
  }
};
const fetchPublication = (area) => {
  store.dispatch('getPublication', { area, categorySlug: selectedCategoryTitle.value });
}

const getCategories = computed(() => store.getters.researchCategory);
const getResearch = computed(() => store.getters.research);
onMounted(() => {
  store.dispatch('getResearchCategory');
});

const getStrippedDescription = (description) => {
  if (description) {
    return description.replace(/<\/?p>/g, '');
  }
  return '';
};

</script>


<style scoped>
.option {
  transform: translateY(-10px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  pointer-events: none;
}

.show {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.hide {
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
}
</style>