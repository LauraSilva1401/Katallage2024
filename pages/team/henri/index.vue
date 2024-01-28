<template>


    <div class="container servicesCon">

        <div class="row">
            <henri/>
        </div>

    </div>

    <div class="container servicesCon">

        <div class="row">
            <henriexperience/>
        </div>

    </div>

    <div class="container servicesCon">

        <div class="row">
            <henrispecializations/>
        </div>

    </div>

    <div class="container servicesCon">

        <div class="row">
            <henrieducation/>
        </div>

    </div>


</template>

<script>

    import henri from '../components/henri.vue';
    import henriexperience from '../components/henriexperience.vue';
    import henrispecializations from '../components/henrispecializations.vue';
    import henrieducation from '../components/henrieducation.vue';

    export default {
    components: {
        henri,
        henriexperience,
        henrispecializations,
        henrieducation

    },
    data() {
        return {

        }
    }
    }

</script>

<style>




</style>