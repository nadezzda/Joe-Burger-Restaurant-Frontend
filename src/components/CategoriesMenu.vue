<template>
  <div class="categories">
    <div>
      <img height="70px" src="../assets/burger.svg" />
      <p>Бургери</p>
    </div>
    <div>
      <img height="70px" src="../assets/sale.svg" />
      <p>Акції</p>
    </div>
    <div>
      <img height="70px" src="../assets/potato.svg" />
      <p>Картопля</p>
    </div>
    <div>
      <img height="70px" src="../assets/fresh.svg" />
      <p>Напої</p>
    </div>
    <div>
      <img height="70px" src="../assets/chiken.svg" />
      <p>Фрітюр</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "CategoriesMenu",
};
</script>
<style scoped lang="scss">
.categories {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px;
  background-color: rgb(212, 235, 237);
  div {
    display: flex;
    flex-direction: column;
    p {
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
