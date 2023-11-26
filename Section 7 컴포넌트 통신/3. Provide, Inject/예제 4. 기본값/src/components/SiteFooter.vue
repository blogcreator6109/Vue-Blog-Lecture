<template>
  <footer>{{ num }}</footer>
</template>

<script setup>
import { inject } from "vue";
const num = inject("lilpa", 700);
</script>
