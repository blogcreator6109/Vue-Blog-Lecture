<template>
  <SiteHeader />
  <button @click="counter++">{{ counter }}</button>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import { ref, onUpdated, onBeforeUpdate } from "vue";
const counter = ref(0);

onBeforeUpdate(() => {
  console.log("onBeforeUpdate", counter.value);
  counter.value++;
});

onUpdated(() => {
  const button = document.querySelector("button");
  button.innerText = counter.value + "입니다!";
  console.log('onUpdated", counter.value');
});
</script>
