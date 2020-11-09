<template>
 <div class="main">
   




    <div class="container is-widescreen">
        <div class="columns">
           
            <div class="column is-9">
                
                <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container is-widescreen">
                            <h1 class="title">
                                Hello, {{ $auth.user.name }}.
                            </h1>
                            <h2 class="subtitle">
                                I hope you are having a great day!
                            </h2>
                        </div>
                    </div>
                </section>
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">500</p>
                                <p class="subtitle">Calories burnt</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">2000</p>
                                <p class="subtitle">gained</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">200</p>
                                <p class="subtitle">Goals</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">19</p>
                                <p class="subtitle">Total Hours Exercise</p>
                            </article>
                        </div>
                    </div>
                </section>
                <div class="columns">
                    <div class="column is-7">
                        <div class="card events-card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Record
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
                            </header>
                            <div class="card-table">
                                 <chart :options="chartOptionsBar"></chart>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">View All</a>
                            </footer>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Inventory Search
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large" type="text" placeholder="">
                                        <span class="icon is-medium is-left">
                      <i class="fa fa-search"></i>
                    </span>
                                        <span class="icon is-medium is-right">
                      <i class="fa fa-check"></i>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    User Search
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large" type="text" placeholder="placeholder">
                                        <span class="icon is-medium is-left">
                      <i class="fa fa-search"></i>
                    </span>
                                        <span class="icon is-medium is-right">
                      <i class="fa fa-check"></i>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
export default {
     data: () => ({
    chartOptionsBar: {
         xAxis: {
    data: ['3 Days ago', '2 Days ago', 'Yesterday', 'Today' ]
  },
  yAxis: {
    type: 'value'
  },
   series: [
    {
      type: 'bar',
      data: [63, 275, 24, -10]
    }
  ]
    }
  })
}
</script>

<style scoped>


@import "~bulma/css/bulma.css";
</style>