<template>
  <!-- ***** - texts boxes - ***** -->
  <div class="grid-container">
    <div class="grid-item">
      <!--.grid-item-->
      <div class="grid-item-container">
        <div class="txt-title">Delivery</div>
        <!--.icon-->
        <div class="icons"><i class="fa fa-motorcycle fa-lg"></i></div>
        <!--/.icon-->
        <!--/.txt-title-->
        <div class="txt">
          Απολαύστε τον αγαπημένο σας καφέ και τα αγαπημένα σας snack στο σπίτι,
          στην εργασία ή όπου εσείς επιθυμείτε. Το Loft22 προσφέρει Delivery
          Δευτέρα - Σάββατο: 08:00-16:00.
        </div>
        <!--/.txt-->
      </div>
    </div>
    <!--/grid-item-->
    <div class="grid-item">
      <!--.grid-item-->
      <div class="grid-item-container">
        <div class="txt-title">Snack</div>
        <!--.icon-->
        <div class="icons"><i class="fa fa-burger fa-lg"></i></div>
        <!--/.icon-->
        <!--/.txt-title-->
        <div class="txt">
          Επιλεγμένες γεύσεις, με τα αγνότερα υλικά και με περίσσια νοστιμιά σας
          περιμένουν στα Coffee Berry. Μίνι μπριός, τορτίγιες, λαχταριστές
          μπαγκέτες και πολλά άλλα snack φτιάχνονται καθημερινά ακολουθώντας τις
          συνταγές του Executive chef μας κ. Μιχάλη Τζόβα, για να μπορείτε να τα
          απολαμβάνετε λαχταριστά και ολόφρεσκα κάθε στιγμή της ημέρας.
        </div>
        <!--/.txt-->
      </div>
    </div>
    <!--/grid-item-->
    <div class="grid-item">
      <!--.grid-item-->
      <div class="grid-item-container">
        <div class="txt-title">Καφές</div>
        <!--.icon-->
        <div class="icons"><i class="fa fa-coffee fa-lg"></i></div>
        <!--/.icon-->
        <!--/.txt-title-->
        <div class="txt">
          Ο καφές μας καλλιεργείται ανάμεσα στο βορειότερο σύνορο του Τροπικού
          του Καρκίνου και στο νοτιότερο άκρο του Τροπικού του Αιγόκερω. Ανάλογα
          με το υψόμετρο και το υπέδαφος, θα αποκτήσει και τα ιδιαίτερα γευστικά
          και αρωματικά χαρακτηριστικά του.
        </div>
        <!--/.txt-->
      </div>
    </div>
    <!--/grid-item-->
  </div>
  <!--/grid-container-->
</template>

<script></script>

<style scoped>
@import "../styles/style.css";

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 4rem;
  margin-top: 2rem;
  margin-left: 20rem;
  margin-right: 20rem;
}

@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; /* Change to a single column layout for smaller screens */
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

.grid-item-container {
  border: 1px solid black;
  padding: 10px;
  height: 100%;
  background-color: black;
}

.txt-title {
  font-size: 20px;
}

.txt {
  font-size: 16px;
}

.icons {
  background: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  text-align: center;
  margin: 0 auto -30px auto;
  display: table;
  z-index: 99;
  position: relative;
  margin-bottom: -7px;
}

.icons i {
  display: table-cell;
  vertical-align: middle;
  color: black;
}
</style>
