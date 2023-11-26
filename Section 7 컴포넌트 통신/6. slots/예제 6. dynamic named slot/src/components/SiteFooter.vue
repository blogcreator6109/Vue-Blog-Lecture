<template>
  <footer>
    <Button>
      <template
        v-for="slot of list"
        :key="slot"
        #[slot]
      >
        {{ slot }}
      </template>
    </Button>
  </footer>
</template>

<script setup>
import Button from "@/components/footer/Button.vue";
import { ref } from "vue";

const list = ref(["header", "default"]);
</script>
