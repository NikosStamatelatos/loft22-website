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
  </div>
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
  margin-bottom: 20px;
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
  width: 50%; /* Adjust the size as desired */
  height: 550px;

  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.5); /* Add shadow */
}

@media screen and (max-width: 480px) {
  /* Styles for mobile devices with a maximum width of 480px */
  #title {
    font-size: 70px;
    margin-bottom: 10px;
    margin-top: 20px !important;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  /* Styles for devices with a width between 481px and 768px */
  #title {
    font-size: 36px;
    margin-bottom: 15px;
  }
}

@media screen and (min-width: 769px) {
  /* Styles for devices with a width larger than 769px */
  #title {
    font-size: 80px;
    margin-bottom: 20px;
  }
}
</style>
