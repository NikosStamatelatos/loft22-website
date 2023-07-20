<template>
  <router-link to="/politiki-aporritou"></router-link>
  <div class="wrapper">
    <div class="txt-company">
      <div class="company">
        <p>
          Η ιστοσελίδα μας, όπως οι περισσότεροι ιστότοποι, χρησιμοποιεί μικρά
          αρχεία που λέγονται cookies τα οποία μας βοηθούν να βελτιώσουμε την
          εμπειρία περιήγησης σας.
        </p>

        <div>
          <li>Κάνουν την ιστοσελίδα μας, να εμφανίζεται όπως θα περιμένατε</li>
          <li>
            Θυμούνται τις ρυθμίσεις σας κατά τη διάρκεια και μεταξύ των
            επισκέψεων
          </li>
          <li>
            Σας προσφέρουν δωρεάν υπηρεσίες / περιεχόμενο (χάρη στη διαφήμιση)
          </li>
          <li>Βελτιώνουν την ταχύτητα / ασφάλεια του site</li>
          <li>
            Σας επιτρέπουν να μοιραστείτε σελίδες μέσα από τα κοινωνικά δίκτυα
            όπως το Facebook
          </li>
          <li>
            Εξατομικεύουν την ιστοσελίδα μας για να σας βοηθήσει να δείτε ό, τι
            χρειάζεστε πιο γρήγορα
          </li>
          <li>
            Μας βοηθούν να βελτιώνουμε συνεχώς την ιστοσελίδα μας για εσάς
          </li>
          <li>
            Μας βοηθούν να κάνουμε το marketing πιο αποτελεσματικό (τελικά
            βοηθώντας μας να προσφέρουμε τις υπηρεσίες μας)
          </li>
        </div>
      </div>
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
.company {
  text-align: left;
  margin-left: 1.5rem;
  margin-right: 1rem;
}
</style>
