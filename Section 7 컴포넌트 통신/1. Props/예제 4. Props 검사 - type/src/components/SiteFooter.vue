<template>
  <footer>{{ props.test }}</footer>
</template>

<script setup>
const props = defineProps({
  test: Boolean,
});
</script>
