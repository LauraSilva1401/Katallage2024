<template>

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
       
      <img :src="'../img/Slider/3.png'" class="d-block w-100" alt="...">

      <div class="carousel-caption d-none d-md-block">
        <!--<h1>Discover IV Treatments</h1>
        <p>Revolutionize your well-being</p> -->
      </div>
      
    </div>
    <div class="carousel-item">
      <img :src="'../img/Slider/4.png'" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>Non-IV Treatments</h1>
        <p>Renew your inner balance</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="'../img/Slider/5.png'" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>IV Treatments</h1>
        <p>You will love it!</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</template>

<style scoped>

.carousel{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
}

h1 {
  font-size: 50px;
}

p {
  font-size: 25px;
}


</style>

 

