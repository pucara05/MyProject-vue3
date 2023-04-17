<template>
    <footer class="footer py-3 bg-body-tertiary mt-5 bg-dark">
     <div class="container">
       
       <span class="text-body-secondary text-white"><font-awesome-icon icon="fa-solid fa-user-secret" />
   <small>Copyright © 1996-2023 Pucara</small>
   <span class="three"><font-awesome-icon icon="fa-solid fa-phone" />313405834 </span>
   <span class="four"> <font-awesome-icon icon="fa-solid fa-envelope" />pucar@gmail.com</span></span>
  
   
     </div>
   </footer>
   </template>

   <script>
   export default{
   name:"FooterComp",
setup() {
    
}}
</script>

<style scoped>
.footer{
    display:flex;
    width: 100%;
    height: 50%;
    text-align: center;
}

.text-body-secondary{
    padding: 1em;
}
.three{
    padding: 1em;
}
.four{
    padding: 1em;
}
</style>