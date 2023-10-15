<template>
  <SiteHeader />
  <button @click="counter++">{{ counter }}</button>
  <nav>
    <a>HTML</a>
    <a>CSS</a>
    <a>Javascript</a>
  </nav>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
</script>
