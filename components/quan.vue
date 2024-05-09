<template>
    <section id="henri">
        <div class="container text-center">
            <a class="navbar-brand d-lg-none" href="#"> <!--Show only on small screens-->
                <img :src="'../img/Navbar/KatallageLogo.PNG'" class="img-fluid KatallageLogo" alt="KATALLAGE LOGO">
            </a>
            <div class="row align-items-center">
                <div class="col-5 text-center">
                    <img :src="'../img/Team/Quan.jpeg'" class="w-100 rounded-circle  henriprofile" alt="...">
                </div>
                <div class="col-7">
                    <img :src="'../img/Henri/HenriBalagueraMD.png'" class="w-100 rounded-0  henriprofile" alt="...">

                        <!--<div class="container text-center">

                            <div class="row align-items-center">

                                <div class="col-md-4 order-1 order-sm-1 order-md-1">
                                
                                    <nuxt-icon class="mail icon" name="uil--envelope" filled/>
                                    
                                </div>

                                <div class="col-md-4 order-2 order-sm-3 order-md-2">
                                    <a href="https://www.linkedin.com/in/henri-balaguera-58739565/" target="_blank" class="nav-link px-2 text-muted"><nuxt-icon class="location icon" name="uil--linkedin" filled /></a>
                                </div>

                                <div class="col-md-4 order-3 order-sm-5 order-md-3">
                                    <nuxt-icon class="phone icon" name="uil--phone" filled />
                                </div>




                                <div class="col-md-4 order-4 order-sm-2 order-md-4">
                                    <span class="contact_subtitle">henri@katallagewellness.com</span>
                                </div>

                                


                                

                                <div class="col-md-4 order-6 order-sm-4 order-md-6">
                                    <span class="contact_subtitle">Henri Balaguera</span>
                                </div>



                                

                                <div class="col-md-4 order-5 order-sm-6 order-md-5">
                                    <span class="contact_subtitle">978 906-0060</span>
                                </div>

                            </div>

                        </div> -->
                </div>
                
            </div>
        </div>

        <div class="container text-center rounded cont1">
            <div class="row align-items-center">

                <div class="col par1">
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

.cont1 {
    background-color: #e7fffe;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    
}

.icon{
    font-size: xxx-large;
}

.par1{
    text-align: justify;
}

@media (max-width: 991px) { /* Adjust breakpoint as needed */
    #henri{
    margin-top: 60px;
    }

}


</style>