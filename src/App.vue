<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
@import "../node_modules/swiper/dist/css/swiper.css";
body,
html {
  height: 100%;
}

html {
  box-sizing: border-box;
  height: 100%;
}

body {
  height: 100%;
  min-height: 100vh;
  background: #f1f1f1;
  font-family: "Open Sans", sans-serif;
}
</style>