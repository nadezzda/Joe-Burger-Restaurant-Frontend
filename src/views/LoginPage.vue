<template>
  <div>
    <h1>
      Увійти <br />
      в особистий кабінет
    </h1>
    <form>
      <input type="email" placeholder="Введіть свій email" />
      <input type="password" placeholder="Введіть свій пароль" />
      <a href="#">Забули пароль?</a>
      <button class="btn btn-info">Увійти</button>
    </form>
    <p>Немає акаунта? <a href="/sign-up">Зареєструйся</a></p>
  </div>
</template>
<script lang="ts">
export default {
  name: "LoginPage",
};
</script>
<style scoped lang="scss">
div {
  background: url("../assets/pexels-engin-akyurt-2271106.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    color: rgba(255, 255, 255, 0.802);
    padding-top: 200px;
    text-align: center;
    padding-bottom: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    input {
      width: 30%;
      height: 50px;
      padding: 8px;
      margin: 10px auto;
      border-radius: 10px;
    }
    a {
      text-align: right;
      margin-right: 35%;
    }
    button {
      margin: 15px auto;
      width: 30%;
      height: 50px;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.802);
    margin: auto;
    width: 15%;
    padding-top: 6%;
    padding-bottom: 10%;
  }
}
</style>
