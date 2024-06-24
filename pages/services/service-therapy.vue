<template>

<link href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,150;1,150&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,400;1,400&display=swap" rel="stylesheet">


        <div class="container text-center">
            
            <div class="row align-items-center">
                <div class="title col-6 col-md-4 text-left text-fluid">
                    IV Therapy
                </div>
                <div class=" col-6 col-md-2 text-center"> </div>

                <div class="henri col-6 col-md-2 text-center">
                    <img :src="'../img/Henri/Henri3copy.jpg'" class="w-100 rounded-circle  henriprofile" alt="...">
                </div>
                <div class="titleHenri col-6 col-md-4">
                    <Nuxt-link  to="/team/henri" class="specialist-link">
                        Specialist <br>
                        <span class="doctor-name">Henri Balaguera, MD</span>
                    </Nuxt-link>
                </div>
            </div>

            <div class="container text-center  cont1">
            <div class="row align-items-center">

                <div class="col par1">
                    It is used to provide a fast and effective route of administration to ensure that medications or fluids reach the bloodstream quickly and are distributed throughout the body.
                    <br>
                    <br>
                    Intravenous therapy is used in a wide variety of medical situations, such as providing medications for pain relief, administering fluids to rehydrate dehydrated patients, providing nutrients to people who cannot eat or drink adequately, transfusing blood or blood products, and providing specific treatments for various medical conditions.
                    This type of therapy is performed in medical settings, such as hospitals, clinics, doctors' offices or even at home under the supervision of a trained health care professional.
                </div>
            </div>
        </div>



        <div class="text-center">
            <div class="row">
                <div class="col-sm-5 col-md-6 imageOrgange">
                    <img :src="'../img/Services/oranges.png'" class="rounded float-start img-fluid" alt="WHITE FLOWERS FRONT">
                </div>
                <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                    <div class="cont2">
                        <ul class="listCont no-bold list-unstyled">

                            <div class="accordion-item item">
                                <h2 class="accordion-header">
                                    
                                    <button class="btn btnCustom" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                        IV Vitamin C
                                    </button>
                                </h2>
                                <div class="collapse" id="collapse1">
                                    <div class="card card-body cont3">
                                        IV Vitamin C is a treatment where vitamin C is given directly into your bloodstream through an IV drip. This allows for higher levels of vitamin C in your body than taking it by mouth. It's used to boost your immune system, fight infections, reduce inflammation, support cancer treatment, and help with chronic illnesses. This method can provide quicker and more effective results compared to oral supplements.                                    </div>
                                </div>
                            </div>

                            <li class="no-bullets item">
                                <h2 class="accordion-header">
                                    <button class="btn btnCustom" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                        IV Ozone
                                    </button>
                                </h2>
                                <div class="collapse" id="collapse2">
                                    <div class="card card-body cont3">
                                        IV Ozone is a treatment where ozone, a form of oxygen, is infused directly into your bloodstream through an IV drip. This therapy aims to enhance oxygen delivery to your cells, boost your immune system, and help your body fight infections and inflammation. It is often used to improve overall health, support recovery from chronic diseases, and increase energy levels.                                    </div>
                                </div>
                            </li>

                            <li class="no-bullets item">
                                <h2 class="accordion-header  ">
                                    <button class="btn btnCustom" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>    
                                        IV Mistletoe
                                    </button>
                                </h2>
                                <div class="collapse" id="collapse3">
                                    <div class="card card-body cont3">
                                        IV Mistletoe involves administering mistletoe extract directly into your bloodstream through an IV drip. This therapy is commonly used in integrative cancer care to support the immune system, reduce side effects of conventional cancer treatments, and improve quality of life. Mistletoe extract is believed to stimulate the immune system and help the body fight cancer cells.                                    </div>
                                </div>
                            </li>

                            <li class="no-bullets">
                                <h2 class="accordion-header">
                                    <button class="btn btnCustom" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                        IV Alfa Lipoid Acid
                                    </button>
                                </h2>
                                <div class="collapse" id="collapse4">
                                    <div class="card card-body cont3">
                                        IV Alpha Lipoic Acid (ALA) is a treatment where ALA, a powerful antioxidant, is delivered directly into your bloodstream through an IV drip. ALA helps protect your cells from damage, supports liver health, and may improve conditions like diabetic neuropathy and chronic fatigue. This method ensures higher absorption and more immediate effects compared to oral supplements.                                    </div>
                                </div>
                            </li>

                            <li class="no-bullets item">
                                <h2 class="accordion-header">
                                    <button class="btn btnCustom" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                        IV Resveratrol
                                    </button>
                                </h2>
                                <div class="collapse" id="collapse5">
                                    <div class="card card-body cont3">
                                        IV Resveratrol is a treatment that delivers resveratrol, a natural antioxidant found in red wine and certain plants, directly into your bloodstream through an IV drip. This therapy aims to protect your cells from damage, reduce inflammation, and support cardiovascular health. IV administration allows for higher and more effective doses than oral intake, promoting overall wellness and longevity.                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="cont3">
            <div class="row justify-content-center">

                <span class="cont3Title text-center"> Conditions Treated<br> </span>

                <div class="col-12">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-4">
                        <ul>
                            <li>Chronic fatigue</li>
                            <li>Nutritional deficiencies</li>
                            <li>Colds and flu</li>
                            <li>Migraines and headaches</li>
                            <li>Detoxification</li>
                        </ul>
                        </div>
                        <div class="col-12 col-md-4">
                        <ul>
                            <li>Sports performance enhancement</li>
                            <li>Skin improvement</li>
                            <li>Support in cancer treatment</li>
                            <li>Stress and anxiety</li>
                            <li>Postoperative recovery</li>
                        </ul>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
      

        <a class="frontImage" href="#">

            <img :src="'../img/Services/white-flowers.png'" class="img-fluid flowers" alt="WHITE FLOWERS FRONT">

        </a>

    </div>

        
    
</template>





<style scoped>

.listCont{
    font-weight: 100;
    /*font-style: ;*/
}
svg{
    color: #efcbc9;
}
.btnCustom{
    color:  #3783E4;
}
.btnCustom:hover,
.btnCustom:focus,
.btnCustom:active {
  color: #3783E4;
}

.btnCustom:focus {
  outline: none;
  box-shadow: none;
}
        
    

.title{
    color:  #3783E4;
    text-align: left;
    font-size: 3rem;
}



.container{
    margin-top: 12%;
    font-family: "MuseoModerno", sans-serif;
    font-weight: 100;
    font-size: large;
}

.titleHenri {
    color:  #3783E4;
    background-color: #e7fffe;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 20px;
    text-align: left;
    font-size: 1.5rem;
    margin:  auto;

}

.cont3Title{
    color:  #3783E4;
    padding-bottom: 2%;
    font-weight: 400;
    font-size: 150%;
}
.cont2{
    margin-top: 10%;
    padding-top: 20%;
    padding-bottom: 20%;
    text-align: left;
    padding: 10px;
    border-radius: 30px; 
}

.cont1 {
    background-color: #efcbc9;
    padding: 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 30px;    
}

.icon{
    font-size: xxx-large;
}
.cont3{
    margin-top: 0%;
    text-align: left;
    background-color: #F5EDF0;  
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 30px; 
}
ul {
    padding: 0;            /* Remove padding */
    margin: 0;             /* Remove margin */
}

ul li {
    margin-bottom: 10px; 
}

.par1{
    text-align: center;
}

.frontImage{
    border: 30px ;    
}
.imageOrgange{
    max-width: 50%;
}
.specialist-link {
  text-decoration: none;
  cursor: pointer;
  text-align: left;
  display: inline-block;
  width: 100%;
}
.doctor-name{
    color: black;
}


@media (max-width: 991px) { /* Adjust breakpoint as needed */
    #henri{
    margin-top: 60px;
    }
    .title{
        font-size: x-large;
    }
    .henri{
        width: auto;
    }
    .titleHenri{
        font-size: medium;
        
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* have to fix */
    }

}


</style>