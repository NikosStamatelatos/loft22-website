<template>
  <div>
    <the-header title="Welcome"></the-header>
    <about-us></about-us>
    <book-lesson></book-lesson>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./layouts/TheHeader.vue";
import AboutUs from "./components/AboutUs.vue";
import BookLesson from "./components/BookLesson.vue";

export default {
  components: {
    TheHeader,
    AboutUs,
    BookLesson,
  },
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
