<template>
  <!--/title-->
  <div id="title">Welcome to Loft 22 Coffee Shop<br /></div>
  <!-- ***** - Slider - ***** -->
  <div class="slider-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../imgs/slider/flex4.jpg" alt="image" />
          <div class="description">
            <p>Some description here</p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../imgs/slider/flex1.jpg" alt="image" />
          <div class="description">
            <p>Some description here</p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../imgs/slider/flex2.jpg" alt="image" />
          <div class="description">
            <p>Some description here</p>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <!-- Add next arrow -->
      <div class="swiper-button-prev"></div>
      <!-- Add previous arrow -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation]); // Register the navigation module

export default {
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3, // Display 3 slides on desktop
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next", // Next arrow selector
        prevEl: ".swiper-button-prev", // Previous arrow selector
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // Responsive breakpoints
        768: {
          slidesPerView: 1, // Display 1 slide on mobile
        },
      },
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Qwigley&family=Rajdhani&display=swap");

@import "../assets/style.css";
#title {
  font-family: "Qwigley", cursive;
  text-align: center;
  margin-bottom: 20px;
}

.slider-container {
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  position: relative;
}

.swiper-container {
  width: 100%;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  z-index: 10;
  cursor: pointer;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: 10px;
}
</style>
