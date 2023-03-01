<script setup>
import { ref, onMounted, computed } from 'vue'
import TheCardFormation from './TheCardFormation.vue'

const getFormations = ref([])

// const getPosts = async () => {
//     const url = window.location.href;
//     return fetch(`${url}json/db.json`).then(response => response.json())
// }

onMounted( async () => {

    // getPosts().then(data => {
    //     console.log(data);
    //     postsData.value = data
    // })

   
    const response = await fetch(`data/data_formation.json`)
    const data = await response.json()

    const newData = await data.map( val => {
        return {
            ...val,
            tagcolor: `tag is-${val.tagcolor} mb-2`
        }
    })

    getFormations.value = newData

    
})

</script>

<template>
    
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                &lt; Formações />
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <div v-for="getFormation in getFormations" :key="getFormation.name">
                    <TheCardFormation 
                    :name="getFormation.name" 
                    :title="getFormation.title" 
                    :description="getFormation.description" 
                    :tagcolor="getFormation.tagcolor"
                    />
                </div>
            </div>
        </div>
    </div>
</template>