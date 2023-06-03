<template>
  <form>
    <div class="name">
      Name:
      <input type="name" />
    </div>
    <div class="email">
      E-mail:
      <input type="email" />
    </div>
    <div class="date">
      Date:
      <input type="date" />
    </div>
    <button class="book-btn" type="submit">Book</button>
    <button class="clear-btn" type="submit">Clear</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>

<style scoped>
form {
  background-color: #444444;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  margin: 50px auto;
  margin-top: 7rem;
}

.name,
.email,
.date {
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

input[type="name"],
input[type="email"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  margin-top: 5px;
  background-color: #333333;
  color: white;
  font-weight: bold;
}

.book-btn {
  --glow-color: rgb(176, 255, 189);
  --glow-spread-color: rgba(123, 255, 160, 0.781);
  --enhanced-glow-color: rgb(182, 175, 71);
  --btn-color: black(13, 241, 21, 0.508);
  border: 0.25em solid var(--glow-color);
  padding: 1em 2em;
  color: var(--glow-color);
  font-size: 14px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  margin-top: 1.5rem;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.05em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
}

.book-btn::after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--glow-spread-color);
  filter: blur(2em);
  opacity: 0.7;
  transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
}

.book-btn:hover {
  color: var(--btn-color);
  background-color: var(--glow-color);
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 2em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
}

.book-btn:active {
  box-shadow: 0 0 0.6em 0.25em var(--glow-color),
    0 0 2.5em 2em var(--glow-spread-color),
    inset 0 0 0.5em 0.25em var(--glow-color);
}

.clear-btn {
  --glow-color: rgb(255, 176, 176);
  --glow-spread-color: rgba(255, 123, 123, 0.781);
  --enhanced-glow-color: rgb(182, 175, 71);
  --btn-color: black(241, 13, 13, 0.508);
  border: 0.25em solid var(--glow-color);
  padding: 1em 2em;
  color: var(--glow-color);
  font-size: 14px;
  margin-left: 4rem;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.05em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
}

.clear-btn::after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--glow-spread-color);
  filter: blur(2em);
  opacity: 0.7;
  transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
}

.clear-btn:hover {
  color: var(--btn-color);
  background-color: var(--glow-color);
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 2em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
}

.clear-btn:active {
  box-shadow: 0 0 0.6em 0.25em var(--glow-color),
    0 0 2.5em 2em var(--glow-spread-color),
    inset 0 0 0.5em 0.25em var(--glow-color);
}
</style>
