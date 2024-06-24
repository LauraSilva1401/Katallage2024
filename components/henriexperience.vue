<template>
    <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100;1,100&display=swap" rel="stylesheet">

    <section id="henriexperience">

        <a class="title" href="#">

            <img :src="'../img/Henri/Experience.png'" class="img-fluid servicesTitle" alt="KWC WHOLENESS">

        </a>

        <div class="container text-center  cont1">
            <div class="row align-items-center">

                <div class="col par1">
                            With a career in medicine beginning in 1991, Dr. Balaguera has amassed over three decades of 
                            experience in the medical field. He has served as an MD at Lahey Hospital and Medical Center, 
                            Department of Medicine, Division of Hospital Medicine, in Burlington, Massachusetts, for over 
                            8 years. His expertise is backed by training in Internal Medicine and Infectious Diseases, 
                            including a Fellowship in Immunogenetics.
                            
                            <br>
                            <br>
                        
                            Currently, Dr. Balaguera is an Assistant Professor of Clinical Medicine at Tufts University School of Medicine. 
                            He is also working towards becoming a Certified Functional Medicine Physician from the Institute of Functional Medicine. His practice 
                            emphasizes holistic self-care, mindfulness, and meditation, and he actively engages in clinical research in collaboration with the team 
                            at Katallage Wellness.
                </div>
            </div>
        </div>

    </section>

</template>

<style scoped>

#henriexperience{
    margin-top: 50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
}
.container{
    font-family: "MuseoModerno", sans-serif;
    font-size: x-large;
    font-weight: 150;

}
.title {
    width: 25%;
    height: auto;
    padding-top: 20px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.cont1 {
    background-color: #FFF6F9;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 30px;

}

@media (max-width: 991px) { /* Adjust breakpoint as needed */
    .title{
        width: 40%;
    }

}

</style>