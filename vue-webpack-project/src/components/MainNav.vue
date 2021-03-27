<template>
    <nav class="main-nav">
      <h1>码蜂社博客</h1>
      <ul class="links">
        <li><router-link to="/"> 主页</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'MainNav',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom :1px solid #eee;
        margin-bottom :20px;
    }
    .links
        display flex
      li
        margin 0 10px
    
</style>
