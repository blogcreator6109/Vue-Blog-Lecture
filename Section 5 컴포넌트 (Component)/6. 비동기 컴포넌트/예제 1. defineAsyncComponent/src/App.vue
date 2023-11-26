<template>
  <AsyncComp />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() => {
  return import("@/components/Test.vue");
});

// script setup이 아니면 components를 사용해야한다.
// export default {
//   components: { AsyncComp },
// };
</script>
