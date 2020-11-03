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
     <a class="navbar-item"><router-link to="/"> 
        Home</router-link>
      </a>

      <a class="navbar-item"><router-link to="/tracker">
        Tracker</router-link>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item"><router-link to="/about">
            About</router-link>
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
      <!-- Check that the SDK client is not currently loading before accessing is methods -->
      <div v-if="!$auth.loading">
        <!-- show login when not authenticated -->
        <a v-if="!$auth.isAuthenticated" @click="login" class="button is-success"><strong>Log in</strong></a>
        <!-- show logout when authenticated -->
        <a v-if="$auth.isAuthenticated" @click="logout" class="button is-danger"><strong>Log out</strong></a>
      </div>
    </div>
  </div>
  <div class="buttons">
  <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-primary">Sign Up to Browse Events</button>
  <h1 v-if="$auth.isAuthenticated" class="is-size-2 has-background-white welcome">{{ $auth.user.name }}</h1>
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


<script>
export default {
  name: 'Nav',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>
