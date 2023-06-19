<template>
  <div>
    <div class="image-container">
      <img class="img1" src="../imgs/img1.jpg" />
      <div class="img-text">
        <p>Text Here!</p>
      </div>
    </div>
    <div class="image-container">
      <img class="img2" src="../imgs/img2.jpg" />
      <div class="img-text img2-text">
        <p>Text here!</p>
      </div>
    </div>
    <div class="image-container">
      <img class="img3" src="../imgs/img3.jpg" />
      <div class="img-text">
        <p>Text here!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image-container {
  display: flex;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.img1 {
  width: 30%;
  margin-left: 15rem;
}

.img2 {
  width: 30%;
  margin-left: 65rem;
}

.img3 {
  width: 30%;
  margin-left: 15rem;
}

.img-text {
  margin-left: 2rem;
}

.img-text.img2-text {
  margin-left: -43rem; /* Adjust this value based on your desired positioning */
}

.img-text p {
  margin: 0;
}

p {
  color: white;
}
</style>
