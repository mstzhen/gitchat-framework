import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import defaultPage from '@/pages/mypage/defaultPage'
import E403 from '@/pages/Error'

import item1 from './item1'
import item2 from './item2'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/default',
    children: [{
      path: '/default',
      name: 'default',
      component: defaultPage,
    },...item1,...item2]
  },
   {
    path: '*',
    name: 'Error',
    component: E403
  }]
})
