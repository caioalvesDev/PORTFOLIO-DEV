<script setup>
import TheContainer from '../components/TheContainer.vue';
import ThePrincipalCard from '../components/ThePrincipalCard.vue';
import TheFormContact from '../components/TheFormContact.vue';

</script>

<template>
  <TheContainer>
    <template v-slot:Columns>
        <ThePrincipalCard />
    </template>

    <template v-slot:Column>
        <TheFormContact />
    </template>

  </TheContainer>
</template>