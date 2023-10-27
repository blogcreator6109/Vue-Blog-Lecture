<template>
  <header>
    <img src="@/assets/logo.jpg" />
    <nav>
      <a v-for="item of menu" :key="item">
        {{ item }}
      </a>
    </nav>
  </header>
</template>

<script setup>
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
