<script setup>

import { RouterLink, RouterView } from 'vue-router'

defineProps({
  routesParams: Object
})

</script>

<template>
     <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="index.html">
                    <img src="@/assets/img/dev-logo.png" alt="Dev logo" width="60" height="60">
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu is-active">
                <div  class="navbar-start">
                    <a  v-for="routeParam in routesParams" :key="routesParams.name" class="navbar-item is-text-black">
                        <RouterLink :to="routeParam.path"> &lt;{{ routeParam.route  }}/></RouterLink>          
                    </a>
                </div>
            </div>
        </nav>
</template>


<style scoped>

.navbar{
    margin-bottom: 40px;
}

</style>