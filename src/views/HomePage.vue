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
  <div class="review">
    <h1>Відгуки</h1>
    <div class="single-review">
      <h5>Надія</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ex quam
        perspiciatis commodi alias molestias ratione nesciunt modi repudiandae
        natus nostrum doloremque ad, nobis excepturi tempora aspernatur porro
        placeat itaque.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "HomePage",
};
</script>
<style lang="scss" scoped>
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
.statistic {
  display: flex;
  flex-direction: row;
  background: url("../assets/pexels-engin-akyurt-2271106.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 20px;
  .col {
    font-size: 25px;
    color: white;
    margin: 100px auto 60px;
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
.review {
  padding: 60px;
  .single-review {
    border: 3px solid rebeccapurple;
    width: 60%;
    margin: auto;
    height: 300px;
    padding: 20px;
    h5 {
      text-align: center;
      margin-top: 100px;
    }
    p {
      text-align: center;
    }
  }
}
</style>
