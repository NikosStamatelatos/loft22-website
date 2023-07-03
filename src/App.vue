<template>
  <div>
    <the-header></the-header>

    

    <router-view></router-view>

    <footer-page></footer-page>
  </div>
</template>

<script>
import TheHeader from "./layouts/TheHeader.vue";

import FooterPage from "./components/FooterPage.vue";

export default {
  components: {
    TheHeader,

    FooterPage,
  },
};
</script>

<style>
@import "./styles/font-awesome.min.css";
@import "./styles/slicknav_dark.css";

@import "./styles/style.css";
</style>
