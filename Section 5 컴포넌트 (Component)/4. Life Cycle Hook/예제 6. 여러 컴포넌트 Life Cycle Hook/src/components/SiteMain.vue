<template>
  <main>
    <div>메인</div>
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

console.log("Main: Setup");

onBeforeMount(() => {
  console.log("Main: onBeforeMount");
});

onMounted(() => {
  console.log("Main: onMounted");
});

onBeforeUpdate(() => {
  console.log("Main: onBeforeUpdate");
});

onUpdated(() => {
  console.log("Main: onUpdated");
});

onBeforeUnmount(() => {
  console.log("Main: onBeforeUnmount");
});

onUnmounted(() => {
  console.log("Main: onUnmounted");
});
</script>
