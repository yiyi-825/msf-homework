<template>
  <div class="main">
    <div class="col md-8 list">
      <div v-for="article in articles" class="item">
        <article-item  :data="article"></article-item>
      </div>
    </div>
    <div class="col md-4 xs-10">
    <lastest-article :data="lastestArticles"></lastest-article>
    <archieve :data="archieves"></archieve>
    <target :data="targets"></target>
    </div>
  </div>
</template>

<script>
import Archieve from '../components/Archieve'
import ArticleItem from '../components/ArticleItem.vue'
import LastestArticle from '../components/LastestArticle.vue'
import Target from '../components/Target'
export default {
  components: {
  LastestArticle,
  ArticleItem,
  Archieve,
  Target
  },
  name: 'HelloWord',
  data () {
    return {
      articles: [
        {
          id: 1,
          title: '文章名字',
          target: '前端',
          data: '2017/6/17',
          clickTimes: '22222',
          content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
         {
          id: 2,
          title: '文章名字2',
          target: '前端',
          data: '2017/6/17',
          clickTimes: '222',
          content: 'aabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
         {
          id: 3,
          title: '文章名字3',
          target: '前端',
          data: '2017/6/17',
          clickTimes: '2',
          content: 'accccccccccccccccccccccccccccccccccccccccccccccccccccc'
         }
      ],
      lastestArticles: [
        {
          id:1,
          title: '文章名字'
        },
        {
          id:2,
          title: '文章名字2'
        },
        {
          id:3,
          title: '文章名字3'
        }
      ],
      archieves: [
        {
          year: 2017,
          month: 1,
          articleNum: 3
        },
        {
          year: 2017,
          month: 2,
          articleNum: 3
        },
        {
          year: 2017,
          month: 3,
          articleNum: 3
        }
      ],
      targets:[
        {
          id: 1,
          name: '前端'
        },
        {
          id: 2,
          name: 'css'
        },
        {
          id: 3,
          name: '爬虫'
        }
      ]
    }
  }
}
</script>

<style scoped>
.list{
  padding: 0 20px;
}
.item{
  margin-bottom: 60px;
}
</style>