<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="about-us">
            <button @click="toggleAboutUsBtn">About us</button>
          </router-link>
        </li>
        <li>
          <router-link to="book-lesson">
            <button @click="toggleBookLessonBtn" class="book-lesson-btn">
              Book a lesson
            </button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      showBookLessonBtn: true,
      showAboutUsBtn: true,
    };
  },
  methods: {
    toggleAboutUsBtn() {
      this.showBookLessonBtn = !this.showBookLessonBtn;
      this.showAboutUsBtn = !this.showAboutUsBtn;
    },
    toggleBookLessonBtn() {
      this.showBookLessonBtn = !this.showBookLessonBtn;
      this.showAboutUsBtn = !this.showAboutUsBtn;
    },
  },
};
</script>

<style scoped>
button {
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  margin-left: 30rem;
  margin-top: 10rem;
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

.book-lesson-btn {
  margin-left: 75rem;
}
</style>
