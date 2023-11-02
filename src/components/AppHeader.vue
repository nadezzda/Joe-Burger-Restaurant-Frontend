<template>
  <header>
    <nav>
      <img src="logo.jpg" alt="logo" width="50px" />
      <a href="/">Головна</a>
      <a href="/menu">Меню</a>
      <a href="/restaurants">Заклади</a>
      <a class="btn btn-info" href="/login">Вхід</a>
      <a class="btn btn-info" href="/sign-up">Реєстрація</a>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
};
</script>

<style scoped>
header {
  display: flex;
  background-color: blueviolet;
}
nav {
  margin: auto;
  padding: 8px;
  width: 80%;
  text-align: center;
}
a {
  color: white !important;
  text-decoration: none !important;
  margin: 8px;
}
</style>
