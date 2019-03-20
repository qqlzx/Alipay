import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Friend from '@/pages/friend/Friend'
import My from '@/pages/my/My'
import Yue from '@/pages/yue/Yue'
import Pay from '@/pages/pay/Pay'
import ZD from "@/pages/zd/ZD"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/yue',
      name: 'Yue',
      component: Yue
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/zd',
      name: 'ZD',
      component: ZD
    }
  ]
})
