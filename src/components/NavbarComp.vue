<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark " >
  <div class="container-fluid">
    <img src="../assets/logo-nz.jpg" class="img-thumbnail" alt="logo">
    <a class="navbar-brand"   href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Conoce mas</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Poblacion</a></li>
            <li><a class="dropdown-item" href="#">Ciudades</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Acerca de nosotros</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"></a>
        </li>
      </ul>
      <form class="d-flex" role="buscar">
        <input class="form-control me-2" type="buscar" placeholder="Buscar" aria-label="buscar" alt="buscador">
        <button class="btn btn-outline-success" type="submit" alt="boton-de-buscar">Buscar</button>
      </form>
    </div>
  </div>
</nav>

</template>

<script>
export default {
    name:"NavbarComp",
    setup() {
        
    },
}
</script>

<style scoped>
.img-thumbnail{
  display: flex;
  height: 50px;
 
}
</style>