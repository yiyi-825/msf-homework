import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import About from '../pages/About'
import Article from '../pages/Article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: './achieve/:year/:month',
      name: 'HelloWord',
      component: HelloWorld
    }
  ]
})
