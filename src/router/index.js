import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/login'
import Search from '@/components/search/search-box'
import Theme from '@/components/home/theme'
import Detail from '@/components/video/detail/wx-detail'
import Channel from '@/components/channel/channel'
import pageNotFound from '@/base/page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '*',
      redirect: '/pageNotFound'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
      // meta: {
      //   isLogin: true
      // }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pageNotFound',
      name: 'pageNotFound',
      component: pageNotFound
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Channel',
      name: 'Channel',
      component: Channel
    },
    {
      path: '/Theme',
      name: 'Theme',
      component: Theme
    }
  ]
})
