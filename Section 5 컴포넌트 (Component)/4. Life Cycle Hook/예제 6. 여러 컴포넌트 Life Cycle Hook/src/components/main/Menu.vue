<template>
  <nav>메뉴</nav>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

console.log("Menu: Setup");

onBeforeMount(() => {
  console.log("Menu: onBeforeMount");
});

onMounted(() => {
  console.log("Menu: onMounted");
});

onBeforeUpdate(() => {
  console.log("Menu: onBeforeUpdate");
});

onUpdated(() => {
  console.log("Menu: onUpdated");
});

onBeforeUnmount(() => {
  console.log("Menu: onBeforeUnmount");
});

onUnmounted(() => {
  console.log("Menu: onUnmounted");
});
</script>
