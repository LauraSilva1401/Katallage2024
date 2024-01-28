<template>
  <section id="services">

      <a class="title" href="#">

      <img :src="'../img/Services/KWCWholeness.png'" class="img-fluid servicesTitle" alt="KWC WHOLENESS">

      </a>

      <div class="row row-cols-1 row-cols-md-6 g-4">


        <div class="col">
          <div class="card h-100">
            <img :src="'../img/Services/Functional.png'" class="card-img-top" alt="...">
            <div class="card-img-overlay">
              <h3 class="card-title">Integrative Anthroposophical Medicine</h3>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img :src="'../img/Services/CancerPreventionAndSupportiveCare.png'" class="card-img-top" alt="...">
            <div class="card-img-overlay">
              <h3 class="card-title">Cancer Prevention & Supportive Care</h3>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img :src="'../img/Services/WeightLossandSarcopenia.png'" class="card-img-top" alt="...">
            <div class="card-img-overlay">
              <h3 class="card-title">Weight Loss & Sarcopenia</h3>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img :src="'../img/Services/IVTherapy2.png'" class="card-img-top" alt="...">
            <div class="card-img-overlay">
              <h3 class="card-title">IV Therapy</h3>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img :src="'../img/Services/SMART.png'" class="card-img-top" alt="...">
            <div class="card-img-overlay">
              <h3 class="card-title">SMART</h3>
              
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img :src="'../img/Services/ChronicInfectiousDiseases.png'" class="card-img-top" alt="...">
            <div class="card-img-overlay">
              <h3 class="card-title">Chronic Infectious Diseases</h3>
              
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
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}


.card-title {
    color:#FFF;
    font-size: 15px;
    text-align: center;

}

.card{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
}

@media (max-width: 767px) { /* Adjust for smaller devices */

.title{
    width: 100%;
}
}





</style>