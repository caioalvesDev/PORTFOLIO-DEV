
<script setup>

defineProps({
    name: String,
    imgsrc: String,
    stacks: Array,
    description: String,
    linkrepositorie: String,
    linkProject: String
})

</script>

<template>
    <div class="columns">
        <div class="column">
            <figure class="image is-3by2">
                <img class="" :src="imgsrc">
            </figure>
        </div>
        <div class="column is-9">
            <p class="title is-5">{{ name }} </p>
            <p> {{ description }}</p>
            <span v-for="stack in stacks" :key="stack.name" class="tag is-black mb-2 mr-1">{{ stack }}</span>
            <hr>
            <div class="mt-2 ">
                <a v-if="linkProject" :href='linkProject' target="_blank" class="button  is-dark mr-1">Visualizar Projeto</a>
                <a v-if="linkrepositorie" :href='linkrepositorie' target="_blank" class="button  is-dark">Repositório GitHub</a>
            </div>

        </div>
    </div>
    <hr>
</template>