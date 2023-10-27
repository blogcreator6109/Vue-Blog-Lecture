<template>
  <SiteHeader />
  <h2>안녕하세요</h2>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import { onBeforeMount, onMounted } from "vue";

console.log("Setup: ", document.querySelector("h2"));

onBeforeMount(function () {
  console.log("Before mount", document.querySelector('h2'));
});

onMounted(function () { 
  console.log("Mounted", document.querySelector("h2"));
})
</script>
