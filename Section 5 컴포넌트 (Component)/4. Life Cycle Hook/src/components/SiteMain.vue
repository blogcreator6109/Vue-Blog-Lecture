<template>
  <main>
    메인
    <Menu />
    <Search />
  </main>
</template>

<script setup>
import Menu from "./main/Menu.vue";
import Search from "./main/Search.vue";
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

console.log("SiteMain: Setup");

onBeforeMount(() => {
  console.log("SiteMain: onBeforeMount");
});
onMounted(() => {
  console.log("SiteMain: onMounted");
});
onBeforeUpdate(() => {
  console.log("SiteMain: onBeforeUpdate");
});
onUpdated(() => {
  console.log("SiteMain: onUpdated");
});
onBeforeUnmount(() => {
  console.log("SiteMain: onBeforeUnmount");
});
onUnmounted(() => {
  console.log("SiteMain: onUnmounted");
});
</script>
