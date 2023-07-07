<template>
  <div v-if="open" @click="$emit('close')"></div>
  <transition name="modal">
    <dialog :open="open" v-show="open">
      <h2 class="empty-title">{{ title }}</h2>
      <section class="modal-content">
        <slot></slot>
      </section>
      <menu>
        <slot name="actions"></slot>
      </menu>
      <button class="ok-button" @click="$emit('close')">OΚ</button>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    open: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["close"],
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
section.modal-content {
  padding: 1rem;
  color: white;
  font-weight: bold;
  font-size: 10px;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 80px black;
  padding: 0;
  margin: 0;
  margin-top: 5rem;
  overflow: hidden;
  background-color: #9a845d;
  font-size: 14px;
}

/* header {
  background-color: #9a845d;
  color: white;
  width: 100%;
  padding: 1rem;
  font-size: 10px;
}

header h2 {
  margin: 0;
} */

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in reverse;
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

.empty-title {
  /* margin: 0; */
  /* padding: 0; */
  margin-top: 40px;
  font-size: 20px;
  text-align: center;
}

.ok-button {
  color: white;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #474747;
  border: 1px solid #474747;
  transition: all 0.3s;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  /* box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; */
}

.ok-button:active {
  color: #ffffff;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}
</style>
