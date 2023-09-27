<template>
  <h2>{{ text }}</h2>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      text: ref("Hello"),
    };
  },
};
</script>

<style>
h2 {
  color: red;
}
</style>
