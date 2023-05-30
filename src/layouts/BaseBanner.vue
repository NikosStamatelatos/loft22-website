<template>
  <h1 class="banner">
    <h1>{{ title }}</h1>
  </h1>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 10rem;
  background-color: rgb(36, 36, 36);
  border-bottom: 2px solid rgb(182, 113, 221);
  display: flex;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  justify-content: center;
  align-items: center;
  box-shadow: 0 20px 80px rgb(182, 113, 221);
}

.banner h1 {
  color: white;
  margin: 0;
}
</style>
