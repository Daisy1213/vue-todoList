import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/todoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: HelloWorld
    }
  ]
})
