<template>

        <homeslider/>


    <div class="container servicesCon">

        <div class="row">
            <aboutus/>
        </div>

    </div>
    

    <div class="container servicesCon">

        <div class="row">
            <services/>
        </div>

    </div>

    <div class="container teamCon">

        <div class="row">
            <team/>
        </div>

    </div>

    <div class="container contactCon">

        <div class="row">
            <contact/>
        </div>

    </div>
    
    
    


</template>

<script>

import homeslider from '../components/homeslider.vue';
import aboutus from '../components/aboutus.vue';
import services from '../components/services.vue';
import team from '../components/team.vue';
import contact from '../components/contact.vue';

export default {
    components: {
        homeslider,
        aboutus,
        services,
        team,
        contact

    },
    data() {
        return {

        }
    }
}

</script>

<style>




</style>