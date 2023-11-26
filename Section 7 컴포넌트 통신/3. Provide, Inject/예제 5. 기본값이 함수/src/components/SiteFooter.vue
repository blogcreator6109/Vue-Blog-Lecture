<template>
  <footer>{{ num }}</footer>
</template>

<script setup>
import { inject } from "vue";
const num = inject(
  "lilpa",
  () => {
    return "Hello" + " my" + " life";
  },
  true // false
);
</script>
