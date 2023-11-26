<template>
  <SiteHeader @change-category="changeCategory" />
  <SiteMain
    @change-id="name = 'Post'"
    :name="name"
    :category="category"
  />
  <SiteFooter />
  <div class="my-loader" v-show="loading">
    <Loading />
  </div>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import Loading from "@/components/Loading.vue";
import { onMounted, ref, provide } from "vue";

const counter = ref(0);
const addCounter = function () {
  counter.value += 1;
  if (counter.value > 5) {
    counter.value = 5;
  }
};
provide("counter", { counter, addCounter });

const loading = ref(true);

const name = ref("List");
const category = ref("");
const changeCategory = function (newCate) {
  name.value = "List";
  category.value = newCate;
};

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<style>
.my-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
