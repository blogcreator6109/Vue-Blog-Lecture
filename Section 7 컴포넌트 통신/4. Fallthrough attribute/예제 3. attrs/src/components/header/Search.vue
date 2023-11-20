<template>
  <span>Search</span>
  <input v-bind="$attrs" />
</template>

<!-- <script>
export default {
  setup(props, context) {
    console.log(context.attrs);
    return { attrs: context.attrs };
  },
};
</script> -->

<script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>
