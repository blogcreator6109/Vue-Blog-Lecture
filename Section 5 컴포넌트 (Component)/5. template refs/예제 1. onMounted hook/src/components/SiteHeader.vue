<template>
  <header>
    <img src="@/assets/logo.jpg" />
    <input ref="search" />
    <nav>
      <a v-for="item of menu" :key="item">
        {{ item }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const search = ref(null);
console.log("Setup", search.value);

onMounted(() => {
  console.log("onMounted", search.value);
});

const menu = ["HTML", "CSS", "Javascript"];
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

nav {
  margin-top: 20px;
  background-color: #333;
  color: white;
  width: 80%;
  padding: 5px 10px;
  border-radius: 5px;
}

a {
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>
