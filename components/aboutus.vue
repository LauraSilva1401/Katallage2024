<template>

    <section id="aboutus">

        <!--<a class="title" href="#">

        <img :src="'../img/ContactUs/ContactUs.png'" class="img-fluid contactusTitle" alt="CONTACT US">

        </a> -->

        <div class="container text-center">
            <!-- Stack the columns on mobile by making one full-width and the other half-width -->
            <div class="row par1">
                <div class="col-md-12">Welcome to Katallage Wellness Center <br> Your Path to total well-being</div>
                
            </div>

            <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
            <div class="row justify-content-center par2">
                <div class="col-6 col-md-12">At Katallage Wellness Center, we not only offer holistic medicine treatments, but we also embrace the idea that reconciliation with oneself is the fundamental path to full and lasting health. We are more than a wellness center, we are the beacon that will guide you on a journey of self-discovery and holistic healing.</div>
            </div>

            <!-- Columns are always 50% wide, on mobile and desktop -->
            <div class="row justify-content-center infocards">
                <div class="col-12 col-md-6 d-flex justify-content-center">
            

                    <div class="card text-bg-info mb-3 infocard1" style="max-width: 18rem;">
                        
                        <div class="card-body">
                            <h5 class="card-title">What makes us different?</h5>
                            <p class="card-text">In an increasingly frenetic and disconnected world, we believe in the importance of reconnecting with your inner self to heal both mentally and physically. At Katallage Wellness Center, we innovate by offering a unique and personalized approach to your health and wellness.</p>
                        </div>
                    </div>
                </div>


                <div class="col-12 col-md-6 d-flex justify-content-center">

                    <div class="card text-bg-info mb-3 infocard2" style="max-width: 18rem;">
                        
                        <div class="card-body">
                            <h5 class="card-title">Our Philosophy</h5>
                            <p class="card-text">At Katallage Wellness Center, we believe in your body's inherent ability to heal itself when provided with the right conditions. Our mission is to guide you on this journey to optimal health and wellness by providing you with the tools and support necessary to achieve your health goals.</p>
                        </div>
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
    padding-top: 60px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.infocards {
    margin-top: 40px;
   
}

.infocard1, .infocard2{
    background-color: #FFF6F9 !important;
    border-radius: .5rem !important;
    border-style: none;

}

.card-title{
    color: #648BCD;
    font-weight: bold;
}

.card-text{
    color: gray;
}

.par1 {
    font-size: 25px;
    color: #648BCD;
    font-weight: bold;
}

.par2{
    margin-top: 30px;
    font-size: 18px;
    color: gray;
}

#aboutus {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
    margin-top: 60px;
}

</style>