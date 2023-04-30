<script setup>
import NavbarComp from './components/NavbarComp.vue';
import JumbutronComp from './components/JumbutronComp.vue';
import CarouselComp from './components/CarouselComp.vue';
import FormComp from './components/FormComp.vue'
import CardsComp from './components/CardsComp.vue'
import FooterComp from './components/FooterComp.vue'

</script>

<template>
<NavbarComp/>
<div class="container-lg w-auto p-3">
    <router-view/>
</div>
<footer-comp/>

<!--
<JumbutronComp/>
<CarouselComp/>
<CardsComp/>
<FormComp/>
<FooterComp/>
-->



</template>

<style scoped>

</style>
