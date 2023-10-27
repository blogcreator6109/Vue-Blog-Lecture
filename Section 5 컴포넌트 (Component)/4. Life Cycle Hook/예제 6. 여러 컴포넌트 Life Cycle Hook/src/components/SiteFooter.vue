<template>
  <footer>푸터</footer>
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

console.log("SiteFooter: Setup");

onBeforeMount(() => {
  console.log("SiteFooter: onBeforeMount");
});

onMounted(() => {
  console.log("SiteFooter: onMounted");
});

onBeforeUpdate(() => {
  console.log("SiteFooter: onBeforeUpdate");
});

onUpdated(() => {
  console.log("SiteFooter: onUpdated");
});

onBeforeUnmount(() => {
  console.log("SiteFooter: onBeforeUnmount");
});

onUnmounted(() => {
  console.log("SiteFooter: onUnmounted");
});
</script>
