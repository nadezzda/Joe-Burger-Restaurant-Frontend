<template>
  <div class="product col" :style="{ backgroundImage: `url(${image})` }">
    <h3 id="name">
      <a href="/menu-item">{{ name }}</a>
    </h3>
    <p id="price">
      <span>{{ price }}грн</span>{{ oldPrice }}грн
    </p>
    <p id="weight">{{ width }}г</p>
    <button class="btn btn-warning">Замовити</button>
  </div>
</template>
<script lang="ts">
export default {
  name: "MenuItemCard",
  props: {
    name: String,
    price: Number,
    width: Number,
    oldPrice: Number,
    image: String,
  },
};
</script>
<style lang="scss" scoped>
.product {
  padding: 20px;
  margin: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  color: white;
  width: 400px;
  #price {
    color: rgb(243, 117, 117);
    font-size: 25px;
    bottom: 10px;
    span {
      text-decoration: line-through;
      color: aliceblue;
      font-size: 20px;
    }
  }
}
</style>
