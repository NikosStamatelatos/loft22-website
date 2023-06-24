<template>
  <div id="logo">
    <!--#logo-->
    <img class="desktop-logo" src="../imgs/logotipo.jpg" alt="Loft-22" />
  </div>
  <navigation-header v-if="!isMobile"></navigation-header>
  <navigation-mobile v-else></navigation-mobile>
  <div id="logo2">
    <!--#logo_for responsive-->
    <img class="mobile-logo" src="../imgs/logotipo.jpg" alt="Loft-22" />
  </div>
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
  width: 80px;
  height: 80px;
  border-radius: 60px;
}

.desktop-logo {
  margin-left: 350px;
  margin-top: 50px;
  position: fixe;
}

.mobile-logo {
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 40px;
}

/* Styles for devices with a width up to 480px */
@media screen and (max-width: 480px) {
  .desktop-logo {
    display: none;
  }

  .mobile-logo {
    display: block;
    margin-top: 50px;
  }
}

/* Styles for devices with a width between 481px and 768px */
@media screen and (min-width: 481px) and (max-width: 768px) {
  .desktop-logo {
    display: none;
  }

  .mobile-logo {
    display: block;
    margin-top: 20px;
  }
}

/* Styles for devices with a width larger than 768px */
@media screen and (min-width: 769px) {
  .desktop-logo {
    display: block;
  }

  .mobile-logo {
    display: none;
  }
}
</style>
