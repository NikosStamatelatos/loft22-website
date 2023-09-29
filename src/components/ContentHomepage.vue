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
          Ανακάλυψε τα καλύτερα snacks που θα απογειώσουν την γευστική σου εμπειρία. Σφολιάτες, τορτίγιες, λαχταριστές μπαγκέτες και πολλά άλλα snack φτιάχνονται καθημερινά για να μπορείτε να τα απολαμβάνετε. Δοκίμασε τα σήμερα.
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
         Ο καφές Carraro σημαίνει παράδοση και καινοτομία από το 1927. Συνδυάζει την κουλτούρα και τη γεύση των μεγάλων master roasters με την πρωτοποριακή τεχνολογία παραγωγής. Ο καφές που προκύπτει είναι η απόλυτη απόλαυση με άρωμα που γίνεται όλο και πιο εκλεπτυσμένο με κάθε συγκομιδή, κάθε χρόνο.
        </div>
        <!--/.txt-->
      </div>
    </div>
    <!--/grid-item-->
  </div>
  <!--/grid-container-->
  <div id="title">Απολαυστικά ροφήματα<br /></div>
  <img src="../imgs/divider.png" class="divider" alt="SweetSnacks" />
  <div class="grid2-container">
    <div class="grid-item">
      <div class="grid-item2-container">
        <img src="../imgs/freddo-new.jpg" class="coffee-img" alt="SweetSnacks" />
        <div class="txt-title">FREDDO</div>
        <!--.icon-->

        <!--/.icon-->
        <!--/.txt-title-->
        <div>
          Δοκιμάστε Freddo Espresso ή Freddo Capuccino με τον μοναδικό Carraro καφέ μας!
        </div>
        <!--/.txt-->
      </div>
    </div>
    <!--/grid-item-->
    <div class="grid-item">
      <!--.grid-item-->
      <div class="grid-item2-container">
        <img src="../imgs/filter-coffee.jpg" class="coffee-img" alt="SweetSnacks" />
        <div class="txt-title">ΚΑΦΕΣ ΦΙΛΤΡΟΥ</div>
        <!--.icon-->

        <!--/.icon-->
        <!--/.txt-title-->
        <div>
         Με τον καφέ φίλτρου θα έχετε ένα συναρπαστικό ταξίδι γεύσεων στο φλιτζάνι σας!
        </div>
        <!--/.txt-->
      </div>
    </div>
    <!--/grid-item-->
    <div class="grid-item">
      <div class="grid-item3-container">
        <img src="../imgs/hot-chocolate.jpg" class="coffee-img" alt="SweetSnacks" />
        <div class="txt-title">ΖΕΣΤΗ ΣΟΚΟΛΑΤΑ</div>
        <!--.icon-->

        <!--/.icon-->
        <!--/.txt-title-->
        <div>
          Με γεύση φράουλα, φουντούκι και καραμέλα απολαύστε σήμερα ένα από τα ροφήματα σοκολάτας!
        </div>
        <!--/.txt-->
      </div>
    </div>
    <!--/grid-item-->
    <div class="grid-item">
      <!--.grid-item-->
      <div class="grid-item3-container">
        <img src="../imgs/tea.jpg" class="coffee-img" alt="SweetSnacks" />
        <div class="txt-title">ΤΣΑΪ</div>
        <!--.icon-->

        <!--/.icon-->
        <!--/.txt-title-->
        <div>
          Απολαύστε σήμερα το αγαπημένο σας τσάι με γεύση περγαμόντο ή πράσινο γιασεμί!
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
  margin-top: 4rem;
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

.grid-item3-container {
  margin-top: -8rem;
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

  .grid-item3-container {
    margin-top: 0rem;
  }

  .divider {
    margin-top: -2rem;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  /* Styles for devices with a width between 481px and 768px */
  #title {
    font-size: 32px;
    /* margin-bottom: 5px; */
  }

  .grid-item3-container {
    margin-top: 1rem;
  }
}

@media screen and (min-width: 769px) {
  /* Styles for devices with a width larger than 769px */
  #title {
    font-size: 35px;
    /* margin-bottom: 10px; */
  }

  .grid-item-container {
    border: 1px solid black;
    padding: 50px;
    height: 100%;
    background-color: black;
  }
}

.coffee-img {
  width: 225px;
  height: 225px;
  border-radius: 50%;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-out;
}

.divider {
  height: 18px; /* Increase the height of the divider */
  width: 1500px;
}

.coffee-img:hover {
  transform: scale(1.1); /* Adjust the scale value for zooming in or out */
}
</style>
