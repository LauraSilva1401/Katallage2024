<template>
  <navbar/>

  

  <NuxtPage/>


  <footer1/>

    
</template>

<script>
  
  import navbar from './components/navbar.vue';
  import footer from './components/footer1.vue';

  export default defineComponent ({
    components: {
      navbar,
      footer
    },
  })

</script>
