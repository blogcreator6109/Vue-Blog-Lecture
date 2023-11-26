<template>
  <div class="search">
    <img src="@/assets/search.svg" />

    <input
      placeholder="Search"
      :value="keyword"
      @input="
        $emit('update:keyword', $event.target.value)
      "
    />
  </div>

  <div class="search">
    <img src="@/assets/search.svg" />

    <input
      placeholder="Tag"
      :value="tag"
      @input="$emit('update:tag', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps(["keyword", "tag"]);
defineEmits(["update:keyword", "update:tag"]);
</script>

<style scoped>
.search {
  background-color: #333;
  position: relative;
  margin-top: 10px;
  padding: 1px 3px;
}

.search img {
  position: absolute;
  height: 50%;
  top: 50%;
  transform: translate(7px, -50%);
}

input {
  border: 0;
  padding-left: 25px;
}
</style>
