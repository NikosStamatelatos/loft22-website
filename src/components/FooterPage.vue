<template>
  <!--/.index-blocks-->
  <div class="wrapper">
    <div class="index-blocks">
      <!--.index-blocks-->
      <div class="grid_half">
        <!--.grid_half-->
        <div class="txt-title">Address:</div>
        <!--/.txt-title-->
        <!--.icon-->
        <div class="icon_title"><i class="fa fa-users fa-lg"></i></div>
        <!--/.icon-->
        <!--.txt-->
        <div class="txt contact_new">
          <p class="fa fa-home fa-lg contact_icon"></p>
          <p>
            123 Main Street city, AB 0123<br />
            345 Not Main Street city, CD 4567
          </p>
          <p class="fa fa-phone fa-lg contact_icon"></p>
          <p>
            Information: +222 111 2222 <br />
            Advertising: +111 222 111 www.example.com
          </p>
          <p class="fa fa-envelope fa-lg contact_icon"></p>
          <p>
            info@example.com <br />
            heremail@example.com
          </p>
        </div>
        <!--/.txt-->
        <div class="txt-title">Find Us:</div>
        <!--/.txt-title-->
        <!-- ***** - social icons - ***** -->
        <div class="txt">
          <div class="social full_center">
            <a href="#" class="fa fa-google-plus fa-2x"> </a>
            <a href="#" class="fa fa-behance fa-2x"> </a>
            <a href="#" class="fa fa-facebook fa-2x"> </a>
            <a href="#" class="fa fa-youtube-play fa-2x"> </a>
            <a href="#" class="fa fa-skype fa-2x"> </a>
            <a href="#" class="fa fa-twitter fa-2x"> </a>
            <a href="#" class="fa fa-pinterest fa-2x"> </a>
            <div class="clear"></div>
          </div>
        </div>
        <!--/.social-->

        <!--/.txt-->
      </div>
      <!--/.grid_half-->
      <div class="grid_half">
        <!--.grid_half-->
        <div class="txt-title">Send me mail</div>
        <!--/.txt-title-->
        <!--.icon-->
        <div class="icon_title"><i class="fa fa-users fa-lg"></i></div>
        <!--/.icon-->
        <!--.txt-->
        <div class="txt">
          <form id="contactForm" action="#">
            <div class="formrow">
              <label class="newlabel" for="first_name"> First Name * </label>
              <input
                class="newinput"
                type="text"
                name="first_name"
                maxlength="50"
                size="30"
              />
            </div>
            <div class="formrow">
              <label class="newlabel" for="last_name"> Last Name * </label>
              <input
                class="newinput"
                type="text"
                name="last_name"
                maxlength="50"
                size="30"
              />
            </div>
            <div class="formrow">
              <label class="newlabel" for="email"> Email * </label>
              <input
                class="newinput"
                type="text"
                name="email"
                maxlength="80"
                size="30"
              />
            </div>
            <div class="formrow">
              <label class="newlabel" for="telephone"> Phone </label>
              <input
                class="newinput"
                type="text"
                name="telephone"
                maxlength="30"
                size="30"
              />
            </div>
            <div class="formrow_message">
              <label class="newlabel" for="comments"> Message * </label>
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
          </form>
          <div id="contactMsg"></div>
        </div>
      </div>
      <!--/.grid_half-->
    </div>
  </div>
  <!--/.index-blocks-->
  <!-- ***** - credits - ***** -->
  <p id="credits">Copyright 2023</p>
</template>

<script></script>

<style scoped>
@import "../styles/style.css";

.wrapper {
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#credits {
  text-align: center;
  margin-bottom: 10px;
  margin-top: px;
}
</style>
