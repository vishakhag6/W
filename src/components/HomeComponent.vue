<template>
  <div>
    <HeaderComponent @search_on_change="onInputSearch"/>
    <div class="products">
      <div class="products__section" v-for="(widget, i) in filteredList" v-bind:key="i">
        <h1 class="products__heading">{{widget.title}}</h1>
        <div class="card">
          <div
            v-on:click="goToCategory(item.slug)"
            class="card__header"
            v-for="(item, index) in widget.items"
            v-bind:key="index"
          >
            <div class="card__img-box">
              <p class="card__img">
                <img v-bind:src="item.image.placeholder" alt width="100">
              </p>
              <small class="badge">{{item.itemCount}}</small>
            </div>
            <p class="card__heading">{{item.category}}</p>
            <p class="card__timings">3Hrs ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";

export default {
  name: "Home",
  components: {
    HeaderComponent
  },

  data() {
    return {
      search: "",
      widgets: [
        {
          title: "Naye products",
          items: [
            {
              id: 12,
              slug: "home-items",
              category: "Ghar ka samaan",
              image: {
                placeholder: "https://via.placeholder.com/24",
                mobile: "https://via.placeholder.com/280"
              },
              itemCount: 5
            },
            {
              id: 13,
              slug: "office-goods",
              category: "Office ke liye Leather bags",
              image: {
                placeholder: "https://via.placeholder.com/24",
                mobile: "https://via.placeholder.com/280"
              },
              itemCount: 3
            },
            {
              id: 14,
              slug: "kitchen-chopper",
              category: "Kitchen Chopper",
              image: {
                placeholder: "https://via.placeholder.com/24",
                mobile: "https://via.placeholder.com/280"
              },
              itemCount: 2
            }
          ]
        },
        {
          title: "Dekhe hue products",
          items: [
            {
              id: 12,
              slug: "home-items",
              category: "Ghar ka samaan",
              image: {
                placeholder: "https://via.placeholder.com/24",
                mobile: "https://via.placeholder.com/280"
              },
              itemCount: 2
            },
            {
              id: 13,
              slug: "office-goods",
              category: "Office ke liye Leather bags",
              image: {
                placeholder: "https://via.placeholder.com/24",
                mobile: "https://via.placeholder.com/280"
              },
              itemCount: 4
            },
            {
              id: 14,
              slug: "kitchen-chopper",
              category: "Kitchen Chopper",
              image: {
                placeholder: "https://via.placeholder.com/24",
                mobile: "https://via.placeholder.com/280"
              },
              itemCount: 1
            }
          ]
        }
      ]
    };
  },

  methods: {
    onInputSearch: function(value) {
      console.log(value, "-> emitted value");
      this.search = value;
    },

    goToCategory: function(cat_slug) {
      this.$router.push(`category/${cat_slug}`);
    }
  },

  computed: {
    filteredList() {
      return this.widgets.filter(search_filter => {
        return search_filter.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style lang="scss">
.products {
  padding: 12px 30px;

  &__section {
    width: 100%;
  }

  &__section + &__section {
    margin-top: 20px;
  }

  &__heading {
    margin: 10px 12px;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
