<template>

    
    <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,420;1,420&display=swap" rel="stylesheet">


    <section id="contact">

        <a class="title" href="#">

            <img :src="'../img/ContactUs/ContactUs.png'" class="img-fluid contactusTitle" alt="CONTACT US">

        </a>

        

        <div class="container text-center">
            <div class="column align-items-center">
                <!-- Email -->
                <div class=" row-12 row-md-4 d-flex flex-row align-items-center">
                    <nuxt-icon class="mail icon" name="uil--envelope" filled/>
                    <h2 class="contact_title">Email</h2>
                    
                </div>
            </div>
            <div class="row-12 col-md-4 flex-row align-items-center">
                <div class="row contact_subtitle">
                    info@katallagewellness.com
                </div>
            </div>

            <!-- Location -->
            <div class="row-12 row-md-4 d-flex flex-row align-items-center">
                    <nuxt-icon class="location icon" name="uil--map-marker" filled />
                    <h2 class="contact_title">Location</h2>
            </div>
            <div class="row-12 col-md-4 flex-column align-items-center">
                <div class="row contact_subtitle">
                    73 Front St - Shirley 01464 - Massachusetts
                </div>
            </div>
            

            <!-- Phone Number -->
            <div class="row-12 col-md-4 d-flex flex-row align-items-center">
                    <nuxt-icon class="phone icon" name="uil--phone" filled />
                    <h2 class="contact_title">Phone Number</h2>
            </div>
            <div class="row-12 col-md-4 flex-column align-items-center">
                <div class="row contact_subtitle">
                    978 906-0060
                </div>
            </div>
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.4793960228067!2d-71.64786962365058!3d42.54511247117653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3ebea96a039c3%3A0xb11b0d4b6cff587a!2s73%20Front%20St%2C%20Shirley%2C%20MA%2001464%2C%20USA!5e0!3m2!1sen!2sca!4v1715549661281!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

       
    
        <a class="katallageFront" href="#">

            <img :src="'../img/ContactUs/KatallageFront.jpeg'" class="img-fluid frontImage" alt="KATALLAGE FRONT">

        </a>

    </section>

</template>






<style scoped>


.title {
    width: 25%;
    height: auto;
    padding-top: 60px;
   
    margin-left: auto;
    margin-right: auto;
    display: block;
}



.frontImage {
    border-radius: 20px;
}

.contact_title{
    color: #508DAC;
}

.contact_subtitle{
    color: #648BCD;
    margin-left: 12%;
    font-weight: 100;
}

.container {
    margin-top: 40px;
    margin-bottom: 40px;
    font-family: "MuseoModerno", sans-serif;
    font-weight: 540;
}

.icon{
    font-size: xxx-large;
    margin-bottom: 10px; /* Add space between icon and text */
}

@media (max-width: 767px) { /* Adjust for smaller devices */
    .contact_title, .contact_subtitle {
        text-align: center;
        margin-left: 5%;
    }

    .map {
        margin-left: 5%;
        width: 70%;
        height: 70%;
    }
    .title{
        width: 70%;
    }
}





</style>