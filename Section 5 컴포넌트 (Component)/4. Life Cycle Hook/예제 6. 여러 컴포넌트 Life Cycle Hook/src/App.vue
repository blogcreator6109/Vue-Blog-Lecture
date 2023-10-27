<template>
  <SiteMain />
  <SiteFooter v-if="show" />
  <button @click="app.unmount()">App Unmount</button>
  <button @click="show = !show">footer Unmount</button>
</template>

<script setup>
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";

import {
  ref,
  getCurrentInstance,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const show = ref(true);
const app = getCurrentInstance().appContext.app;

console.log("App: Setup");

onBeforeMount(() => {
  console.log("App: onBeforeMount");
});

onMounted(() => {
  console.log("App: onMounted");
});

onBeforeUpdate(() => {
  console.log("App: onBeforeUpdate");
});

onUpdated(() => {
  console.log("App: onUpdated");
});

onBeforeUnmount(() => {
  console.log("App: onBeforeUnmount");
});

onUnmounted(() => {
  console.log("App: onUnmounted");
});
</script>
