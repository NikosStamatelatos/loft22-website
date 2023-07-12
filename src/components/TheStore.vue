<template>
  <router-link to="/find-us"></router-link>
  <empty-field-newsletter
    :open="inputIsInvalid"
    title="Παρακαλούμε συμπληρώστε το πεδίο με το mail σας!"
    @close="inputIsInvalid = false"
  >
  </empty-field-newsletter>
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
          <form @submit.prevent="submitForm">
            <div class="company">
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
        <!--/.txt-->

        <!--/.txt-->
      </div>
      <!--/.grid_half-->
      <div class="grid_half">
        <!--.grid_half-->
        <div class="company-title">Στείλτε μας μήνυμα</div>
        <!--/.txt-title-->
        <!--.icon-->
        <div class="icon_title"><i class="fa fa-users fa-lg"></i></div>
        <!--/.icon-->
        <!--.txt-->
        <div class="txt">
          <form id="contactForm" action="#">
            <div class="formrow">
              <label class="newlabel" for="first_name"> Όνομα * </label>
              <input
                class="newinput"
                type="text"
                name="first_name"
                maxlength="50"
                size="30"
              />
            </div>
            <div class="formrow">
              <label class="newlabel" for="last_name"> Επίθετο * </label>
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
              <label class="newlabel" for="comments"> Μήνυμα * </label>
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
export default {
  mounted() {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
  },
};
</script>

<style scoped>
.icon_title {
  margin-bottom: 3rem;
}

.send-btn {
  height: 40px;
  width: 30%;
  margin-left: 36%;
  display: block;
  cursor: pointer;
}
</style>
