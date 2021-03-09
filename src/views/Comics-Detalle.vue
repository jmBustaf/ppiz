<template>
  <div class="Comics-Detalle">
    <!-- <Header /> -->
    <Comics v-on:getLink="mostrarDetalle"/>
    <!-- <button @click="mostrarDetalle">sadsd</button> -->
  </div>
</template>

<script>

import Comics from '../components/Comics'
/* import Header from '../components/Header' */

export default {
    name: 'Comics-Detalle',
    data() {
        return {
            url: ''
        }
    },
    components: {
        Comics,
        /* Header */
    },
    methods: {
        mostrarDetalle(detalle) {
            alert(detalle)
        }
    },
    computed() {
        this.mostrarDetalle()
    }
}
</script>

<style>

</style>