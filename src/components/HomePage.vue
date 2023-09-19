<template>
  <!--/title-->
  <div id="title">Welcome to Loft22 Coffee Shop!<br /></div>
  <!-- ***** - Main image - ***** -->
  <div class="main-image">
    <img src="../imgs/img3-loft22.jpg" alt="image" />
    <div class="description">
      <p>Coffee | Snack</p>
    </div>
    <content-homepage></content-homepage>
    <div class="img-homepage">
      <img src="../imgs/img-homepage.jpg" alt="image" />
    </div>
    <div id="title">Που θα μας βρείτε...<br /></div>
    <div class="map-container">
      <iframe
        width="700"
        height="300"
        style="border: 0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCJNrHOmmgBkf51alBnVldaN9H8-k7vt8s
    &q=Loft22 - Coffee | Snack"
      >
      </iframe>
    </div>
  </div>
  <router-link to="/homepage"></router-link>
</template>

<script>
import ContentHomepage from "../components/ContentHomepage.vue";

export default {
  components: {
    ContentHomepage,
  },
  mounted() {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Qwigley&family=Rajdhani&display=swap");

@import "../styles/style.css";
#title {
  font-family: "Open Sans", sans-serif;
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

.img-homepage {
  margin-top: 2rem;
  transition: transform 0.3s ease-out;
  margin-bottom: 7rem;
}

.img-homepage:hover {
  transform: scale(1.1); /* Adjust the scale value for zooming in or out */
}

@media screen and (max-width: 480px) {
  /* Styles for mobile devices with a maximum width of 480px */
  #title {
    font-size: 32px;
    /* margin-bottom: 5px; */
    margin-top: 5px !important;
  }
  .map-container {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  /* Styles for devices with a width between 481px and 768px */
  #title {
    font-size: 32px;
    /* margin-bottom: 5px; */
  }

  .map-container {
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 769px) {
  /* Styles for devices with a width larger than 769px */
  #title {
    font-size: 35px;
    /* margin-bottom: 10px; */
  }

  .map-container {
    width: 850px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
