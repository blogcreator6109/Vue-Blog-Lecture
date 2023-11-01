<template>
  <main>
    <!-- <component :is="comp[name]" /> -->
    <List v-if="name == 'List'" />
    <Post v-if="name == 'Post'" :id="id" />
    <button @click="name = 'List'">List</button>
    <button @click="name = 'Post'">Post</button>
  </main>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

const name = ref("");

const id = "91caab9a9bc945309802175ab9f7d32d";

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
