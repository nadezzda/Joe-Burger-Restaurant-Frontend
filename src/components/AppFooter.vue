<template>
  <footer>
    <p>Створено <a href="https://github.com/nadezzda">Надією</a></p>
  </footer>
</template>

<script lang="ts">
export default {
  name: "AppFooter",
};
</script>

<style>
footer {
  background-color: blueviolet;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  text-align: center;
}
p {
  margin: 8px;
}
</style>
