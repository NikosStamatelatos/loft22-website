<template>
  <div>
    <the-header title="Welcome"></the-header>
    <router-view v-slot="slotProps">
      <transition name="route">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "./layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani&display=swap");

* {
  box-sizing: border-box;
  list-style: none;
}

html {
  font-family: "Rajdhani", sans-serif;
}

body {
  margin: 0;
  /* text-align: center; */
  background-color: rgb(34, 34, 34);
}

/* .fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s steps;
}

.fade-button-leave-active {
  transition: opacity 0.3s steps;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
} */

.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  animation: slide-scale 1s ease-in 0s 1 normal forwards;
}

.route-enter-to {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
