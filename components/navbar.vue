<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <!--<a class="navbar-brand d-lg-none" href="#"> Show only on small screens
                <img :src="'../img/Navbar/KatallageLogo.PNG'" class="img-fluid KatallageLogo" alt="KATALLAGE LOGO">
            </a> -->
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                    <NuxtLink to="/" class="nav-link active" @click.native="collapseNavbar" aria-current="page">Home</NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink to="/#aboutus" class="nav-link active" @click.native="collapseNavbar" aria-current="page">About Us</NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink to="/#team" class="nav-link active" @click.native="collapseNavbar" aria-current="page">Our Team</NuxtLink>
                </li>

                <a class="navbar-brand" href="#"> <!-- Hide on small screens add to class: d-none d-lg-flex-->

                <img :src="'../img/Navbar/KatallageLogo.PNG'" class="img-fluid KatallageLogo" alt="KATALLAGE LOGO">

                </a>


                <li class="nav-item">
                    <NuxtLink to="/#services" class="nav-link active" @click.native="collapseNavbar" aria-current="page">Wholeness</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/#contact" class="nav-link active" @click.native="collapseNavbar" aria-current="page">Contact</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/" class="nav-link active" @click.native="collapseNavbar" aria-current="page">Conditions</NuxtLink>
                </li>
                
                
            </ul>
            
            </div>
        </div>
    </nav>


</template>

<script>
export default {
    methods: {
        collapseNavbar() {
            if (window.innerWidth < 992) { // Bootstrap's LG breakpoint
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('#navbarSupportedContent');

                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        }
    }
};
</script>

<style scoped>

.navbar {
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 0px;
}

.navbar-nav{
  margin:auto;
}

.nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    /*font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;*/
    font-size: 15px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #fff;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 5px solid #FBE7EA; /* Add border styles */
    margin-right: 20px;
    margin-left: 20px;
}

.nav-link {
  color: #648bcd !important;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
}

.navbar-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin: 20px 20px; /* Adjust the margin as needed */
}

.nav-item:hover {
    background-color: #efcbc9;
}

.navbar-brand img {
    width: 300px; /* Adjust the width as needed */
    height: auto; /* Maintain aspect ratio */
}

@media (max-width: 991px) { /* Adjust breakpoint as needed */
    .navbar {
        height: auto; /* Adjust height for mobile */
        flex-direction: column; /* Stack elements vertically */
    }

    .navbar-brand {
        margin: 10px 0; /* Adjust margin for mobile logo */
    }

    .nav-item {
        width: auto; /* Remove fixed width */
        height: auto; /* Remove fixed height */
        border-radius: 0; /* Remove border radius */
        margin: 5px 0; /* Adjust margin for mobile */
    }
}


</style>