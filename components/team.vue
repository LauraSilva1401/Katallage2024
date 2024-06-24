<template>

  <section id="team">

    <a class="title" href="#">

        <img :src="'../img/Team/OurTeam.png'" class="img-fluid ourteamTitle" alt="OUR TEAM">

    </a>


    <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
      <div class="col">
        <div class="card h-100">
          <img :src="'../img/Team/Henri.png'" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Henri Balaguera, MD</h5>
            <p class="card-text">
              Internal Medicine, Infectious Diseases Specialist.
ABIM Certified.
Functional Medicine and Anthroposophic Medicine practitioner 
            </p>
            <NuxtLink to="/team/henri" class="btn btn-primary" aria-current="page">View More</NuxtLink>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img :src="'../img/Team/Quan.jpeg'" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Quan Zhou</h5>
            <p class="card-text">Acupuncturist - M.S. Human Nutrition <br><br> Coming Soon! </p>
            <NuxtLink to="/team/quan" class="btn btn-primary" aria-current="page">View More</NuxtLink>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img :src="'../img/Team/Nicole.jpg'" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Nicole Speckhard</h5>
            <p class="card-text">Physician Assistant</p>
            <NuxtLink to="/team/nicole" class="btn btn-primary" aria-current="page">View More</NuxtLink>
            <!--<a href="#" class="btn btn-primary">View More</a>-->
          </div>
        </div>
      </div>
      
    
    </div>

  </section>



</template>

<style scoped>


.title {
    width: 25%;
    height: auto;
    padding-top: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.card {
    text-align: center;
    background-color: #f0f0f0;
    border: none;
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
    
}

.card-img-top {
    border-radius: 50%;
    width: 80%;
    margin: 20px;
}

.btn {
    background-color: #89d2c9;
    border: none;
}

@media (max-width: 767px) { /* Adjust for smaller devices */

    .title{
        width: 70%;
    }
}


</style>