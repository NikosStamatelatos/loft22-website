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
              Το κατάστημα μας βρίσκεται στην Κύπρου 80 στην περιοχή της Νίκαιας Αττικής. 
            </p>
            <p>
              Στον χώρο μας θα βρείτε αναπαυτικά εσωτερικά και εξωτερικά καθίσματα που μπορείτε να απολαύσετε τον αγαπημένο σας καφέ και snack που θα απογειώσουν την γευστική σας εμπειρία.
            </p>
            <p>
              Με ένα τηλέφωνο στο 2160046005 ερχόμαστε και στον χώρο σας για να έχετε τον αγαπημένο σας καφέ πάντα μαζί σας.
            </p>
          </div>

          <div>
            <iframe
              width="450"
              height="200"
              style="border: 0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCJNrHOmmgBkf51alBnVldaN9H8-k7vt8s
    &q=Loft22 - Coffee | Snack"
            >
            </iframe>
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
