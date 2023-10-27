<template>
  <AsyncComp />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() => {
  return import("@/components/main/List.vue");
});

// export default {
//   components: { AsyncComp },
// };
</script>
