<template>
    <section id="henrieducation">

        <a class="title" href="#">

            <img :src="'../img/Henri/Education.png'" class="img-fluid servicesTitle" alt="KWC WHOLENESS">

        </a>

      
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Boston University</h5>
                            
                            </div>
                            <p class="mb-1">Clinical Fellowship-Infectious Diseases, Medicine</p>
                            <small>1998 - 2001</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Albert Einstein College of Medicine</h5>
                            
                            </div>
                            <p class="mb-1">Internal Medicine Residency Program</p>
                            <small class="text-body-secondary">1996 - 1998</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Albert Einstein College of Medicine</h5>
                            
                            </div>
                            <p class="mb-1">Internship in Internal Medicine</p>
                            <small class="text-body-secondary">1995 - 1998</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Harvard Medical School</h5>
                            
                            </div>
                            <p class="mb-1">Immunogenetics Fellowships in Medicine</p>
                            <small class="text-body-secondary">1993 - 1995</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Universidad Industrial de Santander</h5>
                            
                            </div>
                            <p class="mb-1">Doctor of Medicine - MD</p>
                            <small class="text-body-secondary">1991 - 1993</small>
                        </a>
                    </div>
               

    </section>
</template>

<style scoped>

#henrieducation{
    margin-top: 50px;
    margin-bottom: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
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

.list-group-item{
    background-color: #FFF6F9 !important;
    
}

h5{
    color: #648BCD;;
}

.cont1 {
  
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    
}

@media (max-width: 991px) { /* Adjust breakpoint as needed */
    .title{
        width: 40%;
    }

}

</style>