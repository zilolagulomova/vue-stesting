<template >
  <header :class="headerClasses">
    <div class="container py-6 flex justify-between items-center">
      <router-link :to="{ name: 'home' }">
      <Logo />
      </router-link>
      <div class="flex items-center gap-4">
      <ul class="flex items-center gap-4">
        <li class="font-proxima font-semibold hover:opacity-60 transition-all	duration-300" v-for="menu in headerMenu" :key="menu">
          <router-link :to="menu.slug">{{menu.title}}</router-link>
        </li>
      </ul>
        <div>
          <div class="font-proxima font-semibold hover:opacity-60 transition-all cursor-pointer	duration-300">
            English
          </div>
        </div>
      </div>
      <Button class="font-semibold py-2 px-16 " variant="primary">
        Sign in
      </Button>
    </div>
  </header>
</template>
<script setup>
import {useStore} from "vuex";
import {computed, ref, onMounted, onUnmounted} from 'vue'
import {RouterLink} from "vue-router";
import Logo from "../common/Logo.vue";
import Button from "@/components/buttons/Button.vue";

const headerClasses = ref('fixed w-full top-0 left-0 bg-transparent transition-colors duration-300 bg-transparent');
const store = useStore()
const headerMenu = computed(() => store.state.headerMenu)

const handleScroll = () => {
  if (window.scrollY > 10) {
    headerClasses.value = 'fixed w-full top-0 left-0 bg-white shadow-md transition-colors duration-500';
  } else if (window.scrollY < 10) {
    headerClasses.value = 'fixed w-full top-0 left-0  transition-colors duration-300 bg-transparent';
  } else {
    headerClasses.value = 'fixed w-full top-0 left-0 transition-colors duration-300 bg-transparent';
  }
};


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style >
</style>