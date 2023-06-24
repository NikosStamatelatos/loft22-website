<template>
  <div id="header" v-if="isMobile === false">
    <!--#header-->
    <div id="logo">
      <!--#logo-->
      <img class="desktop-logo" src="../imgs/logotipo.jpg" alt="Loft-22" />
    </div>
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

<style scoped>
@import "../styles/style.css";

img {
  width: 100px;
  height: 100px;
  border-radius: 60px;
}

.desktop-logo {
  margin-left: 50px;
  margin-top: 5px;
  position: fixed;
}

/* Styles for devices with a width up to 480px */
@media screen and (max-width: 480px) {
  .desktop-logo {
    display: none;
  }
}

/* Styles for devices with a width between 481px and 768px */
@media screen and (min-width: 481px) and (max-width: 768px) {
  .desktop-logo {
    display: none;
  }
}

/* Styles for devices with a width larger than 768px */
@media screen and (min-width: 769px) {
  .desktop-logo {
    display: block;
  }
}
</style>
