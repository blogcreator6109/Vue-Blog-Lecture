<template>
  <input ref="search" />
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const search = ref(null);

    onMounted(() => {
      search.value.focus();
    });
    return { search };
  },
};
</script>
