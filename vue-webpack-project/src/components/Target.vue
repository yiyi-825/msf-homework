<template>
  <div class="target">
      <h2>标签</h2>
      <ul>
          <li v-for="target in data"><router-link :to="'/target/$(target.id)'">{{target.name}}
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
      return{
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.target{
    h2{
        font-weight: 500;
        font-size: 18px;
    }
    ul{
        display :flex;
        flex-wrap :wrap;
      li{
          font-size :14px;
          padding :2px;
          margin :4px;
          border :1px solid green;
         a{
             text-decoration :none;
             color :#000;
            }
         }
    }
}
</style>
