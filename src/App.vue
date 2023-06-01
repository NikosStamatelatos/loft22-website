<template>
  <div>
    <the-header title="Welcome"></the-header>
    <the-navigation></the-navigation>

    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./layouts/TheHeader.vue";
import TheNavigation from "./nav/TheNavigation.vue";

export default {
  components: {
    TheHeader,
    TheNavigation,
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani&display=swap");

* {
  box-sizing: border-box;
  list-style: none;
}

html {
  font-family: "Rajdhani", sans-serif;
}

body {
  margin: 0;
  /* text-align: center; */
  background-color: rgb(34, 34, 34);
}
</style>
