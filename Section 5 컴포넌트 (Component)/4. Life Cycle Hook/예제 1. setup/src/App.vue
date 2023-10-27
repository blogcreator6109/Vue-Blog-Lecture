<template>
  <div></div>
</template>

<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";

onBeforeMount(() => { console.log("onBeforeMount") });
onMounted(() => { console.log("onMounted")} );
onBeforeUpdate(() => { console.log("onBeforeUpdate") });
onUpdated(() => { console.log("onUpdated")} );
onBeforeUnmount(() => { console.log("onBeforeUnmount") });
onUnmounted(() => { console.log("onUnmounted") });
</script>