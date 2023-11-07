<template>
  <div class="d-flex flex-row">
    <div class="image col-6">
      <img
        src="../assets/pexels-kristina-paukshtite-1998927.jpg"
        width="400px"
      />
    </div>
    <div class="info col-6">
      <h2>Грильований курячий бургер</h2>
      <div class="d-flex flex-row justify-content-between">
        <input type="number" defaultValue="1" />
        <p>200 грн</p>
        <button class="btn btn-warning">Замовити</button>
      </div>
      <div>
        <h5>Склад</h5>
        <p>
          котлета з яловичини, помідор, сир Чедер, цибуля Марс, корнішони, салат
          Айсберг, вершкове масло, соус пікантний.
        </p>
        <p>Вага: 200 г</p>
        <p>Кількість в порціх: 1</p>
      </div>
    </div>
  </div>
  <reviews-component />
</template>
<script lang="ts">
import ReviewsComponent from "@/components/ReviewsComponent.vue";
export default {
  name: "MenuItemPage",
  components: {
    ReviewsComponent,
  },
};
</script>
<style scoped lang="scss">
.image {
  padding: 50px;
  padding-left: 250px;
}
.info {
  padding: 50px;
  input {
    width: 40px;
  }
}
</style>
