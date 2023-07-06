<template>
  <router-link to="/etaireia"></router-link>
  <div class="container"></div>
  <div class="company-paragraph">
    <img src="../imgs/company.jpg" class="company-img" alt="Company" />
    <div class="text1">
      <p>
        Από την αρχή του ταξιδιού μας στον κόσμο του πολύτιμου καρπού του καφέ
        το 2003, ο στόχος μας παραμένει ο ίδιος: Να μοιραστούμε σε όλον τον
        κόσμο την αγάπη και την τεχνογνωσία μας για τον ποιοτικό, απολαυστικό
        καφέ σε ένα καλαίσθητο και πολυτελές περιβάλλον.
      </p>
      <p>
        Ξεκινώντας από την Ελλάδα και με ήδη ισχυρή παρουσία στην Κύπρο και την
        Αίγυπτο αλλά και στη Σαουδική Αραβία, συνεχίζουμε με σταθερά βήματα προς
        το όραμά μας που είναι: να καθιερωθούμε σαν η κορυφαία αλυσίδα καφέ όπου
        ο κόσμος να μπορεί να απολαμβάνει μια αναβαθμισμένη εμπειρία σε κάθε
        γωνιά του πλανήτη.
      </p>
    </div>
  </div>
  <div class="company-paragraph">
    <img src="../imgs/company2.jpg" class="company-img2" alt="Comp`any" />
    <div class="text2">
      <p>
        Από το πρώτο κατάστημα Coffee Berry μέχρι και σήμερα μοιραζόμαστε την
        τεχνογνωσία και την αγάπη μας για τον καφέ με όλους εσάς.
      </p>
      <p>
        Δεσμευόμαστε ότι, με επίκεντρο τον καφέ, προσφέρουμε διαρκώς μια
        μοναδική εμπειρία, επιλέγοντας ό,τι είναι εξαιρετικό, ενσωματώνοντάς το
        στην καθημερινότητά μας. Όχι μόνο στους πελάτες μας ή στους πελάτες των
        συνεργατών μας αλλά σε όλους όσοι η εμπειρία που απολαμβάνουν την
        οποιαδήποτε στιγμή στην ημέρα τους, συνδέεται με το brand μας Coffee
        Berry – Tasteful Living.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
  },
};
</script>

<style scoped>
.company-paragraph {
  display: flex;
  align-items: center;
}

.company-img {
  margin-top: 10rem;
  width: 300px;
  height: 300px;
  margin-left: 25rem;
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

.company-img2 {
  margin-top: 5rem;
  width: 300px;
  height: 300px;
  margin-left: 25rem;
  max-height: 500px;
  object-fit: cover;
  transform: scale(1); /* Initial scale value */

  /* Add transitions for smooth zooming */
  transition: transform 0.3s ease-out;
}

/* On hover, apply the desired zoom level or transform */
.company-img2:hover {
  transform: scale(1.2); /* Adjust the scale value for zooming in or out */
}

.text1 {
  font-size: 20px;
  margin-left: 3rem; /* Adjust the margin as needed */
  margin-top: 7rem;
  text-align: left;
  margin-right: 20rem;
}

.text2 {
  font-size: 20px;
  margin-left: 3rem; /* Adjust the margin as needed */
  margin-top: 5rem;
  text-align: left;
  margin-right: 20rem;
}

p {
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .company-img,
  .company-img2 {
    width: 300px;
    height: 300px;
    max-height: 400px;
  }

  .text1,
  .text2 {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .company-img,
  .company-img2 {
    width: 150px;
    max-height: 300px;
  }

  .text1,
  .text2 {
    font-size: 16px;
  }
}
</style>
