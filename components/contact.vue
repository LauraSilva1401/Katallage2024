<template>

    <section id="contact">
        <a class="title" href="#">

            <img :src="'../img/ContactUs/ContactUs.png'" class="img-fluid contactusTitle" alt="CONTACT US">

        </a>

        <div class="container text-center">
            <div class="row align-items-center">
                <!-- Email -->
                <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <nuxt-icon class="mail icon" name="uil--envelope" filled/>
                    <h3 class="contact_title">Email</h3>
                    <span class="contact_subtitle">info@katallagewellness.com</span>
                </div>

                <!-- Location -->
                <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <nuxt-icon class="location icon" name="uil--map-marker" filled />
                    <h3 class="contact_title">Location</h3>
                    <span class="contact_subtitle">73 Front St - Shirley - Massachusetts</span>
                </div>

                <!-- Phone Number -->
                <div class="col-12 col-md-4 d-flex flex-column align-items-center">
                    <nuxt-icon class="phone icon" name="uil--phone" filled />
                    <h3 class="contact_title">Phone Number</h3>
                    <span class="contact_subtitle">978 906-0060</span>
                </div>
            </div>
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
    border-radius: .5rem;
}

.contact_title{
    color: #508DAC;
}

.contact_subtitle{
    color: #648BCD;
}

.container {
    margin-top: 40px;
    margin-bottom: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
}

.icon{
    font-size: xxx-large;
    margin-bottom: 10px; /* Add space between icon and text */
}

@media (max-width: 767px) { /* Adjust for smaller devices */
    .contact_title, .contact_subtitle {
        text-align: center;
    }

    .title{
        width: 70%;
    }
}





</style>