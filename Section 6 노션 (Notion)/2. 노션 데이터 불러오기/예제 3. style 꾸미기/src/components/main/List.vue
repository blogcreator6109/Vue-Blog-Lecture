<template>
  <ul>
    <li v-for="post of list" :key="post.id">
      <span>{{ post.title }}</span>
      <span>{{ post.category }}</span>
    </li>
  </ul>
</template>

<script setup>
import { getPageTable } from "vue-notion";
import { ref } from "vue";

const list = ref([]);

getPageTable("a0521cd6f36a4c73b9af3b35aa00c4cc").then(
  (value) => {
    list.value = value;
  }
);
</script>
