<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
    <footer-page></footer-page>

    <button id="scrollToTopButton" @click="scrollToTop" title="Scroll to Top">
      ^
    </button>
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
  methods: {
    scrollToTop() {
      // For smooth scrolling, use a library like "vue-scrollto" or write a custom function
      // Here, I'll provide a simple example without smooth scrolling:
      const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
      };

      scrollToTop();
    },
  },
};
</script>

<style>
@import "./styles/font-awesome.min.css";
@import "./styles/slicknav_dark.css";

@import "./styles/style.css";

#scrollToTopButton {
  display: none; /* Hide the button initially */
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #333;
  color: #fff;
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
}

#scrollToTopButton:hover {
  background-color: #555;
}
</style>
