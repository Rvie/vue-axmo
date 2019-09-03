import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import api from '@/components/api'
import navleft from '@/components/nav-left'
import Delete from '@/components/delete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/api',
      name: 'api',
      component:api
    },
    {
      path: '/nav-left',
      name: 'navleft',
      component:navleft
    },
    {
      path: '/delete',
      name: 'Delete',
      component:Delete
    }
  ]
})
