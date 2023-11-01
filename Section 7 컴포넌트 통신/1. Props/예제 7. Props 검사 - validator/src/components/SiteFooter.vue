<template>
  <footer>{{ props.test }}</footer>
</template>

<script setup>
const props = defineProps({
  test: {
    type: Number,
    validator: function (value) {
      return value < 5;
    },
  },
});
</script>
