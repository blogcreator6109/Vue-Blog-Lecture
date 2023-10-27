<template>
  <main>
    <component :is="List" />
  </main>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const List = defineAsyncComponent(() =>
  import("@/components/main/List.vue")
);
</script>
