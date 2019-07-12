import Vue from 'vue'
import Router from 'vue-router'

import Chat from '../views/chat'
import Relations from '../views/relations'

Vue.use(Router)

export const routerMap = [
  { path: '/chat', name: 'chat', component: Chat },
  { path: '/relations', name: 'relations', component: Relations }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})

const router = createRouter()

export default router

