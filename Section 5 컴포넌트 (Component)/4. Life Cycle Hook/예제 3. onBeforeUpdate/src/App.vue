<template>
  <SiteHeader />
  <button @click="counter++">{{ counter }}</button>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import { ref, onBeforeUpdate } from "vue";
const counter = ref(0);

onBeforeUpdate(() => {
  if (counter.value > 5) {
    alert("5보다 커요!!");
    counter.value = 5;
  }
});
</script>
