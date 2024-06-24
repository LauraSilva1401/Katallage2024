<template>
    <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,150;1,150&display=swap" rel="stylesheet">

    <section id="henri">
        <div class="container text-center">
            <a class="navbar-brand d-lg-none" href="#"> <!--Show only on small screens-->
                <img :src="'../img/Navbar/KatallageLogo.PNG'" class="img-fluid KatallageLogo" alt="KATALLAGE LOGO">
            </a>
            <div class="row align-items-center">
                <div class="col-5 text-center">
                    <img :src="'../img/Team/Quan2.jpeg'" class="w-100 rounded-circle  quanProfile" alt="...">
                </div>
                <div class="col-7">
                    <img :src="'../img/Henri/HenriBalagueraMD.png'" class="w-100 h-500 rounded-0  henriprofile" alt="...">                        
                </div>
                
            </div>
        </div>

        <div class="container text-center  cont1">
            <div class="row align-items-center">

                <div class="col-md-6 contacts">
                    <div class="columns align-items-center">
                        <div class="row-md-4 order-1 order-sm-1 order-md-1">
                            <nuxt-icon class="mail icon" name="uil--envelope" filled/>
                            <span class=" email">henri@katallagewellness.com</span>
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
                    Quan Zhou received her Bachelor’s Degree of Medicine from Beijing University of Chinese Medicine in 1991 through a 5-year full-time program 
                            and holds a Master’s Degree in Human Nutrition with the University of Alabama. Quan is a licensed Acupuncturist and a nationally certified 
                            Diplomate in Acupuncture and Oriental Medicine with National Commission of Acupuncture and Oriental Medicine (NCCAOM). She has also been a 
                            clinical faculty for the New England School of Acupuncture of MCPHS University since 2003.
                            
                            <br>
                            <br>
                        
                            Over the past 32 years, Quan has been practicing acupuncture and herbal medicine in China, Singapore and the U.S., working at the Wangjing 
                            Hospital (China), Singapore General Hospital, Boston Medical Center (BMC), Lowell Community Health Center (LCHC), and private acupuncture 
                            clinics as well. At BMC, Quan worked with and supported cancer patients.

                            <br>
                            <br>

                            With her education and experience, Quan has deep insight into both Eastern and Western medicine. She believes that the ultimate goal of health 
                            care is to guide people to discover the natural healing power within themselves, allowing them to enjoy balanced, healthy lives.

                            <br>
                            <br>

                            Her expertise lies in the areas of chronic and acute pain, allergy, digestive conditions, stress related problems, headaches, migraines, anxiety, 
                            depression, neurological disorders, respiratory issues, supportive treatment for cancer, fertility, reproductive health, women's health and 
                            difficult-to-treat conditions in conventional medicine. She always finds great joy in helping patients return to health with acupuncture, ear 
                            therapy, cupping, gua-sha, and acupressure.

                            <br>
                            <br>

                            Quan enjoys cooking, gardening, and swimming in Massachusetts living with her husband and two children.
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

.quanProfile{
    width: 200px;  
    height: 500px;  
    object-fit: cover;
    border-radius: 50%;
}

@media (max-width: 991px) {  
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
        text-align: left;
    }
    .quanProfile{
    width: 40%;  
    height: 40%;  
    object-fit: cover;
    border-radius: 50%;
}

}


</style>