<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/"><a class="navbar-item">
      <a href=""><img src="https://i.ibb.co/x1tMRGs/axis-icon.png" alt="axis-icon" border="0"></a>
      <h1 class="head-logo">AXIS Fitness</h1>
    </a></router-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"> </span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  
  


  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
     <router-link to="/"> <a class="navbar-item">
        Home
      </a></router-link>

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
          <router-link to="/login"><a class="button is-light" href="C:\Users\Swagg\Documents\New Paltz\Web Programming 493\Exercise_Fitness_App\my-app\src\components\Login.vue">
            Log in
          </a></router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
    
    <router-view/>
    <img class="bg-img" alt="AXIS logo" src="./assets/axis-fitness-logo.png"> 
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
