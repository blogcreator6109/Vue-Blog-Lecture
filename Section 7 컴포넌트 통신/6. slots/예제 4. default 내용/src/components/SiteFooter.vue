<template>
  <footer>
    <Button v-for="item of list" :key="item">
      <h1>{{ item }}</h1>
    </Button>

    <Button></Button>
  </footer>
</template>

<script setup>
import Button from "@/components/footer/Button.vue";
</script>
