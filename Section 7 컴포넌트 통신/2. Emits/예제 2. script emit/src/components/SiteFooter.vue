<template>
  <footer @click="onclick">푸터</footer>
</template>

<script>
export default {
  emits: ["sayHi"],
  setup(props, context) {
    const onclick = function () {
      context.emit("sayHi");
    };
    return { onclick };
  },
};
</script>
