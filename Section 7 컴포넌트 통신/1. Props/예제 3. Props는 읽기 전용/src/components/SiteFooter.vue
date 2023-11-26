<template>
  <footer>{{ test }}</footer>
</template>

<script setup>
const props = defineProps(["test"]);
props.test = "bad";
// props.test.a 객체나 배열의 내부를 수정하지 마세요.
// 대신 ref(props.test.a)로 새로 만들어서 사용하거나
// computed(() => props.test.a + "bye") 같이 이 값을 기반으로 새로운
// 값을 만들어서 사용하세요.
</script>
