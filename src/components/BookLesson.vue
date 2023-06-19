<template>
  <div>
    <empty-fields-message
      :open="inputIsInvalid"
      title="Empty Input"
      @close="inputIsInvalid = false"
    >
      <p class="textEmpty">Please fill all empty fields!</p>
      <button class="ok-button" @click="inputIsInvalid = false">Okay</button>
    </empty-fields-message>
    <form @submit.prevent="newInput">
      <div class="name">
        Name:
        <input type="name" v-model="name" />
      </div>
      <div class="email">
        E-mail:
        <input type="email" v-model="email" />
      </div>
      <div class="phone">
        Phone Number:
        <input type="phone" v-model="phoneNumber" />
      </div>
      <div class="date">
        <label for="date-input">Date:</label>
        <input type="date" :min="minDate" v-model="date" />
      </div>
      <button class="book-btn" type="submit" @click.prevent="bookClicked">
        Book
      </button>
      <button class="clear-btn" type="submit" @click.prevent="clearClicked">
        Clear
      </button>
    </form>
  </div>
</template>

<script>
import EmptyFieldsMessage from "../components/EmptyFieldsMessage.vue";

export default {
  components: {
    EmptyFieldsMessage,
  },
  data() {
    return {
      // id: "",
      name: "",
      email: "",
      phoneNumber: "",
      date: "",
      minDate: new Date().toISOString().split("T")[0],
      showForm: false,
      inputIsInvalid: false,
    };
  },
  emits: ["close"],
  methods: {
    newInput() {
      if (!this.name || !this.email || !this.phoneNumber || !this.date) {
        this.inputIsInvalid = true;
      } else {
        // Perform the desired action when all fields are filled
      }
    },
    bookClicked() {
      this.buttonClicked = "book";
      this.validateFields();
    },
    clearClicked() {
      this.buttonClicked = "clear";
      this.validateFields();
      this.clearInputs();
    },
    validateFields() {
      if (
        this.buttonClicked === "book" &&
        (!this.name || !this.email || !this.phoneNumber || !this.date)
      ) {
        this.inputIsInvalid = true;
      } else {
        this.inputIsInvalid = false;
      }
    },
    clearInputs() {
      this.name = "";
      this.email = "";
      this.phoneNumber = "";
      this.date = "";
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
.date,
.phone {
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

input[type="name"],
input[type="email"],
input[type="date"],
input[type="phone"] {
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

.ok-button {
  --bg: #e66152;
  --text-color: #fff;
  position: relative;
  width: 150px;
  border: none;
  background: var(--bg);
  color: var(--text-color);
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: 0.8;
  letter-spacing: 1px;
  box-shadow: #e66152 0px 7px 2px, #000 0px 8px 5px;
}

.ok-button:hover {
  opacity: 1;
}

.ok-button:active {
  top: 4px;
  box-shadow: #c0392b 0px 3px 2px, #000 0px 3px 5px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
