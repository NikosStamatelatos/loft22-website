<template>
  <empty-field-message
    :open="inputIsInvalid"
    title="Κάποιο απο τα πεδία είναι κενά!"
    @close="inputIsInvalid = false"
  >
    <p class="textEmpty">Παρακαλούμε συμπληρώστε όλα τα πεδία!</p>
    <button class="ok-button" @click="inputIsInvalid = false">OΚ</button>
  </empty-field-message>
  <!--/.index-blocks-->
  <div class="wrapper">
    <div class="index-blocks">
      <!--.index-blocks-->
      <div class="grid_half">
        <!--.grid_half-->
        <div class="txt-title">Στοιχεία επιχείρησης</div>
        <!--/.txt-title-->
        <!--.icon-->
        <div class="icon_title"><i class="fa fa-store fa-beat"></i></div>
        <!--/.icon-->
        <!--.txt-->
        <div class="txt contact_new">
          <form @submit.prevent="submitForm">
            <div class="contact_item">
              <p class="fa fa-location-dot fa-lg contact_icon"></p>
              <p>Κύπρου 80 Νίκαια, 18451</p>
            </div>
            <div class="contact_item">
              <p class="fa fa-phone fa-lg contact_icon"></p>
              <div>
                <p>2160046005</p>
              </div>
            </div>
            <div class="contact_item">
              <p class="fa fa-envelope fa-lg contact_icon"></p>
              <div>
                <p>loft22@gmail.com</p>
              </div>
            </div>
            <div class="contact_item">
              <p class="fa fa-link fa-lg contact_icon"></p>
              <div>
                <p>loft22.gr</p>
              </div>
            </div>
          </form>
        </div>
        <!--/.txt-->
        <div class="social">
          <p class="txt-title">Βρείτε μας στα Social</p>
          <a href="#" class="fa fa-facebook fa-2x"></a>
          <a href="#" class="fa fa-instagram fa-2x"></a>
        </div>

        <!--/.txt-title-->
        <!-- ***** - social icons - ***** -->
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
}

.ok-button {
  color: white;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #474747;
  border: 1px solid #474747;
  transition: all 0.3s;
  /* box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; */
}

.ok-button:active {
  color: #ffffff;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
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
