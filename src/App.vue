<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
    <footer-page></footer-page>
    <transition name="fade">
      <button v-if="showScrollToTop" class="scroll-to-top" @click="scrollToTop">
        <i class="fa fa-arrow-up"></i>
      </button>
    </transition>
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
  data() {
    return {
      showScrollToTop: false,
    };
  },
  methods: {
    scrollToTop() {
      // Scrolls the window to the top with a smooth behavior
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      // Check the current scroll position
      this.showScrollToTop = window.scrollY > 0;
    },
  },
  mounted() {
    // Add scroll event listener when the component is mounted
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is about to be unmounted
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@import "./styles/font-awesome.min.css";
@import "./styles/slicknav_dark.css";

@import "./styles/style.css";

/* Style for the scroll-to-top button */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.8;
}

.scroll-to-top:hover {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
