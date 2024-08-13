<template>
  <section class="container mb-6" @click="handleOutsideClick">
    <div class="shadow-xl px-5 text-left mt-32 py-8 mb-10 bg-[#3b82f680]/5">
      <h1 class="text-[2.125rem] text-2xl mb-2 font-bold">Video tutorials</h1>
      <div class="flex items-center justify-between mt-5 relative">
        <div class="flex items-center gap-4">
          <button
              class="bg-[#e1edff] student py-2 px-4 text-[#4f95ff] font-semibold hover:text-black duration-300"
              @click="fetchCourses(1)">
            For Students
          </button>
          <button
              class="bg-[#e1edff] teacher py-2 px-4 text-[#4f95ff] font-semibold hover:text-black duration-300"
              @click="fetchCourses(2)">
            For Teachers
          </button>
        </div>
        <div
            @click.stop="toggleDropdown"
            class="select border flex items-center cursor-pointer justify-between px-3 py-2 border-[#3b82f680] hover:border-black/20 duration-300 bg-white w-full max-w-[262px]">
          <div :class="['font-semibold text-sm', isTextBlue ? 'text-blue-500' : 'text-zinc-500']">
            {{ selectedCategoryTitle }}
          </div>
          <i :class="['icon-arrow', 'text-blue-500', 'text-[6px]', 'duration-200', { 'rotate-180': isRotated }]"></i>
        </div>
        <ul
            :class="['absolute z-[99] option bg-white top-12 rounded text-sm text-black/60 border border-black/10 shadow right-0 w-full max-w-[262px]', { 'show': isDropdownVisible, 'hide': !isDropdownVisible }]">
          <li class="hover:bg-[#f5f7fa] cursor-pointer py-2 pl-4" v-for="category in videoCourseCategory"
              @click="itemClicked(category)"
              :key="category.id">
            {{ category.title }}
          </li>
        </ul>
      </div>
    </div>
    <ul class="mb-12 list flex flex-wrap justify-between gap-y-10">
      <li v-for="item in videoCourses.results"
          class="flex flex-col justify-between cursor-pointer card card-video w-full relative max-w-[300px] py-3 h-[340px] px-6 shadow-lg hover:shadow-xl duration-500 ">
        <div class="bg-gradient-to-b from-[#73777e] w-full h-[50%] to-transparent absolute left-0 top-0"></div>
        <div class="bg-[#73777e] px-3 py-1.5 absolute left-4 top-3 text-white font-medium">{{ item.direction }}</div>
        <img src="https://stesting.uz/_nuxt/img/videoCover.e3ce9ad.jpg" alt="">
        <div class="flex flex-col items-start">
          <h4 class="font-bold mb-3">{{ item.title }}</h4>
          <div class="flex items-center gap-5 pt-6">
            <div class="flex items-center gap-2">
              <i class="icon-eye text-xl text-zinc-400"></i>
              <p>{{ item.views }}</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="icon-date text-xl text-zinc-400"></i>
              <p>{{ item.date }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<script setup>
import {ref, onMounted, computed} from 'vue';
import {useStore} from "vuex";
import axiosUrl from "@/axiosUrl.js";

const store = useStore();
const isRotated = ref(false);
const isDropdownVisible = ref(false);
const selectedCategoryTitle = ref('Select');
const isTextBlue = ref(false);
const selectedCategorySlug = ref(null);


const handleOutsideClick = () => {
  if (isDropdownVisible.value) {
    isDropdownVisible.value = false;
    isRotated.value = false;
  }
};
const toggleDropdown = () => {
  isRotated.value = !isRotated.value;
  isDropdownVisible.value = !isDropdownVisible.value;
}
const itemClicked = (category) => {
  selectedCategoryTitle.value = category.title;
  isTextBlue.value = true;
  isDropdownVisible.value = false;
  isRotated.value = false;
  fetchVideoCourses(1, null, category.id);
}


const fetchVideoCourses = (page = 1, courses = null, direction = null) => {
  let url = `/videocourse/?page=${page}`;
  if (courses) url += `&courses=${courses}`;
  if (direction) url += `&direction=${direction}`;
  store.dispatch('fetchVideoCourses', url);
}

const fetchCourses = (courseType) => {
  fetchVideoCourses(1, courseType);
};
const videoCourses = computed(() => store.state.videoCourses);
const videoCourseCategory = computed(() => store.getters.videoCourseCategory);
console.log('Video Courses:', videoCourses.value);
console.log('Video Course Categories:', videoCourseCategory.value);


onMounted(async () => {
  fetchVideoCourses();
  await store.dispatch('getVideoCourseCategory');
});
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