
<script setup>

import { ref, onMounted, computed } from 'vue'
import TheCardExpirience from './TheCardExpirience.vue'
import axios from 'axios';

const getExperiences = ref([])
const path = ref()

onMounted( async () => {

    try {
        const response = await axios.get('https://my-json-server.typicode.com/caioalvesDev/backendPortfolio/experiences');
        const data = await response.data
        path.value  = 'https://raw.githubusercontent.com/caioalvesDev/Portfolio-dev/6ad1ed39691c4db8aa4ccc7a98be79e49c686c63/src/assets/img/'
        getExperiences.value = data

    } catch (error) {
        console.error(error);
    }

})

</script>

<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                &lt; Experiencias /&gt;
            </p>

        </header>
        <div class="card-content">
            
            <div class="content">
                <div v-for="( getExperience, index ) in getExperiences" :key="index">
                    <TheCardExpirience 
                    :name="getExperience.name"
                    :taginfo="getExperience.taginfo"
                    :text="getExperience.text"
                    :stacks="getExperience.stacks"
                    :descriptionp1="getExperience.descriptionp1"
                    :descriptionp2="getExperience.descriptionp2"
                    :imgsrc="path+getExperience.imgsrc"
                    />
                    <hr>
                </div>
            
            </div>
        </div>

    </div>
</template>