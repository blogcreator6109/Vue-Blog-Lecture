<template>
  <input ref="search" />
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup(props, context) {
    const search = ref(null);

    onMounted(() => {
      search.value.focus();
    });

    context.expose({ search });
    return { search };
  },
};
</script>
