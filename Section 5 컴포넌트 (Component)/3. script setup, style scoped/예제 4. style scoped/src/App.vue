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
