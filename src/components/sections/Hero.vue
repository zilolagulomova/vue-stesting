<template>
  <section class="bg-[url('../src/assets/images/bg.jpg')] bg-center bg-cover pt-44">
    <div class="container flex items-center justify-end gap-5">
      <div class="flex flex-col center gap-6">
      <p class="relative">
        <span class="text-[51px] text-[#161c27] block font-bold w-full max-w-[355px] z-10 relative">
          {{ registration.title }}
        </span>
        <img class="absolute top-1 left-[85px] w-[388px]" src="../../assets/images/vector.png" alt="">
      </p>
      <p class="w-full max-w-[482px] text-[#161c27] text-lg ">{{ strippedDescription }}</p>
      <a :href="registration.link">
      <Button class="font-semibold py-3 px-[59px]" variant="secondary">
        Video tutorial
      </Button>
      </a>

      </div>
      <div class="pr-5">
        <img class="w-[396px]" src="../../assets/images/heroperson.png" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, defineProps } from "vue";
import Button from "@/components/buttons/Button.vue";

const props = defineProps({
  registration: {
    type: Object,
    required: true,
  }
})
const strippedDescription = computed(() => {
  if (props.registration.description) {
    return props.registration.description.replace(/<\/?p>/g, '');
  }
  return '';
});
</script>

<style scoped>
</style>
