<script setup>
import Navbar from './components/TheNavbar.vue';
import { onMounted } from 'vue';

import { ref, reactive } from 'vue'

const routesParams = reactive([
  {'route': 'Home', 'path': '/'},
  {'route': 'Contato', 'path': '/contact'},
  {'route': 'Projetos', 'path': '/projects'}
]
)


</script>

<template>
  <header>
    <Navbar 
    :routesParams="routesParams"
    />

  </header>

  <RouterView />
</template>
