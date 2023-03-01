<script setup>
import TheAskMe from '../components/TheAskMe.vue';
import ThePrincipalCard from '../components/ThePrincipalCard.vue';
import TheCardsExpirience from '../components/TheCardsExpirience.vue';
import TheCardsFormation from '../components/TheCardsFormation.vue';
import TheContainer from '../components/TheContainer.vue';
</script>

<template>
  <section class="section">

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
</template>
