<template>
  <!-- ***** - texts boxes - ***** -->
  <div class="grid-container">
    <div class="grid-item">
      <!--.grid-item-->
      <div class="txt-title">Get For Homme</div>
      <!--.icon-->
      <div class="icon_title"><i class="fa fa-motorcycle fa-lg"></i></div>
      <!--/.icon-->
      <!--/.txt-title-->
      <div class="txt">
        Enjoy American cuisine from the buffet while meeting characters at the
        Supercalifragilistic Breakfast, Wonderland Tea Party or Cinderella's
        Happily Ever After Dinner. call us for +1 555 666 555 or get an email
        reservation
      </div>
      <!--/.txt-->
    </div>
    <!--/grid-item-->
    <div class="grid-item">
      <!--.grid-item-->
      <div class="txt-title">Breakfest</div>
      <!--.icon-->
      <div class="icon_title"><i class="fa fa-bed fa-lg"></i></div>
      <!--/.icon-->
      <!--/.txt-title-->
      <div class="txt">
        Enjoy American cuisine from the buffet while meeting characters at the
        Supercalifragilistic Breakfast, Wonderland Tea Party or Cinderella's
        Happily Ever After Dinner. call us for +1 555 666 555 or get an email
        reservation
      </div>
      <!--/.txt-->
    </div>
    <!--/grid-item-->
    <div class="grid-item">
      <!--.grid-item-->
      <div class="txt-title">Business lunch</div>
      <!--.icon-->
      <div class="icon_title"><i class="fa fa-briefcase fa-lg"></i></div>
      <!--/.icon-->
      <!--/.txt-title-->
      <div class="txt">
        Enjoy American cuisine from the buffet while meeting characters at the
        Supercalifragilistic Breakfast, Wonderland Tea Party or Cinderella's
        Happily Ever After Dinner. call us for +1 555 666 555 or get an email
        reservation
      </div>
      <!--/.txt-->
    </div>
    <!--/grid-item-->
  </div>
  <!--/grid-container-->
</template>

<script></script>

<style scoped>
@import "../styles/style.css";

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 4rem;
  margin-top: 2rem;
  margin-left: 20rem;
  margin-right: 20rem;
}

@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; /* Change to a single column layout for smaller screens */
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

.txt-title {
  font-size: 40px;
}

.txt {
  font-size: 16px;
}
</style>
