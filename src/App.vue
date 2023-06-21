<template>
  <div>
    <the-header></the-header>
    <home-page></home-page>
  </div>
</template>

<script>
import TheHeader from "./layouts/TheHeader.vue";
import HomePage from "./components/HomePage.vue";

export default {
  components: {
    TheHeader,
    HomePage,
  },
};
</script>

<style>
@import "./assets/font-awesome.min.css";
@import "./assets/slicknav_dark.css";

@import "./assets/style.css";
</style>
