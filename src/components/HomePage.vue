<template>
  <!--/title-->
  <div id="title">Welcome to Loft 22 Coffee Shop<br /></div>
  <!-- ***** - Main image - ***** -->
  <div class="main-image">
    <img src="../imgs/img3-loft22.jpg" alt="image" />
    <div class="description">
      <p>Coffee | Snack</p>
    </div>
    <content-homepage></content-homepage>
    <div class="grid_map_full">
      <!--.grid_map-->
      <div class="txt-title">Localization:</div>
      <!--/.txt-title-->
      <div id="map-canvas"></div>
      <br />
    </div>
  </div>
  <router-link to="/"></router-link>
</template>

<script>
import ContentHomepage from "../components/ContentHomepage.vue";

export default {
  components: {
    ContentHomepage,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Qwigley&family=Rajdhani&display=swap");

@import "../styles/style.css";
#title {
  font-family: "Qwigley", cursive;
  text-align: center;
  /* margin-bottom: 10px; */
  color: #9a845d;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.main-image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-image img {
  width: 100%; /* Adjusted to occupy the entire width of the container */
  max-width: 700px; /* Set a maximum width for larger screens */
  height: auto; /* Maintain the image's aspect ratio */
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.5); /* Add shadow */
}

.description {
  position: center;
  background: #000;
  color: #fff;
  /* z-index: 9999999; */
  bottom: 0px;
  height: 50px;
  padding: 10px 10px;
  margin-top: -50px;
  opacity: 1;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.5); /* Add shadow */
}

@media screen and (max-width: 480px) {
  /* Styles for mobile devices with a maximum width of 480px */
  #title {
    font-size: 35px;
    /* margin-bottom: 5px; */
    margin-top: 5px !important;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  /* Styles for devices with a width between 481px and 768px */
  #title {
    font-size: 36px;
    /* margin-bottom: 5px; */
  }
}

@media screen and (min-width: 769px) {
  /* Styles for devices with a width larger than 769px */
  #title {
    font-size: 80px;
    /* margin-bottom: 10px; */
  }
}
</style>
