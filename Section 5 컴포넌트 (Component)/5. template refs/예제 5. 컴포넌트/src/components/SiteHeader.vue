<template>
  <header>
    <img src="@/assets/logo.jpg" />
    <Search ref="search" />
    <nav>
      <a
        v-for="item of menu"
        :key="item"
        ref="menuRef"
      >
        {{ item }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import Search from "./header/Search.vue";
import { ref, onMounted } from "vue";

const search = ref(null);

const click = (el) => {
  console.log(el);
  el.onclick = function () {
    console.log(el.innerText);
  };
};

onMounted(() => {
  console.log(search.value);
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
