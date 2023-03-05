<script setup>
import TheProjects from '../components/TheProjects.vue';

import {ref, inject, onMounted} from 'vue'
import {useLoading} from 'vue-loading-overlay'

const isLoading = ref(true)

const $loading = useLoading({
        // options
});

const fullPage = ref(true)

const loading = () => {
    const loader = $loading.show({
      opacity: 0.9,
    });
    setTimeout(() => {
        loader.hide()
    }, 1000)
}

onMounted(() => {
  loading()
})

</script>

<template>
    
    <loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"/>

    <TheProjects/>

  
</template>