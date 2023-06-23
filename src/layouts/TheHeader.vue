<template>
  <div id="logo">
    <!--#logo-->
    <img src="../imgs/logotipo.jpg" alt="Loft-22" />
  </div>
  <!--/logo-->
  <div id="logo2">
    <!--#logo_for responsive-->
    <img src="../imgs/logotipo.jpg" alt="Loft-22" />
  </div>
  <navigation-header v-if="isMobile === false"></navigation-header>
  <navigation-mobile v-else></navigation-mobile>
</template>

<script>
import NavigationHeader from "../nav/NavigationHeader.vue";
import NavigationMobile from "../nav/NavigationMobile.vue";

export default {
  components: {
    NavigationHeader,
    NavigationMobile,
  },
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
  width: 110px;
  height: 110px;
  border-radius: 60px;
}

nav {
  margin-right: 20px;
}

@media screen and (max-width: 480px) {
  #logo {
    margin-top: 50px;
  }

  #logo2 {
    display: none;
  }
}

/* Styles for devices with a width between 481px and 768px */
@media screen and (min-width: 481px) and (max-width: 768px) {
  #logo {
    margin-top: 20px;
  }

  #logo2 {
    display: none;
  }
}

/* Styles for devices with a width larger than 768px */
@media screen and (min-width: 769px) {
  #logo {
    margin-top: 30px;
  }

  #logo2 {
    display: none;
  }
}
</style>
