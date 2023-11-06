<template>
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
export default {
  name: "ReviewsComponent",
};
</script>
<style scoped lang="scss">
.review {
  padding: 60px;
  h1 {
    text-align: center;
  }
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
