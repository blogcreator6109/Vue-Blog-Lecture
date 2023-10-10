<template>
  <header>
    <img src="@/assets/logo.jpg" />
    <nav>
      <a href="" v-for="item of menu" :key="item" class="menu">
        {{ item }}
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    return {
      menu: ["HTML", "CSS", "Javascript"],
    };
  },
};
</script>

<style>
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
  width: 80%;
  background-color: #333;
  padding: 5px 10px;
  border-radius: 5px;
}

a {
  margin-right: 10px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}
</style>
