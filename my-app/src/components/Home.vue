<template>
<div class="main">
<div class="card">
  <div class="card-image">
    <figure class="image is-5760by3840">
      <img src="https://i.ibb.co/52xLL0j/yoga.jpg" alt="yoga" border="0">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <p class="title is-4">Exercise</p>
        <p class="subtitle is-6">Burn calories even faster  </p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <figure class="image is-16by9">
      <img src="https://i.ibb.co/tMV5Q94/nutrition2.jpg" alt="nutrition2" border="0">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <p class="title is-4">Nutrition/Diet</p>
        <p class="subtitle is-6">Start here. Delicious meal plans to help burn calories fast</p>
      </div>
    </div>
   
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





document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
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
.head-logo{
  color: black;
  font-family: Arial black, Helvetica, sans-serif;
}



@import "~bulma/css/bulma.css";
</style>
