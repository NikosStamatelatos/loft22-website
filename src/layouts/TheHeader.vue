<template>
  <div class="wrapper">
    <div id="header">
      <!--#header-->
      <div id="logo">
        <!--#logo-->
        <img src="../imgs/logotipo.jpg" alt="Loft-22" />
      </div>
      <!--/logo-->
      <div id="logo2">
        <!--#logo_for responsive-->
        <img src="../imgs/logotipo.jpg" alt="Loft-22" />
      </div>
      <!--#menu-->
      <div id="hamburger">
        <!--#hamburger menu icon-->
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
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

<style scoped>
@import "../assets/style.css";

img {
  width: 110px;
  height: 110px;
  border-radius: 60px;
}

nav {
  margin-right: 20px;
}
</style>
