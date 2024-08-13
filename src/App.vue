<template>
  <div class="">
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
</template>
<script setup>
import {onMounted} from "vue";
import {useStore} from "vuex";
import {RouterView} from "vue-router";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

const store = useStore();
onMounted(() => {
  store.dispatch('getMenuItems')
  store.dispatch('getIndex')
})


</script>
<style>
@import './assets/icomoon/style.css';
</style>
