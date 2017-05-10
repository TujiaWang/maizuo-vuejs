import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Film from '@/components/Film/Film'
import Cinema from '@/components/Cinema/Cinema'
import Login from '@/components/User/Login'
import Card from '@/components/Card/Cards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/film',
      component: Film
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/card',
      component: Card
    }
  ]
})
