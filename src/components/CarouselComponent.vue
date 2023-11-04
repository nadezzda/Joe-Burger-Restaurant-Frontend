<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/pexels-jonathan-borba-2983101.jpg"
          class="d-block w-100"
          alt="..."
          height="700px"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../assets/pexels-robin-stickel-70497.jpg"
          class="d-block w-100"
          alt="..."
          height="700px"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../assets/pexels-dana-tentis-750073.jpg"
          class="d-block w-100"
          alt="..."
          height="700px"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "CarouselComponent",
};
</script>
