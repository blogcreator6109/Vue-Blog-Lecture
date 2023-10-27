<template>
  <SiteHeader />
  <SiteFooter v-if="show" />
  <button @click="show = !show">{{ show }}</button>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";

import { ref } from "vue";
const show = ref(true);
</script>
