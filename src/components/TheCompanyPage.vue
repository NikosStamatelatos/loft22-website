<template>
  <router-link to="/menu"></router-link>
  <div class="grid-container">
    <div class="grid_8">
      <img src="../imgs/company.jpg" class="company-img" />
      <div class="txt-for-company">
        <p>
          Από την αρχή του ταξιδιού μας στον κόσμο του πολύτιμου καρπού του καφέ
          το 2003, ο στόχος μας παραμένει ο ίδιος: Να μοιραστούμε σε όλον τον
          κόσμο την αγάπη και την τεχνογνωσία μας για τον ποιοτικό, απολαυστικό
          καφέ σε ένα καλαίσθητο και πολυτελές περιβάλλον.
        </p>
        <p>
          Ξεκινώντας από την Ελλάδα και με ήδη ισχυρή παρουσία στην Κύπρο και
          την Αίγυπτο αλλά και στη Σαουδική Αραβία, συνεχίζουμε με σταθερά
          βήματα προς το όραμά μας που είναι: να καθιερωθούμε σαν η κορυφαία
          αλυσίδα καφέ όπου ο κόσμος να μπορεί να απολαμβάνει μια αναβαθμισμένη
          εμπειρία σε κάθε γωνιά του πλανήτη.
        </p>
      </div>
      <img src="../imgs/company2.jpg" class="company-img" />
      <div class="txt-for-company">
        <p>
          Από το πρώτο κατάστημα Coffee Berry μέχρι και σήμερα μοιραζόμαστε την
          τεχνογνωσία και την αγάπη μας για τον καφέ με όλους εσάς.
        </p>
        <p>
          Δεσμευόμαστε ότι, με επίκεντρο τον καφέ, προσφέρουμε διαρκώς μια
          μοναδική εμπειρία, επιλέγοντας ό,τι είναι εξαιρετικό, ενσωματώνοντάς
          το στην καθημερινότητά μας. Όχι μόνο στους πελάτες μας ή στους πελάτες
          των συνεργατών μας αλλά σε όλους όσοι η εμπειρία που απολαμβάνουν την
          οποιαδήποτε στιγμή στην ημέρα τους, συνδέεται με το brand μας Coffee
          Berry – Tasteful Living.
        </p>
      </div>
      <!--/.txt-->
    </div>
  </div>
  <!--/.txt-->
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
  },
};
</script>

<style scoped>
.grid_8 {
  display: center;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-bottom: 20rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px; /* Set a maximum width for the grid container */
}

.grid-container {
  padding-top: 7rem; /* Adjust the value as needed */
}

.txt-for-company {
  margin-bottom: 2rem;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  transform: scale(1); /* Initial scale value */
  /* Add transitions for smooth zooming */
  transition: transform 0.3s ease-out;
}

.txt-for-company:hover {
  transform: scale(1.1); /* Adjust the scale value for zooming in or out */
}

@media screen and (max-width: 480px) {
  /* Styles for mobile devices with a maximum width of 480px */
  .grid_8 {
    width: 90%;
    display: inline-block;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: -5rem;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  /* Styles for devices with a width between 481px and 768px */
  .grid_8 {
    width: 90%;
    display: inline-block;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: -5rem;
  }
}

.company-img {
  width: 100%; /* Adjusted to occupy the entire width of the container */
  max-width: 700px; /* Set a maximum width for larger screens */
  height: auto; /* Maintain the image's aspect ratio */
  margin-top: 3rem;
  transform: scale(1); /* Initial scale value */
  /* Add transitions for smooth zooming */
  transition: transform 0.3s ease-out;
}

/* On hover, apply the desired zoom level or transform */
.company-img:hover {
  transform: scale(1.1); /* Adjust the scale value for zooming in or out */
}
</style>
