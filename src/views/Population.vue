<template>
    <h1>Population</h1>
    <ColapsoCompVue/>
    <br>
    <PopulationCompVue/>
    <router-view/>

</template>

<script setup>

import PopulationCompVue from '../components/PopulationComp.vue';
import ColapsoCompVue from '../components/ColapsoComp.vue';


</script>