<template>
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
                <p class="subscribe-newsletter">
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
                  <a class="policy-hyperlink" href="/politiki-aporritou"
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
      <div class="footer-credits">
        &copy; Copyright 2023 Loft22. All Rights Reserved. Designed by: Nick
        Stamatelatos
      </div>
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
  align-items: center; /* Align items to the left */
  text-align: center;
  background: #000;
  padding-bottom: 1.1rem;
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

.footer-credits {
  margin-top: 35rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 13px;
}

.subscribe-newsletter {
  text-align: center;
}

@media (max-width: 768px) {
  .footer-credits {
    margin-top: 50rem;
  }
}

@media (max-width: 480px) {
  .footer-credits {
    margin-top: 50rem;
  }
}
</style>
