<template>
  <app-header />
  <router-view />
  <app-footer />
</template>
<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style>
* {
  margin: 0;
  box-sizing: border-box;
}
</style>
