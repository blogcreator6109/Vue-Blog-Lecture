<template>
  <footer>{{ props.test }}</footer>
</template>

<script setup>
const props = defineProps({
  test: {
    type: Number,
    required: true,
  },
});
</script>
