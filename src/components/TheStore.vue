<template>
  <router-link to="/store"></router-link>
  <empty-field-message
    :open="inputIsInvalid"
    title="Παρακαλούμε συμπληρώστε όλα τα απαιτούμενα πεδία!"
    @close="inputIsInvalid = false"
  >
  </empty-field-message>
  <div class="wrapper">
    <div class="index-blocks">
      <!--.index-blocks-->
      <div class="grid_half">
        <!--.grid_half-->
        <div class="company-title">Το κατάστημα μας</div>
        <!--/.txt-title-->
        <!--.icon-->
        <div class="icon_title"><i class="fa fa-store fa-beat"></i></div>
        <!--/.icon-->
        <!--.txt-->
        <div class="txt-company">
          <div class="company">
            <p>
              Η εταιρεία μας δραστηριοποιείται στον χώρο του
              φωτισμού-λαμπτήρων-γυάλινων αντικειμένων & ηλεκτρολογικού υλικού
              από το 1992!
            </p>
            <p>
              Το ηλεκτρονικό μας κατάστημα είναι διαθέσιμο 24 ώρες, 7 ημέρες την
              εβδομάδα. Η αποθήκη μας βρίσκεται στον Πειραιά & πιο συγκεκριμένα
              στην δ/νση Βαλερίου Στάη 35.
            </p>
            <p>
              Η παραπάνω δ/νση λειτουργεί ως αποθήκη και όχι ως σημείο
              παραλαβής. Οι παραγγελίες σας μπορούν να σταλούν με Courier ή
              μεταφορική εταιρεία.
            </p>
          </div>
        </div>
        <!--/.txt-->
      </div>
      <!--/.grid_half-->
      <div class="grid_half">
        <!--.grid_half-->
        <div class="company-title">Στείλτε μας μήνυμα</div>
        <!--/.txt-title-->
        <!--.icon-->
        <div class="icon_title"><i class="fa fa-envelope fa-beat"></i></div>
        <!--/.icon-->
        <!--.txt-->
        <div class="txt">
          <form @submit.prevent="newInput" id="contactForm" action="#">
            <div class="formrow">
              <label class="newlabel" for="firstName"> Όνομα * </label>
              <input
                class="newinput"
                type="text"
                name="first_name"
                maxlength="50"
                size="30"
              />
            </div>
            <div class="formrow">
              <label class="newlabel" for="lastName"> Επίθετο * </label>
              <input
                class="newinput"
                type="text"
                name="last_name"
                maxlength="50"
                size="30"
              />
            </div>
            <div class="formrow">
              <label class="newlabel" for="email"> E-mail * </label>
              <input
                class="newinput"
                type="text"
                name="email"
                maxlength="80"
                size="30"
              />
            </div>
            <div class="formrow">
              <label class="newlabel" for="phone"> Τηλέφωνο * </label>
              <input
                class="newinput"
                type="text"
                name="telephone"
                maxlength="30"
                size="30"
              />
            </div>
            <div class="formrow_message">
              <label class="newlabel" for="message"> Μήνυμα * </label>
              <textarea
                class="newinput_message"
                name="comments"
                cols="25"
                rows="6"
              >
              </textarea>
            </div>
            <div class="formrow">
              <input class="send-btn" type="submit" value="Αποστολή" />
            </div>
          </form>
          <div id="contactMsg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyFieldMessage from "../components/EmptyFieldMessage.vue";

export default {
  components: {
    EmptyFieldMessage,
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
  mounted() {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
  },
};
</script>

<style scoped>
.icon_title {
  margin-bottom: 1rem;
}

.send-btn {
  height: 40px;
  width: 30%;
  margin-left: 36%;
  display: block;
  cursor: pointer;
}

.txt {
  padding: 2rem;
}
</style>
