<template>
<div class="main">
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <a href=""><img src="https://i.ibb.co/x1tMRGs/axis-icon.png" alt="axis-icon" border="0"></a>
      <h1 class="head-logo">AXIS Fitness</h1>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"> </span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  
  <div class="navbar-menu">
    <div class="navbar-start">
    <a class="navbar-item">
  Home
</a>
  </div>

  <div class="navbar-end">
    <!-- navbar items -->
  </div>
  </div>


  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Tracker
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Nutrition
          </a>
          <a class="navbar-item">
            Daily
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="C:\Users\Swagg\Documents\New Paltz\Web Programming 493\Exercise_Fitness_App\my-app\src\components\Login.vue">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
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
