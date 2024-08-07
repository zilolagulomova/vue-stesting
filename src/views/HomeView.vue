<template>
  <main class="bg-[url('../src/assets/images/bg.jpg')] bg-center bg-cover pt-32">
    <div class="container">
      <pre>{{registration}}</pre>
    </div>
  </main>
</template>

<script setup>
import {createStore} from 'vuex'
import {computed, onMounted} from 'vue'

const store = createStore()
const registration = computed( () => store.getters.registration)
const statistics = computed( () => store.getters.statistics)
const research = computed( () => store.getters.research)
const shortDescription = computed( () => store.getters.shortDescription)
const mainVideo = computed( () => store.getters.mainVideo)
 onMounted(() => {
   store.dispatch('getIndex')
 })

</script>

<style></style>
