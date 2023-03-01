
<script setup>

import { ref, onMounted, computed } from 'vue'
import TheCardExpirience from './TheCardExpirience.vue'

const getExperiences = ref([])

onMounted( async () => {

    const response = await fetch(`data/data_experiences.json`)
    const data = await response.json()

    getExperiences.value = data

})

</script>

<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                &lt; Experiencias />
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
                    :imgsrc="getExperience.imgsrc"
                    />
                    <hr>
                </div>
            
            </div>
        </div>

    </div>
</template>