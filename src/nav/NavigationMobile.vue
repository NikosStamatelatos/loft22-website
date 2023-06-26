<template>
  <div id="navigation-mobile">
    <div class="menu-icon" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
      <div class="menu-label">Menu</div>
    </div>
    <ul :class="{ 'show-menu': isMenuOpen }" @click.stop>
      <li>Home</li>
      <li>Menu</li>
      <li>Blog</li>
      <li>Find Us</li>
    </ul>
    <div id="logo2">
      <!--#logo_for responsive-->
      <img class="mobile-logo" src="../imgs/logotipo.jpg" alt="Loft-22" />
    </div>
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
      if (this.isMenuOpen) {
        document.addEventListener("click", this.closeMenu);
      } else {
        document.removeEventListener("click", this.closeMenu);
      }
    },
    closeMenu(event) {
      if (!this.$el.contains(event.target)) {
        this.isMenuOpen = false;
        document.removeEventListener("click", this.closeMenu);
      }
    },
  },
};
</script>

<style scoped>
@import "../styles/font-awesome.min.css";
@import "../styles/slicknav_dark.css";

.menu-icon {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* position: fixed; */
  font-size: 16px;
  width: 100%;
  background: #000;
  padding: 12px;
  text-align: center;
  opacity: 0.8;
}

.menu-icon span {
  display: block;
  width: 1.125em;
  height: 0.125em;
  margin-top: 0.188rem;
  background-color: #fff;
}

ul {
  display: none;
  position: absolute;
  background-color: black;
  width: 100%;
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

.menu-icon {
  position: relative;
  margin-right: 20rem;
}

.menu-icon .menu-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  margin-right: 20rem;
  text-transform: uppercase;
  font-weight: bold;
}

.menu-icon span {
  display: block;
  width: 1.125em;
  height: 0.125em;
  margin-top: 0.188rem;
  background-color: #fff;
  margin-right: 20rem;
}
</style>
