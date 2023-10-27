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

<style scoped>
:global(a) {
  background-color: red;
}

/* :deep(a) {
  background-color: red;
} */

/* a 태그들에 menu class를 추가한 뒤 적용 */
/*
.menu {
  background-color: red;
}
*/
</style>
