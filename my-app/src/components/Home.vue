<template>
  <div class="hello">
    <div class="menu">
      <div class="menu-item">
        Sign Up
      </div>
      <div class="menu-item">
        Login
      </div>
      <div class="menu-item">
        Your Progress
      </div>
      <div class="menu-item">
        Dietary Advice
      </div>
      <div class="menu-item">
        Social
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.menu {
  display: flex;
  font-size: 1em;
  border: 1rem;
  border-color: black;
}
.menu-item{
  flex: 1;
  border: 1px solid turquoise;
  background-color: turquoise;
  text-align: center;
  color:white;
  font-size: 20px;
}
</style>
