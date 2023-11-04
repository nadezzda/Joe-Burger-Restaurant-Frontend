<!-- eslint-disable vue/require-v-for-key -->
<template>
  <categories-menu />
  <div class="baner">
    <carousel-component />
  </div>
  <h1>Смачні новинки</h1>
  <section class="new">
    <div v-for="menuItem in menu">
      <menu-item-card
        :name="menuItem.name"
        :price="menuItem.price"
        :width="menuItem.width"
        :old-price="menuItem.old_price"
        :image="menuItem.image"
      />
    </div>
  </section>
</template>
<script lang="ts">
import CategoriesMenu from "@/components/CategoriesMenu.vue";
import MenuItemCard from "@/components/MenuItemCard.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";
export default {
  name: "MenuPage",
  components: {
    CategoriesMenu,
    MenuItemCard,
    CarouselComponent,
  },
  data() {
    return {
      menu: [
        {
          name: "Класичний бургер",
          price: 80,
          width: 200,
          old_price: 100,
          image:
            "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Грильований курячий бургер",
          price: 90,
          width: 220,
          old_price: 110,
          image:
            "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Чізбургер",
          price: 85,
          width: 190,
          old_price: 105,
          image:
            "https://images.pexels.com/photos/5175580/pexels-photo-5175580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Картофель фрі",
          price: 40,
          width: 150,
          old_price: 50,
          image:
            "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Цезар салат",
          price: 70,
          width: 250,
          old_price: 90,
          image:
            "https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Кока-Кола",
          price: 20,
          width: 330,
          old_price: 25,
          image:
            "https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Молочний коктейль",
          price: 30,
          width: 300,
          old_price: 35,
          image:
            "https://images.pexels.com/photos/6542764/pexels-photo-6542764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Чікен нагетс",
          price: 60,
          width: 180,
          old_price: 75,
          image:
            "https://images.pexels.com/photos/12916871/pexels-photo-12916871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Салат з тунцем",
          price: 75,
          width: 240,
          old_price: 95,
          image:
            "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  padding: 20px;
}
.new {
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
