<template>
  <div id="app">
    <Home/>
    <img class="bg-img" alt="AXIS logo" src="./assets/axis-fitness-logo.png"> 
    <router-view/>
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
html,body{
margin: 0;
height: 100;
}

.bg-img{
  display: block ;
  width: auto; height: auto;
  object-fit:fill;
  margin-left: auto;
  margin-right: auto;
}
</style>
 