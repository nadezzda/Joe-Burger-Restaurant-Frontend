<template>
  <header>
    <nav>
      <img src="logo.jpg" alt="logo" width="50px" />
      <a href="/">Головна</a>
      <a href="/menu">Меню</a>
      <a href="/restaurants">Заклади</a>
      <a href="/login">Увійти</a>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
};
</script>

<style>
header {
  display: flex;
  background-color: rgb(50, 68, 68);
}
nav {
  margin: auto;
  padding: 8px;
  width: 80%;
  text-align: center;
}
a {
  color: white;
  margin: 8px;
}
</style>
