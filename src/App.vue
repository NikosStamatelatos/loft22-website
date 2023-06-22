<template>
  <div>
    <the-header></the-header>
    <home-page></home-page>
    <footer-page></footer-page>
  </div>
</template>

<script>
import TheHeader from "./layouts/TheHeader.vue";
import HomePage from "./components/HomePage.vue";
import FooterPage from "./components/FooterPage.vue";

export default {
  components: {
    TheHeader,
    HomePage,
    FooterPage,
  },
};
</script>

<style>
@import "./assets/font-awesome.min.css";
@import "./assets/slicknav_dark.css";

@import "./assets/style.css";
</style>
