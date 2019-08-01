<template>
  <div>
    <div class="category">
      <div class="category__inner">
        <div class="category__header">
          <router-link :to="{ name: 'Home' }" class="back-icon"></router-link>
          <h1 class="category__heading">{{show_category_data.category}}</h1>
          <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide
              class="swiper-item"
              v-for="(d, index) in show_category_data.items"
              v-bind:key="index"
            >
              <img v-bind:src="d.image.mobile" alt>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Category",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      category_data: {
        id: 13,
        slug: "office-goods",
        category: "Office ke liye Leather bags",
        items: [
          {
            image: {
              placeholder: "https:\u002F\u002Fvia.placeholder.com\u002F24",
              mobile:
                "https:\u002F\u002Fhomepages.cae.wisc.edu\u002F~ece533\u002Fimages\u002Ffruits.png"
            },
            title: "Designer Necklace with stones",
            slug: "item-1",
            price: 400
          },
          {
            image: {
              placeholder: "https:\u002F\u002Fvia.placeholder.com\u002F24",
              mobile:
                "https:\u002F\u002Fhomepages.cae.wisc.edu\u002F~ece533\u002Fimages\u002Ffrymire.png"
            },
            title: "American Diamond necklace",
            slug: "item-2",
            price: 500
          },
          {
            image: {
              placeholder: "https:\u002F\u002Fvia.placeholder.com\u002F24",
              mobile:
                "https:\u002F\u002Fhomepages.cae.wisc.edu\u002F~ece533\u002Fimages\u002Fairplane.png"
            },
            title: "Placeholder text",
            slug: "item-3",
            price: 650
          },
          {
            image: {
              placeholder: "https:\u002F\u002Fvia.placeholder.com\u002F24",
              mobile:
                "https:\u002F\u002Fhomepages.cae.wisc.edu\u002F~ece533\u002Fimages\u002Fgoldhill.png"
            },
            title: "Placeholder text",
            slug: "item-4",
            price: 540
          }
        ]
      },
      show_category_data: {},
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        }
      }
    };
  },
  mounted: function() {
    this.show_category_data = this.category_data;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.back-icon {
  background: url("../assets/left-arrow.svg");
  width: 34px;
  height: 34px;
  display: inline-block;
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-right: 12px;
}
.category {
  background: #000;
  height: 100vh;
  color: #fff;
  padding: 12px;
  box-sizing: border-box;

  &__heading {
    display: inline-block;
    vertical-align: middle;
  }
}

.swiper-box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.swiper-item {
  height: 388px;
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
