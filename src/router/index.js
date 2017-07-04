import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import seat from '@/components/seat/seat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/seat',
      name: 'seat',
      component: seat
    }
  ]
})
