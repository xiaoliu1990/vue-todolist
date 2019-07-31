import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/homelist',
      name: 'homeList',
      component: () => import('./views/HomeList.vue')
    },
  ]
})
