<template>

    <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,150;1,150&display=swap" rel="stylesheet">
    
    
            <div class="container text-center">
                
                <div class="row align-items-center">
                    <div class="title col-6 col-md-4 text-left">
                        Weigth Loss and <br>
                        Sarcopenia
                        
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
                    
                       <!--<img :src="'../img/Henri/HenriBalagueraMD.png'" class="w-50 rounded-0  henriprofile" alt="...">-->
                    </div>
                </div>
    
                <div class="container text-center  cont1">
                <div class="row align-items-center">
    
                    <div class="col par1">
                        Weight Loss and Sarcopenia are critical health concerns that require a nuanced approach to ensure effective management and improved quality of life. Unintended weight loss, particularly in older adults, can lead to sarcopenia, a condition characterized by the progressive loss of muscle mass and strength. Addressing these issues involves a combination of nutritional support, physical activity, and medical interventions. Nutritional strategies focus on providing adequate protein intake, balanced diets, and possibly nutritional supplements to promote muscle synthesis and overall health. Physical exercise, especially resistance and strength training, plays a crucial role in maintaining and improving muscle mass and function. Medical management may include addressing underlying health conditions that contribute to weight loss and sarcopenia. This integrative approach aims not only to prevent further muscle loss but also to enhance physical function, reduce the risk of falls and fractures, and improve overall well-being.
                    </div>
                </div>
            </div>
    
            <div class="text-center">
                <div class="row">
                    
                    <div class="col-sm-12 col-md-4 ">
                        <div class="cont2 justify-content-center">
                            <div class="align-items-center">
    
                                <span class="cont2Title"> Conditions Treated<br> </span>
                                <ul class="custom-list ">
                                    
                                    <li>Unintended Weight Loss</li>
                                    <li>Muscle Weakness and Frailty</li>
                                    <li>Nutritional Deficiencies</li>
                                    <li>Chronic Conditions Related to Sarcopenia</li>
    
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-8 imageOrgange">
                        <img :src="'../img/Services/oranges.png'" class="rounded float-start img-fluid" alt="WHITE FLOWERS FRONT">
                    </div>
                </div>
            </div>
    
            
    
            <a class="frontImage" href="#">
    
                <img :src="'../img/Services/white-flowers.png'" class="img-fluid flowers" alt="WHITE FLOWERS FRONT">
    
            </a>
    
        </div>
    
            
        
    </template>
    
    <style scoped>
    
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
    /*
    .henri {
        background-color: #e7fffe;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        border-radius: 20px;    
    
    }*/
    .titleHenri {
        color:  #3783E4;
        background-color: #e7fffe;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 20px;
        text-align: left;
        font-size: 1.5rem;
        margin: 0 auto;
    }
    
    .cont2Title{
        color:  #3783E4;
        padding-bottom: 2%;
        font-weight: 400;
        font-size: 150%;
    }
    .cont2{
        margin-top: 10%;
        background-color: #F5EDF0;  
        padding: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
    
    .par1{
        text-align: justify;
    }
    
    .custom-list {
        list-style-position: inside; 
        padding-left: 0%;
    }
    
    .custom-list li {
        margin-bottom: 10px;
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
            font-size: x-large;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* have to fix */
        }
    
    }
    
    
    </style>