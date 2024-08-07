<template>
  <div class="">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
<script setup>
import {onMounted} from "vue";
import {useStore} from "vuex";
import {RouterView} from "vue-router";
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
const store = useStore();
onMounted(() => {
  store.dispatch('getMenuItems')

})


</script>
<style></style>
