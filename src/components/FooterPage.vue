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
        <div class="txt-title">Address:</div>
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
          <p class="txt-title">Find Us:</p>
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
          <div class="txt-title">Send me mail</div>
          <!--/.txt-title-->
          <!--.icon-->
          <div class="icon_title"><i class="fa fa-envelope fa-beat"></i></div>
          <!--/.icon-->
          <!--.txt-->
          <div class="txt">
            <div id="contactForm" action="#">
              <div class="formrow">
                <label class="newlabel" for="first_name"> Όνομα </label>
                <input
                  class="newinput"
                  type="text"
                  name="first_name"
                  maxlength="50"
                  size="30"
                />
              </div>
              <div class="formrow">
                <label class="newlabel" for="last_name"> Επίθετο </label>
                <input
                  class="newinput"
                  type="text"
                  name="last_name"
                  maxlength="50"
                  size="30"
                />
              </div>
              <div class="formrow">
                <label class="newlabel" for="email"> Email </label>
                <input
                  class="newinput"
                  type="text"
                  name="email"
                  maxlength="80"
                  size="30"
                />
              </div>
              <div class="formrow">
                <label class="newlabel" for="telephone"> Τηλέφωνο </label>
                <input
                  class="newinput"
                  type="text"
                  name="telephone"
                  maxlength="30"
                  size="30"
                />
              </div>
              <div class="formrow_message">
                <label class="newlabel" for="comments"> Μήνυμα </label>
                <textarea
                  class="newinput_message"
                  name="comments"
                  cols="25"
                  rows="6"
                ></textarea>
              </div>
              <div class="formrow">
                <input class="submit_button" type="submit" value="Submit" />
              </div>
            </div>
            <div id="contactMsg"></div>
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

.txt {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  text-align: left;
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
</style>
