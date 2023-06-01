<template>
  <div>
    <p>Hello</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("about-us-mounted", this.openAboutUsPage);
  },
  methods: {
    openAboutUsPage() {
      const newWindow = window.open("", "_blank");
      newWindow.document.write("<p>Hello</p>");
      newWindow.document.close();
    },
  },
};
</script>

<style scoped></style>
