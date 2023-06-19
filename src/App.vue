<template>
  <div>
    <the-header></the-header>
    <transition name="route">
      <router-view v-slot="slotProps">
        <component :is="slotProps.Component"></component>
      </router-view>
    </transition>
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

  background-color: rgb(34, 34, 34);
}

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
