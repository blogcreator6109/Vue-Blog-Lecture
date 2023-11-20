<template>
  <button v-html="html"></button>
</template>

<script setup>
defineProps(["html"]);
</script>
