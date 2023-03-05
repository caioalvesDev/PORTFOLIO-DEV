<script setup>
import TheAskMe from '../components/TheAskMe.vue';
import ThePrincipalCard from '../components/ThePrincipalCard.vue';
import TheCardsExpirience from '../components/TheCardsExpirience.vue';
import TheCardsFormation from '../components/TheCardsFormation.vue';
import TheContainer from '../components/TheContainer.vue';
import TheFooter from '../components/TheFooter.vue';


import {ref, inject, onMounted} from 'vue'
import {useLoading} from 'vue-loading-overlay'

const isLoading = ref(true)

const $loading = useLoading({
        // options
});

const fullPage = ref(true)

const loading = () => {
    const loader = $loading.show({
      opacity: 0.7,
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
  <section class="section vl-parent">

    <loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"/>


    <TheContainer>

      <template v-slot:Columns>
        <ThePrincipalCard />
      </template>

      <template v-slot:Column>
        
        <TheAskMe />

        <TheCardsExpirience />

        <TheCardsFormation />
      </template>

    </TheContainer>

  </section>
  <TheFooter/>
</template>
