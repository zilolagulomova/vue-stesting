<template>
  <section @click="handleOutsideClick">
    <div class="container">
      <div class="shadow-xl  px-5 text-left mt-32 py-8 mb-10 bg-[#3b82f680]/5">
        <h1 class="text-[2.125rem] text-2xl mb-2 font-bold">Publications</h1>
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
              :class="['absolute option bg-white top-12 rounded text-sm text-black/60 border border-black/10 shadow right-0 w-full max-w-[262px]', { 'show': isDropdownVisible, 'hide': !isDropdownVisible }]">
            <li class="hover:bg-[#f5f7fa] cursor-pointer py-2 pl-4" v-for="category in getCategories"
                @click="itemClicked(category)"
                :key="category.id">
              {{ category.title }}
            </li>
          </ul>
        </div>
      </div>
      <ul>
        <li v-for="item in getPublication.results"
            class="flex items-center p-6 mb-10 shadow-lg duration-500 gap-10">
          <img :src="item.image_url" width="200" height="300" alt="">
          <div class="flex flex-col items-start">
            <h4 class="font-bold text-2xl mb-3">{{ item.title }}</h4>
            <div>{{ getStrippedDescription(item.description) }}</div>
            <a :href="item.file_url" target="_blank" class="mt-10">
              <Button class="flex items-center gap-2">
                <i class="icon-download font-semibold"></i>
                <p>Download</p>
              </Button>
            </a>
          </div>
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
const selectedCategoryTitle = ref('All directions');
const isTextBlue = ref(false);
const selectedCategorySlug = ref(null);

const itemClicked = (category) => {
  selectedCategoryTitle.value = category.title;
  isTextBlue.value = true
  isDropdownVisible.value = false
  isRotated.value = false
  selectedCategorySlug.value = category.slug;
  fetchPublication(1);
}
const fetchPublication = (area = null) => {
  store.dispatch('getPublication', { area, categorySlug: selectedCategorySlug.value });
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
const getPublication = computed(() => store.getters.publication);
const getCategories = computed(() => store.getters.category);
const getFilteredPublications = computed(() => store.getters.filteredPublications);
onMounted(() => {
  store.dispatch('getCategory');
  fetchPublication()
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