<template>
  <main>
    <!-- <component :is="comp[name]" /> -->
    <List
      v-if="name == 'List'"
      @change-id="
        (newId) => {
          id = newId;
          $emit('changeId');
        }
      "
      :category="category"
    />
    <Post v-if="name == 'Post'" :block-id="id" />
  </main>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

defineProps({
  category: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    validator(value) {
      return ["List", "Post"].includes(value);
    },
  },
});

const id = ref("91caab9a9bc945309802175ab9f7d32d");

const List = defineAsyncComponent(() =>
  import("@/components/main/List.vue")
);

const Post = defineAsyncComponent(() =>
  import("@/components/main/Post.vue")
);

const comp = { List, Post };
</script>

<style>
main {
  width: 80%;
  margin: 10px auto;
}
</style>
