<template>
    <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,150;1,150&display=swap" rel="stylesheet">

    <section id="henri">
        <div class="container text-center">
            <a class="navbar-brand d-lg-none" href="#"> <!--Show only on small screens-->
                <img :src="'../img/Navbar/KatallageLogo.PNG'" class="img-fluid KatallageLogo" alt="KATALLAGE LOGO">
            </a>
            <div class="row align-items-center">
                <div class="col-5 text-center">
                    <img :src="'../img/Henri/Henri3copy.jpg'" class="w-100 rounded-circle  henriprofile" alt="...">
                </div>
                <div class="col-7">
                    <img :src="'../img/Henri/HenriBalagueraMD.png'" class="w-100 rounded-0  henriprofile" alt="...">

                        
                </div>
                
            </div>
        </div>

        <div class="container text-center  cont1">
            <div class="row align-items-center">

                <div class="col-md-6 contacts">
                    <div class="columns align-items-center">
                        <div class="row-md-4 order-1 order-sm-1 order-md-1">
                            <nuxt-icon class="mail icon" name="uil--envelope" filled/>
                            <span class="contact_subtitle email">henri@katallagewellness.com</span>
                        </div>
                        <div class="row-md-4 order-2 order-sm-3 order-md-2">
                            <a href="https://www.linkedin.com/in/henri-balaguera-58739565/" target="_blank" class="nav-link px-2 text-muted">
                                <nuxt-icon class="location icon" name="uil--linkedin" filled />
                                <span class="contact_subtitle">Henri Balaguera</span>
                            </a>
                        </div>
                        <div class="row-md-4 order-3 order-sm-5 order-md-3">
                            <nuxt-icon class="phone icon" name="uil--phone" filled />
                            <span class="contact_subtitle">978 906-0060</span>
                        </div>
                        
                    </div>
                </div>
 
                <div class="col-md-6 par1">
                    Dr. Henri Balaguera, MD, is a highly esteemed professional in the field of Functional Family Medicine. 
                    His expertise spans across various domains including Family Medicine, Chronic and Infectious Disease, 
                    Auto-Immune Disorders, Functional Nutrition, Pulmonary Disorders, Sleep Issues, Cardiovascular & Metabolic 
                    Dysfunction, Natural Hormone Replacement, and Preventative Medicine.
                    <br><br>
                    Dr. Balaguera's educational background includes a medical degree from Universidad Industrial de Santander, 
                    and he is proudly certified by the American Board of Internal Medicine.
                </div>
            
            </div>
        </div>
    </section>
</template>

<style scoped>

#henri{
    margin-top: 200px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
}

.container{
    font-family: "MuseoModerno", sans-serif;
    font-size: x-large;
    font-weight: 150;

}
.cont1 {
    background-color: #e7fffe;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
}

.contacts{
    font-size: x-large;
    text-align: left;
    font-weight: 200;

}
.contact_subtitle{
    color: black;
}
.icon{
    font-size: xxx-large;
}

.par1{
    text-align: justify;
    font-size: x-large;
    font-family: "MuseoModerno", sans-serif;
}

@media (max-width: 991px) { /* Adjust breakpoint as needed */
    #henri{
    margin-top: 60px;
    }
    .contact_subtitle{
        margin:auto;
        font-size: medium;
    }
    .contacts{
        text-align: center;
    }
    .email{
        font-size: small;
        margin-left: 0;
    }

}


</style>