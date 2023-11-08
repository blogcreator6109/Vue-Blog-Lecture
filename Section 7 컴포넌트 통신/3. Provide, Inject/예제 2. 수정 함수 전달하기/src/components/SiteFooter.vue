<template>
  <footer @click="addCounter">
    {{ counter }}
  </footer>
</template>

<script setup>
import { inject } from "vue";
const { counter, addCounter } = inject("counter");
</script>
