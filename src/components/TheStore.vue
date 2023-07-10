<template>
  <router-link to="/find-us"></router-link>
  <empty-field-newsletter
    :open="inputIsInvalid"
    title="Παρακαλούμε συμπληρώστε το πεδίο με το mail σας!"
    @close="inputIsInvalid = false"
  >
  </empty-field-newsletter>
  <!--/.index-blocks-->
  <div class="wrapper">
    <div class="index-blocks">
      <!--.index-blocks-->
      <div class="grid_half">
        <!--.grid_half-->
        <div class="txt-title">Το κατάστημα μας</div>
        <!--/.txt-title-->
        <!--.icon-->
        <div class="icon_title"><i class="fa fa-store fa-beat"></i></div>
        <!--/.icon-->
        <!--.txt-->
        <div class="txt contact_new">
          <form @submit.prevent="submitForm">
            <div class="contact_item">
              <p>
                Η εταιρεία μας δραστηριοποιείται στον χώρο του
                φωτισμού-λαμπτήρων-γυάλινων αντικειμένων & ηλεκτρολογικού υλικού
                από το 1992!
              </p>
              <p>
                Το ηλεκτρονικό μας κατάστημα είναι διαθέσιμο 24 ώρες, 7 ημέρες
                την εβδομάδα. Η αποθήκη μας βρίσκεται στον Πειραιά & πιο
                συγκεκριμένα στην δ/νση Βαλερίου Στάη 35.
              </p>
              <p>
                Η παραπάνω δ/νση λειτουργεί ως αποθήκη και όχι ως σημείο
                παραλαβής. Οι παραγγελίες σας μπορούν να σταλούν με Courier ή
                μεταφορική εταιρεία.
              </p>
            </div>
          </form>
        </div>

        <!-- <div class="txt"> -->
        <div class="social full_center">
          <!-- <div class="clear"></div> -->
          <!-- </div> -->
        </div>
        <!--/.social-->
        <!--/.txt-->
      </div>
      <!--/.grid_half-->
      <form @submit.prevent="newInput">
        <div class="grid_half">
          <!--.grid_half-->
          <div class="txt-title">Newsletter</div>
          <!--/.txt-title-->
          <!--.icon-->
          <div class="icon_title"><i class="fa fa-envelope fa-beat"></i></div>
          <!--/.icon-->
          <!--.txt-->
          <div class="txt-newsletter">
            <div id="contactForm" action="#">
              <div class="formrow">
                <p>
                  Εγγραφείτε στο newsletter μας και ενημερωθείτε πρώτοι για τις
                  προσφορές μας!
                </p>
              </div>
              <div class="email">
                <input
                  class="newinput"
                  placeholder="Το email σας"
                  type="text"
                  name="email"
                  maxlength="80"
                  size="30"
                />
              </div>
              <div class="formrow">
                <input
                  class="registration_button"
                  type="submit"
                  value="Εγγραφή"
                />
              </div>
              <div class="formrow">
                <p>
                  Θα χρησιμοποιηθεί σύμφωνα με την
                  <a class="policy-hyperlink" href="/menu"
                    >Πολιτική Απορρήτου</a
                  >
                  μας
                </p>
              </div>
            </div>
            <!-- <div id="contactMsg"></div> -->
          </div>
        </div>
        <!--/.grid_half-->
      </form>
    </div>
  </div>
  <!--/.index-blocks-->
  <!-- ***** - credits - ***** -->
</template>

<script>
import EmptyFieldNewsletter from "../components/EmptyFieldNewsletter.vue";

export default {
  components: {
    EmptyFieldNewsletter,
  },
  data() {
    return {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      inputIsInvalid: false,
    };
  },
  methods: {
    newInput() {
      if (!this.name || !this.email || !this.phoneNumber || !this.date) {
        this.inputIsInvalid = true;
      } else {
        // Perform the desired action when all fields are filled
      }
    },
  },
};
</script>

<style scoped>
@import "../styles/style.css";

.wrapper {
  min-height: calc(70vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.txt-newsletter {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  text-align: center;
  background: #000;
  padding-bottom: 0.7rem;
}

.contact_item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.contact_icon {
  margin-right: 15px;
  margin-top: 10rem;
}
.contact_item div {
  font-size: 14px; /* Adjust the font size for the information */
  display: flex;
  align-items: center;
}

.contact_item p {
  font-size: 15px; /* Adjust the font size for the information */
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 0.2rem;
}

.social {
  text-align: center;
  margin-bottom: 2rem;
}

.email {
  height: 50px;
  display: flex;
  justify-content: center; /* Align the input horizontally to the center */
  align-items: center; /* Align the input vertically to the center */
}

.email_message {
  height: 90px;
  display: block;
}

.newinput::placeholder {
  font-size: 15px; /* Adjust the font size for the placeholder text */
  color: #ffffff; /* Adjust the color for the placeholder text */
}

.newinput {
  width: 90%; /* Set the width to 100% to expand the input field */
  height: 40px; /* Adjust the height of the input field */
  font-size: 15px; /* Adjust the font size of the input text */
  padding: 5px; /* Adjust the padding around the input text */
}

.policy-hyperlink {
  color: rgb(129, 128, 128);
}
</style>
