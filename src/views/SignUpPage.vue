<template>
  <div>
    <h1>Зареєструватись</h1>
    <form>
      <input type="text" placeholder="Введіть своє ім'я" />
      <input type="email" placeholder="Введіть свій email" />
      <input type="password" placeholder="Придумайте пароль" />
      <button class="btn btn-info">Зареєструватись</button>
    </form>
    <p>Вже є акаунт? <a href="/login">Увійди</a></p>
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
    text-align: center;
    padding-top: 200px;
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
    padding-top: 5.5%;
    padding-bottom: 10%;
  }
}
</style>
