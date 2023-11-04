<template>
  <div class="baner">
    <div class="col-5">
      <p>Найкращі бургери в місті</p>
      <h2>Joe-burger</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
        assumenda?
      </p>
      <button>Перейти до меню</button>
    </div>
  </div>
  <div class="about-us">
    <div class="col-4">
      <p>Про нас</p>
      <h2>Ми готуємо для вас</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quas
        ipsam, ea hic autem dolores reiciendis error saepe! Amet voluptatum
        commodi tempora quod numquam officiis libero veniam minima, iste unde?
      </p>
      <button>Докладніше</button>
    </div>
    <div class="col">
      <img
        src="../assets/pexels-aleksandar-ljubicic-4809147.jpg"
        width="500px"
      />
    </div>
  </div>
  <div class="our-team container">
    <h1>Наша команда</h1>
    <img src="../assets/pexels-cottonbro-studio-4253712.jpg" width="300px" />
    <img src="../assets/pexels-los-muertos-crew-8477419.jpg" width="300px" />
    <img src="../assets/pexels-jonathan-borba-3877675.jpg" width="300px" />
  </div>
  <statistic-component />
  <div class="menu">
    <h1>Наше меню</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
      quaerat fugiat aut eligendi! Quidem quo architecto laudantium ratione eum,
      omnis veniam maiores amet accusamus saepe, in, harum iusto ducimus.
      Dolore.
    </p>
    <div class="container">
      <div class="col">
        <img
          src="../assets/pexels-kristina-paukshtite-1998927.jpg"
          width="300px"
        />
        <button>Бургери</button>
      </div>
      <div class="col">
        <img src="../assets/pexels-marco-fischer-115740.jpg" width="300px" />
        <button>Картопля</button>
      </div>
      <div class="col">
        <img src="../assets/pexels-denys-gromov-12916901.jpg" width="300px" />
        <button>Фрітюр</button>
      </div>
      <div class="col">
        <img src="../assets/pexels-nasim-didar-9584962.jpg" width="300px" />
        <button>Напої</button>
      </div>
    </div>
  </div>
  <reviews-component />
</template>
<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import StatisticComponent from "@/components/StatisticComponent.vue";
import ReviewsComponent from "@/components/ReviewsComponent.vue";
export default {
  name: "HomePage",
  components: {
    StatisticComponent,
    ReviewsComponent,
  },
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
.baner {
  background: url("../assets/pexels-valeria-boltneva-1639562.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .col-5 {
    color: white;
    padding: 260px 15px;
    margin-left: 180px;
    p {
      font-size: 25px;
    }
    h2 {
      font-size: 60px;
    }
    button {
      margin: 15px;
      border-radius: 25px;
      padding: 10px 20px;
      background-color: blueviolet;
      color: white;
    }
  }
}
.about-us {
  background-color: rgb(38, 32, 65);
  display: flex;
  flex-direction: row;
  .col-4 {
    color: white;
    padding: 260px 15px;
    margin-left: 180px;
    p {
      font-size: 18px;
    }
    h2 {
      font-size: 40px;
    }
    button {
      margin: 15px;
      border-radius: 25px;
      padding: 10px 20px;
      background-color: rgb(255, 255, 255);
      color: rgb(71, 39, 101);
    }
  }
  img {
    margin: 150px 30px auto 70px;
  }
}
.our-team {
  margin: 40px auto;
  img {
    margin: 5%;
  }
}
.menu {
  background-color: rgb(38, 32, 65);
  color: white;
  padding-bottom: 80px;
  .container {
    display: flex;
    flex-direction: row;
    margin: 20px auto;
    .col {
      margin: 10px;
      button {
        margin-top: 20px;
        width: 100%;
        border-radius: 25px;
        padding: 10px 20px;
        background-color: blueviolet;
        color: white;
      }
    }
  }
  h1 {
    padding: 40px;
  }
  p {
    margin: 0 250px;
  }
}
</style>
