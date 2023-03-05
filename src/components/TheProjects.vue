<script setup>

import { ref, onMounted } from 'vue'
import TheProject from './TheProject.vue'
import axios from 'axios';

const getProjects = ref([])
const path = ref()

onMounted( async () => {

    try {
        const response = await axios.get('https://my-json-server.typicode.com/caioalvesDev/backendPortfolio/projects');
        const data = await response.data
        path.value  = 'https://raw.githubusercontent.com/caioalvesDev/Portfolio-dev/6ad1ed39691c4db8aa4ccc7a98be79e49c686c63/src/assets/img/'
        getProjects.value = data
        

    } catch (error) {
        console.error(error);
    }

})


</script>

<template>

<section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <section class="section">
                            <section class="hero is-dark">
                                <div class="hero-body">
                                    <p class="title  has-text-centered">
                                        &lt; Projetos /&gt;
                                    </p>
                                    <!-- <p class="subtitle">
                                        Galeria de Projetos
                                    </p> -->
                                </div>
                            </section>
                        </section>
                        


                        <section class="section ">
                            <div class="card ">
                                <header class="card-header ">
                                    <p class="card-header-title ">
                                        &lt; JavaScript: [ NODEJS, REACT, VUEJS ] /&gt;
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">


                                        <div v-for="getProjectjs in getProjects.javascript">
                                            <TheProject
                                            :name="getProjectjs.name"
                                            :imgsrc="path+getProjectjs.imgsrc"
                                            :stacks="getProjectjs.stacks"
                                            :description="getProjectjs.description"
                                            :linkrepositorie="getProjectjs.linkrepositorie"
                                            :linkProject="getProjectjs.linkProject"
                                            />
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </section>

                        <section class="section">
                            <div class="card">
                                <header class="card-header ">
                                    <p class="card-header-title">
                                        &lt; PHP=&gt [ LARAVEL ] /&gt;
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">

                                        {{ path }}

                                        <div v-for="getProjectphp in getProjects.php">
                                            <TheProject
                                            :name="path+getProjectphp.name"
                                            :imgsrc="getProjectphp.imgsrc"
                                            :stacks="getProjectphp.stacks"
                                            :description="getProjectphp.description"
                                            :linkrepositorie="getProjectphp.linkrepositorie"
                                            :linkProject="getProjectphp.linkProject"
                                            />
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </section>
                    </div>

                    <hr>
                </div>
            </div>
        </section>


</template>