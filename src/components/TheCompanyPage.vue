<template>
  <router-link to="/menu"></router-link>
  <div class="grid-container">
    <div class="grid_8">
      <img src="../imgs/company.jpg" class="company-img" />
      <div class="txt-for-company">
        <p>
          Το Loft22 ξεκινάει το ταξίδι του το 2023 στον κόσμο του καφέ
          στοχεύοντας στην ποιότητα και στην εξυπηρέτηση. Οραματιζόμαστε να
          μοιραστούμε με όλον τον κόσμο την αγάπη και την γνώση μας για τον
          καφέ.
        </p>
        <p>
          Ξεκινώντας από την αγαπημένη περιοχή και την γειτονιά που μεγαλώσαμε, την Νίκαια, θέλαμε να δημιουργήσουμε έναν ζεστό χώρο που ο κόσμος θα μπορούσε να απολαύσει τα αγαπημένα του ροφήματα και snack. Σκοπός μας είναι να προσφέρουμε την καλύτερη ποιότητα σε ένα φιλικό και προσιτό περιβάλλον. 
        </p>
      </div>
      <img src="../imgs/company2.jpg" class="company-img" />
      <div class="txt2-for-company">
        <p>
          Ανάμεσα στην μεγάλη γκάμα των coffee roasters, ξεχώρισε ο αγαπημένος μας Carraro. Η Carraro coffee, το δημιούργημα του Mario Carraro από το 1927, διατηρεί αναλλοίωτα τα χαρακτηριστικά που την έκαναν να ξεχωρίσει, όπως την προσεκτική επιλογή των πρώτων υλών, την επιμονή στη λεπτομέρεια και τη σύζευξη παράδοσης και σύγχρονης τεχνολογίας.
        </p>
        <p>
         Στον χώρο μας μπορείτε να απολαύσετε αυθεντικά Ιταλικά Espresso Blends αλλά και από ποιοτικούς, μονοποικιλιακούς καφέδες.
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

.txt2-for-company {
  margin-bottom: -20rem;
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

.txt2-for-company:hover {
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
