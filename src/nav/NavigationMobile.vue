<template>
  <div id="navigation-mobile">
    <div id="logo2">
      <!--#logo_for responsive-->
      <img class="mobile-logo" src="../imgs/logotipo.jpg" alt="Loft-22" />
    </div>
    <div class="menu-icon" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul :class="{ 'show-menu': isMenuOpen }">
      <li>Home</li>
      <li>Menu</li>
      <li>Blog</li>
      <li>Find Us</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
@import "../styles/font-awesome.min.css";

.menu-icon {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.menu-icon span {
  display: block;
  width: 30px;
  height: 4px;
  background-color: #000;
  margin-bottom: 6px;
  transition: transform 0.3s ease-in-out;
}

ul {
  display: none;
  position: absolute;
  /* top: 100%; */
  /* left: 0; */
  background-color: black;
  /* padding: 10px;  */
  /* list-style: none; */
  width: 100%;
  /* Adjust the following properties to make the menu bigger */
  font-size: 20px;
  padding: 10px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
}

.show-menu {
  display: block !important;
}

/* img {
  width: 80px;
  height: 80px;
  border-radius: 60px;
} */

.mobile-logo {
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 40px;
}

/* Styles for devices with a width up to 480px */
@media screen and (max-width: 480px) {
  .mobile-logo {
    display: block;
    margin-top: 30px;
  }
}

/* Styles for devices with a width between 481px and 768px */
@media screen and (min-width: 481px) and (max-width: 768px) {
  .mobile-logo {
    display: block;
    margin-top: 20px;
  }
}

/* Styles for devices with a width larger than 768px */
@media screen and (min-width: 769px) {
  .mobile-logo {
    display: none;
  }
}
</style>
