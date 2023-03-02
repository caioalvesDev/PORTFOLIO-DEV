<script setup>

import { ref, onMounted } from 'vue'
import TheProject from './TheProject.vue'

const getProjects = ref([])

onMounted( async () => {

    const response = await fetch(`data/data_projects.json`)
    const data = await response.json()

    console.log(data);

    getProjects.value = data

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
                                            :imgsrc="getProjectjs.imgsrc"
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

                                        <div v-for="getProjectphp in getProjects.php">
                                            <TheProject
                                            :name="getProjectphp.name"
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