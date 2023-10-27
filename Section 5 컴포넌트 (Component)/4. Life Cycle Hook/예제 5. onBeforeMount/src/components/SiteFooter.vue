<template>
  <footer>푸터</footer>
</template>

<script setup>
import { onBeforeUnmount } from "vue";

onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
</script>
