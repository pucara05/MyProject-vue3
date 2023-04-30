<template>
  <h1>Home</h1>
<jumbutron-comp/>
<CarouselCompVue/>
<FormComp/>
<CardsComp/>

<router-view/>
</template>

<script setup>
import JumbutronComp from '../components/JumbutronComp.vue'
import CarouselCompVue from "../components/CarouselComp.vue"
import FormComp from '../components/FormComp.vue'
import CardsComp from '../components/CardsComp.vue'

</script>

<style>

</style>