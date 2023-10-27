<template>
  <SiteHeader />
  <SiteMain />
  <div class="my-loader" v-show="loading">
    <Loading />
  </div>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import Loading from "@/components/Loading.vue";
import { onMounted, ref } from "vue";

const loading = ref(true);

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
