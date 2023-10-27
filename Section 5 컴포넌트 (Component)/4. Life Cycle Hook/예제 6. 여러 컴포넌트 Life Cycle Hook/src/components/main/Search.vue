<template>
  <div>Search</div>
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

console.log("Search: Setup");

onBeforeMount(() => {
  console.log("Search: onBeforeMount");
});

onMounted(() => {
  console.log("Search: onMounted");
});

onBeforeUpdate(() => {
  console.log("Search: onBeforeUpdate");
});

onUpdated(() => {
  console.log("Search: onUpdated");
});

onBeforeUnmount(() => {
  console.log("Search: onBeforeUnmount");
});

onUnmounted(() => {
  console.log("Search: onUnmounted");
});
</script>
