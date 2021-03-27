<template>
  <div class="article-item">
      <h3>{{data.title}}</h3>
      <div class="desc">
          <span class="target">{{data.target}}</span>
          <span class="circle"></span>
          <span class="data">{{data.data}}</span>
          <span class="circle"></span>
          <span class="click-times">浏览 {{data.clickTimes}}</span>
      </div>
      <div class="content" v-if="showDetail">{{data.content}}</div>
      <div class="content" v-if="!showDetail">{{data.content |clip }}</div>
      <div  v-if="!showDetail" class="view-article">
          <router-link to="/article/1">查看文章</router-link>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        showDetail: {
            type: Boolean,
            default: false
        },
        data: {
            required: true,
            type: [Object,Array]
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
    h3{
        text-align :center;
    }
    .desc{
        display :flex;
        justify-content :center;
        align-items :center;
        .circle{
            display :block;
            height :4px;
            width :4px;
            background-color :gray;
            border-radius :50%;
        }
        .target,.data,.click-times{
            color :gray;
            font-size:14px;
            margin :0 6px;
        }
    }
    .content{
        margin-top :20px;
        line-height :1.5;
    }
    .view-article{
        margin :20px;
        text-align :center;
        a{
            color :#000;
            text-decoration :none;
            &:after{
                content "|";
                display :inline-block;
                margin :0 auto;
                font-size :700;
            }
            &:before{
                content "|";
                display :inline-block;
                margin :0 auto;
                font-size :700;
            }
        }
    }

</style>
