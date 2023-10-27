<template>
  <SiteHeader />
  <button @click="counter++">{{ counter }}</button>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import { ref, onUpdated } from "vue";
const counter = ref(0);

onUpdated(() => {
  const button = document.querySelector("button");
  button.innerText = counter.value + "입니다!";
});
</script>
