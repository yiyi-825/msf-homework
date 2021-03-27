<template>
  <div class="main">
    <div class="col md-8 list">
    <article-item :data="articles" :show-detail="true"></article-item>
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
  Archieve,
  ArticleItem,
  Archieve,
  Target
  },
  name: 'Article',
  data () {
    return {
      data: {
      }
    }
  }
}
</script>

<style>
.list{
  padding: 0 20px;
}
</style>