<template>
  <div id="app" class="container">
    <main-nav></main-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from './components/MainNav'
export default {
  components: {MainNav},
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style>
@import './assets/css/base.css';
  ol,body,ul{
    margin: 0;
    padding: 0;
  }
  ol,ul{
    list-style: none;
  }
  .container{
    width: 80%;
    margin: 0 auto;
  }
</style>
