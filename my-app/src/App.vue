<template>
  <div id="app">
  
    <Home msg="Welcome to Your Vue.js App"/>
    
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
#app{
  width: auto;
  margin: auto;
}
</style>
 