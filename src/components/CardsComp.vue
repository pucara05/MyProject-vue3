<template>
    <div class="container">
     <div class="row">
       <div class="col-md-4">
         <div class="card">
     <img src="https://picsum.photos/id/64/320/200" class="card-img-top" alt="mujer-nz">
     <div class="card-body">
       <h5 class="card-title">Diversidad Cultural</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
       </div><div class="col-md-4">
         <div class="card">
     <img src="https://picsum.photos/id/399/320/200" class="card-img-top" alt="mujer-nz">
     <div class="card-body">
       <h5 class="card-title">Educación</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
       </div><div class="col-md-4">
         <div class="card">
     <img src="https://picsum.photos/id/646/320/200" class="card-img-top" alt="mujer-nz">
     <div class="card-body">
       <h5 class="card-title">Bellos paisajes</h5>
       <p class="card-text">Hermosas vistas y lugares</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
       </div>
     </div>
    </div>
   </template>

   <script>
   export default {
    name:"CardsComp",
    setup() {
        
    },
   }
   </script>
   <style scoped>
   .container{
    display: flex;
    padding: 1em;
   }
   </style>