<template>
  <div class="calculator">
    <input type="text" v-model="display" readonly>
    <div class="buttons">
      <button v-for="button in buttons" :key="button" @click="handleButtonClick(button)">{{ button }}</button>
      <button @click="evaluateExpression()">=</button>
      <button @click="clearDisplay()">C</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "",
      buttons: [
        "1", "2", "3", "+",
        "4", "5", "6", "-",
        "7", "8", "9", "*",
        "0", ".", "/", "%"
      ]
    };
  },
  methods: {
    handleButtonClick(button) {
      this.display += button;
    },
    evaluateExpression() {
      try {
        this.display = eval(this.display);
      } catch (error) {
        this.display = "Error";
      }
    },
    clearDisplay() {
      this.display = "";
    }
  }
};
</script>

<style scoped>
.calculator {
  width: 300px;
  margin: 0 auto;
}

.calculator input {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
}

.calculator .buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.calculator button {
  padding: 10px;
  font-size: 18px;
}
</style>