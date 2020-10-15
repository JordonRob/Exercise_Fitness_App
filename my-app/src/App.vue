<template>
  <div id="app">
   <img alt="AXIS logo" src="./assets/axis-fitness-logo.png"> 
    <Home msg="Welcome to Your Vue.js App"/>
    <button class="button is-primary"> This is button</button>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";
</style>
