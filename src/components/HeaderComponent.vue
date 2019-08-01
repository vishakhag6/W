<template>
  <header class="header">
    <div class="header__container">
      <router-link :to="{ name: 'Home' }" class="header__logo"></router-link>
      <div class="search">
        <div class="search__container">
          <form>
            <input
              class="search__box"
              autofocus
              type="search"
              placeholder="Search"
              v-model="search_input"
              v-on:keyup="keymonitor(search_input)"
            >
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    msg: String
  },

  data() {
    return {
      search_input: ""
    };
  },

  methods: {
    keymonitor: function(val) {
      this.$emit("search_on_change", val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background: #409788;
  padding: 12px;

  &__container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__logo {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border: 1px solid #fff;
    background: #000;
    background-size: cover;
  }
}

.search {
  padding-left: 18px;
  width: 100%;

  &__box {
    border-radius: 6px;
    height: 50px;
    width: 100%;
    border: none;
    padding: 0 20px;
    box-sizing: border-box;
    background: url("../assets/search.svg") #fff;
    background-repeat: no-repeat;
    background-position: 96%;
    background-size: 18px;
  }
}
</style>
