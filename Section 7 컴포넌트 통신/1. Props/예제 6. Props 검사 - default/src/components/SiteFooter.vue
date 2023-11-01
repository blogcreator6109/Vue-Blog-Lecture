<template>
  <footer>{{ props.test }}</footer>
  <footer>{{ props.obj }}</footer>
  <footer>{{ props.arr }}</footer>
  <footer>{{ props.func }}</footer>
</template>

<script setup>
const props = defineProps({
  test: {
    type: Number,
    default: 100,
  },
  obj: {
    type: Object,
    default: function (rawProps) {
      return {
        sum: rawProps.test + rawProps.test,
      };
    },
  },
  arr: {
    type: Array,
    default: function (rawProps) {
      return [rawProps.test + rawProps.test];
    },
  },
  func: {
    type: Function,
    default: function () {
      console.log("함수입니다.");
    },
  },
});
</script>
