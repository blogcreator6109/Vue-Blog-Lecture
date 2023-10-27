<template>
  <SiteHeader></SiteHeader>
  <button @click="counter++">{{ counter }}</button>
  <nav>
    <a>HTML</a>
    <a>CSS</a>
    <a>Javascript</a>
  </nav>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import { ref } from "vue";

const counter = ref(0);
</script>

<script>
export default {
  inheritAttrs: false, // 아직 script setup에는 구현되지 않은 것.
};
</script>

<style scoped>
a {
  background-color: red;
}
</style>

<style>
a {
  color: white;
}
</style>
