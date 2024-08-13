<template>
  <main>
    <Hero :registration="registration" />
    <ShortDescription :shortDescription="shortDescription" />
    <Statistics :statistics="statistics" />
    <Research :research="research" />
    <MainVideo :mainVideo="mainVideo" />
  </main>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
import Hero from "@/components/sections/Hero.vue";
import ShortDescription from "@/components/sections/ShortDescription.vue";
import Statistics from "@/components/sections/Statistics.vue";
import Research from "@/components/sections/Research.vue";
import MainVideo from "@/components/sections/MainVideo.vue";
const store = useStore()
const registration = computed(() => store.getters.registration);
const statistics = computed( () => store.getters.statistics)
const research = computed( () => store.getters.research)
const shortDescription = computed( () => store.getters.shortDescription)
const mainVideo = computed( () => store.getters.mainVideo)

</script>

<style></style>
