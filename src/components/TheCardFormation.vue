<script setup>
defineProps({
    name: String,
    title: String,
    description: String,
    tagcolor: String
})
</script>

<template>
    
        <div>
            <span :class="tagcolor"> {{ name }} </span>
            <p class="title is-5"> {{ title }}</p>
            <p>{{ description }}</p>
        </div>
        <hr>
    
</template>