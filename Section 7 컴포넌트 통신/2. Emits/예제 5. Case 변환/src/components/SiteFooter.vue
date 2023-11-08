<template>
  <footer @click="onclick">푸터</footer>
</template>

<script setup>
const emit = defineEmits(["sayHi"]);
const onclick = function () {
  emit("sayHi", 100, "hi");
};
</script>
