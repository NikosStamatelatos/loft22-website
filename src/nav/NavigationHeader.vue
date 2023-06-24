<template>
  <div id="home"></div>
  <div class="wrapper">
    <div id="header" v-if="isMobile === false">
      <!--#header-->
      <!--#menu-->
      <nav id="nav-container">
        <!--#menu-->
        <ul id="nav">
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/menu">Menu</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/find-us">Find Us</router-link>
          </li>
        </ul>
      </nav>
      <!--#menu-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.updateIsMobile();
    window.addEventListener("resize", this.updateIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateIsMobile);
  },
  methods: {
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as per your requirement
    },
  },
};
</script>

<style>
@import "../styles/style.css";
</style>
