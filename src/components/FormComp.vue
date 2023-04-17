<template>
    <div class="container">
        
       <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Dirrecion de correo</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Formulario</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div class="boton">
  <button type="button" class="btn btn-secondary">Enviar</button>
</div>

</div>
    </div>
</template>
<script>
export default {
    name:"FormComp",
    setup() {
        
    },
}
</script>

<style scoped>
.boton{
 text-align: center;
   
    
}


</style>