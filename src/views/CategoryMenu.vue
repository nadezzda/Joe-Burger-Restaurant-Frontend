<!-- eslint-disable vue/require-v-for-key -->
<template>
  <categories-menu />
  <h1>Найсмачніші бургери</h1>
  <div>
    <select id="sort">
      <option value="lowPrice">Спочатку дешеві</option>
      <option value="highPrice">Спочатку дорогі</option>
      <option value="new">Спочатку новинки</option>
    </select>
  </div>
  <div class="list col-8">
    <div v-for="menuItem in menu">
      <menu-item-card
        :name="menuItem.name"
        :price="menuItem.price"
        :width="menuItem.width"
        :old-price="menuItem.old_price"
        :image="menuItem.image"
      />
    </div>
  </div>
  <reviews-component />
</template>
<script lang="ts">
import CategoriesMenu from "@/components/CategoriesMenu.vue";
import MenuItemCard from "@/components/MenuItemCard.vue";
import ReviewsComponent from "@/components/ReviewsComponent.vue";
export default {
  name: "CategoryMenu",
  components: {
    CategoriesMenu,
    MenuItemCard,
    ReviewsComponent,
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
      ],
    };
  },
};
</script>
<style>
h1 {
  text-align: center;
  padding-top: 40px;
}
#sort {
  padding: 12px;
  border-radius: 8px;
  margin-left: 75%;
}
.list {
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
