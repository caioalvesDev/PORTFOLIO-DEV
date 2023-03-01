
<script setup>
defineProps({
    name: String,
    taginfo: String,
    text: String,
    imgsrc: String,
    stacks: Array,
    descriptionp1: String,
    descriptionp2: String
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
            <p class="title is-5">{{ name }} <span class="tag is-dark">Empresa:
                   {{ taginfo }}</span></p>
            <p>{{ descriptionp1 }}</p>
            <p>{{ descriptionp2 }}</p>
            <p>
               {{ text }}
            </p>
            <span v-for="stack in stacks" :key="stack.name" class="tag is-black mr-1">{{ stack }}</span>
           

        </div>
    </div>
</template>