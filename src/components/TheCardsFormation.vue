<script setup>
import { ref, onMounted, computed } from 'vue'
import TheCardFormation from './TheCardFormation.vue'
import axios from 'axios';

const getFormations = ref([])

// const getPosts = async () => {
//     const url = window.location.href;
//     return fetch(`${url}json/db.json`).then(response => response.json())
// }

onMounted( async () => {

    try {
        const response = await axios.get('data/data_formation.json');
        const data = await response.data

        const newData = await data.map(val => {
            return {
                ...val,
                tagcolor: `tag is-${val.tagcolor} mb-2`
            }
        })

        getFormations.value = newData
        console.log(data);
    } catch (error) {
        console.error(error);
    }

})

</script>

<template>
    
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                &lt; Formações /&gt;
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