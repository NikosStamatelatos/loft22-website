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
        <div class="icons"><i class="fa fa-cutlery fa-lg"></i></div>
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
  <div id="title">ΑΠΟΛΑΥΣΤΙΚΑ ΡΟΦΗΜΑΤΑ<br /></div>
  <img src="../imgs/divider.png" class="divider" alt="SweetSnacks" />
  <div class="grid2-container">
    <div class="grid-item">
      <div class="grid-item2-container">
        <img src="../imgs/freddo.jpg" class="coffee-img" alt="SweetSnacks" />
        <div class="txt-title">Freddo</div>
        <!--.icon-->

        <!--/.icon-->
        <!--/.txt-title-->
        <div>
          Δοκιμάστε ένα Freddo Espresso ή Freddo Cappuccino, με ένα από τα 3
          μοναδικά μας blends!
        </div>
        <!--/.txt-->
      </div>
    </div>
    <!--/grid-item-->
    <div class="grid-item">
      <!--.grid-item-->
      <div class="grid-item2-container">
        <img src="../imgs/freddo.jpg" class="coffee-img" alt="SweetSnacks" />
        <div class="txt-title">Καφές Φίλτρου</div>
        <!--.icon-->

        <!--/.icon-->
        <!--/.txt-title-->
        <div>
          Δοκιμάστε ένα Freddo Espresso ή Freddo Cappuccino, με ένα από τα 3
          μοναδικά μας blends!
        </div>
        <!--/.txt-->
      </div>
    </div>
    <!--/grid-item-->
  </div>
</template>

<script></script>

<style scoped>
@import "../styles/style.css";
#title {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  /* margin-bottom: 10px; */
  color: #9a845d;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  margin-top: -7rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 4rem;
  margin-top: 2rem;
  margin-left: 20rem;
  margin-right: 20rem;
}

.grid2-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 250px;
  margin-bottom: 4rem;
  margin-top: 2rem;
  margin-left: 40rem;
  margin-right: 40rem;
  justify-content: center; /* Add this line */
  text-align: center;
}

@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; /* Change to a single column layout for smaller screens */
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .grid2-container {
    grid-template-columns: 1fr; /* Change to a single column layout for smaller screens */
    margin-left: 1rem;
    margin-right: 1rem;
    gap: 50px;
  }
}

.grid-item-container {
  border: 1px solid black;
  padding: 10px;
  height: 100%;
  background-color: black;
}

.grid-item2-container {
  /* border: 1px solid black;
  padding: 10px;
  height: 100%;
  background-color: black; */
}

.txt-title {
  font-size: 20px;
}

.txt {
  font-size: 16px;
  margin-top: 1rem;
  margin-bottom: 2rem;
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

@media screen and (max-width: 480px) {
  /* Styles for mobile devices with a maximum width of 480px */
  #title {
    font-size: 32px;
    /* margin-bottom: 5px; */
    margin-top: 5px !important;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  /* Styles for devices with a width between 481px and 768px */
  #title {
    font-size: 32px;
    /* margin-bottom: 5px; */
  }
}

@media screen and (min-width: 769px) {
  /* Styles for devices with a width larger than 769px */
  #title {
    font-size: 35px;
    /* margin-bottom: 10px; */
  }
}

.coffee-img {
  width: 225px;
  height: 225px;
  border-radius: 50%;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.divider {
  height: 10px; /* Increase the height of the divider */
  width: 1500px;
}
</style>
