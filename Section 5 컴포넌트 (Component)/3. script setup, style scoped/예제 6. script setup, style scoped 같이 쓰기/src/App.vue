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
  inheritAttrs: false, // 3.3 버전부터는 
                       // defineOptions({ inheritAttrs: false })
                       // 로 대체 가능
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
