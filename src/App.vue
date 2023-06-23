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
@import "./styles/font-awesome.min.css";
@import "./styles/slicknav_dark.css";

@import "./styles/style.css";
</style>
