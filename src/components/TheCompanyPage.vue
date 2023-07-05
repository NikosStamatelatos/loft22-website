<template>
  <router-link to="/etaireia"></router-link>
  <div class="image-container">
    <div class="company-paragraph">
      <img src="../imgs/company.jpg" class="company-img" alt="Company" />
      <div class="first-paragraph">
        <p>Kalispera</p>
      </div>
    </div>
  </div>
  <p>
    <!-- Your paragraph content -->
  </p>
</template>

<style scoped>
.company-paragraph {
  display: flex;
  align-items: center;
}

.image-container {
  width: 50%;
  max-height: 500px;
  overflow: hidden;
  position: relative;
}

.company-img {
  margin-left: 15rem;
  margin-top: 10rem;
  width: 50%;
  max-height: 500px;
  object-fit: cover;
  transform: scale(1); /* Initial scale value */

  /* Add transitions for smooth zooming */
  transition: transform 0.3s ease-out;
}

/* On hover, apply the desired zoom level or transform */
.company-img:hover {
  transform: scale(1.2); /* Adjust the scale value for zooming in or out */
}

.first-paragraph {
  font-size: 20px;
  margin-left: 8rem; /* Adjust the margin as needed */
}
</style>
