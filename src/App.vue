<template>
  <div>
    <base-banner title="CalcMe"></base-banner>
    <calc-me></calc-me>
  </div>
</template>

<script>
import BaseBanner from "./layouts/BaseBanner.vue";
import CalcMe from "./components/CalcMe.vue";

export default {
  components: {
    BaseBanner,
    CalcMe,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  list-style: none;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  text-align: center;
  background-color: rgb(34, 34, 34);
}
</style>
