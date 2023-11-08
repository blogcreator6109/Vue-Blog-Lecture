<template>
  <footer @click="onclick">푸터</footer>
</template>

<script setup>
const emit = defineEmits({
  sayHi: function (num) {
    return num > 1000;
  },
});
const onclick = function () {
  emit("sayHi", 10000, "hi");
};
</script>
