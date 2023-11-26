<template>
  <footer @click="content = '방송종료'">
    {{ content }}
  </footer>
</template>

<script setup>
import { inject } from "vue";
const content = inject("ine");
console.log(content);
</script>
