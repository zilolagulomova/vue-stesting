<template>
  <section
      class="bg-[#f8fbff] w-full max-w-[700px] pb-16 mx-auto mt-16 flex  justify-center gap-10 items-start">
    <div class="bg-white border border-gray-100 text-center py-4 -mt-10 px-20 shadow-[0_8px_12px_rgba(22,28,39,.04)]">
      <p class="pb-3 text-[#4f95ff] font-semibold text-5xl">{{statistics.participants}}</p>
      <p class="text-xl font-medium">Students</p>
    </div>
    <div class="bg-white border border-gray-100 text-center py-4 -mt-10 px-20 shadow-[0_8px_12px_rgba(22,28,39,.04)]">
      <p class="pb-3 text-[#4f95ff] font-semibold text-5xl">{{statistics.registered}}</p>
      <p class="text-xl font-medium">Schools</p>
    </div>
    <div class="bg-white border border-gray-100 text-center py-4 -mt-10 px-20 shadow-[0_8px_12px_rgba(22,28,39,.04)]">
      <p class="pb-3 text-[#4f95ff] font-semibold text-5xl">{{statistics.tests}}</p>
      <p class="text-xl font-medium">Assignments</p>
    </div>
  </section>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  statistics: {
    type: Object,
    required: true,
  }
})

</script>


<style scoped>

</style>