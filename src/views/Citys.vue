<script setup>
import { ref, onMounted } from 'vue';
import CitysCard from '../components/CitysCard.vue';

const cityList = ref([]);
const isLoading = ref(true)

onMounted(async() => {
   const result = await fetch('http://localhost:3000/citys')
   const response = await result.json();
   cityList.value = response;
   isLoading.value = false;



   /* manera antigua de usas la api json y llamarla
    .then((Response) => Response.json())
    .then(apiCitys =>{
        cityList.value = apiCitys
    })
    */
})

</script>

<template>
<h1> 
  Citys
</h1>

<div class="max-w-sm mx-auto" v-if="isLoading" ><span class="text-2xl font-bold text-indigo-700">Is Loading ...</span></div>
<div class="row row-cols-1 row-cols-md-1 g-2" v-else>
         
<CitysCard v-for="city in cityList" :key="city.id" :city="city" />


</div>

</template>