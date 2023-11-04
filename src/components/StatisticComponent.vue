<template>
  <div class="statistic">
    <div class="col">
      <h1>100500 <br />смачних <br />бургерів</h1>
    </div>
    <div class="col">
      <h1>
        3<br />
        роки
      </h1>
    </div>
    <div class="col">
      <h1>2 <br />заклади</h1>
    </div>
    <div class="col">
      <h1>
        100500<br />
        задоволених <br />клієнтів
      </h1>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "StatisticComponent",
};
</script>
<style scoped lang="scss">
.statistic {
  display: flex;
  flex-direction: row;
  background: url("../assets/pexels-engin-akyurt-2271106.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 20px;
  text-align: center;
  .col {
    font-size: 25px;
    color: white;
    margin: 100px auto 60px;
  }
}
</style>
