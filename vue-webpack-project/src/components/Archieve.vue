<template>
  <div class="archieve">
      <h2>文章归档</h2>
      <ul>
          <li v-for="archieve in data">
            <router-link :to="'/archieve/'+archieve.year+'/'+archieve.month">{{archieve.year}}年{{archieve.month}}月{{archieve.articleNum}}篇
          </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: {
    data: {
    type: Array,
    required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.archieve{
    h2{
        font-weight: 500;
        font-size: 18px;
    }
    li{
        font-size: 14px;
        line-height :28px;
        a{
            text-decoration :none;
            color :#000;
        }
    }
}
</style>
