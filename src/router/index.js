/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Stat from '@/components/Stat'
import Config from '@/components/Config'
import Recherche from '@/components/Recherche'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Config',
      component: Config
    },
    {
      path: '/Stat',
      name: 'Stat',
      component: Stat
    },
    {
      path: '/Recherche',
      name: 'Recherche',
      component: Recherche
    }
  ]
})
