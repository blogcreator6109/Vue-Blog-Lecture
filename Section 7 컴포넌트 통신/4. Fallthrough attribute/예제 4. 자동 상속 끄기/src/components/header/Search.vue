<template>
  <div class="search">
    <span>Search</span>
    <input v-bind="$attrs" />
  </div>
</template>

<!-- <script>
export default {
  setup(props, context) {
    console.log(context.attrs);
    return { attrs: context.attrs };
  },
  inheritAttrs: false,
};
</script> -->

<script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();
defineOptions({
  inheritAttrs: false,
});
</script>
