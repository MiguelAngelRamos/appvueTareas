<template>
<div class="fondo">
  <Navbar/>
</div>
 
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
   Navbar
  }
}
</script>

<style>
 .fondo {
   background-image: url("./assets/fondo.jpg");
   height: 100vh;
 }
</style>
