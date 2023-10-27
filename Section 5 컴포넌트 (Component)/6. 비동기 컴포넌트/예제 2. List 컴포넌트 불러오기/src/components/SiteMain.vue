<template>
  <main>
    <button @click="show = true">List 부르기</button>
    <List v-if="show" />
  </main>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const show = ref(false);

const List = defineAsyncComponent(() =>
  import("@/components/main/List.vue")
);
</script>
