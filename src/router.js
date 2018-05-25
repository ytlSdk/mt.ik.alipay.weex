/* global Vue */
import Router from 'vue-router'
import index from '@/components'
import Home from '@/components/home'
import Wealth from '@/components/wealth'
import Friend from '@/components/friend'
import Mine from '@/components/mine'
import PersonalInfo from '@/components/mine/personal-info/personal-info'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [{
        path: 'home',
        name: 'home',
        component: Home
      }, {
        path: 'wealth',
        name: 'wealth',
        component: Wealth
      }, {
        path: 'friend',
        name: 'friend',
        component: Friend
      }, {
        path: 'mine',
        name: 'mine',
        component: Mine,
        children: [{
          path: 'personalInfo',
          name: 'personalInfo',
          component: PersonalInfo
        }]
      }]
    }
  ]
})
