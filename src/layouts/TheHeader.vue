<template>
  <div>
    <h1 class="banner">
      <router-link class="link" to="/">
        <h1>{{ title }}</h1>
      </router-link>
      <router-link to="/about-me">
        <button>About me</button>
      </router-link>
      <router-link to="/book-lesson">
        <button class="book-lesson-btn" @click="toggleForm">
          Book a lesson
        </button>
      </router-link>
    </h1>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  props: ["title"],
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 15rem;
  background-color: rgb(36, 36, 36);
  border-bottom: 2px solid rgb(182, 113, 221);
  display: flex;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 50px rgb(182, 113, 221);
}

.banner h1 {
  color: white;
  margin: 0;
  margin-right: 50rem;
}

.link {
  text-decoration: none;
}

button {
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  margin-left: 8rem;
  margin-top: 0rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px rgb(205, 148, 238);
  -webkit-box-reflect: below 10px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  font-family: "Rajdhani", sans-serif;
}

button:active {
  scale: 0.92;
}

button:hover {
  background: rgb(2, 29, 78);
  background: linear-gradient(
    270deg,
    rgba(2, 29, 78, 0.681) 0%,
    rgb(205, 148, 238) 60%
  );
  color: rgb(4, 4, 38);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in reverse;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
