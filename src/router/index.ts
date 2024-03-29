import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from "@/views/Money.vue"
import Labels from "@/views/Labels.vue"
import Statistics from "@/views/Statistics.vue"
import NotFound from "@/views/NotFound.vue"
import EditLabel from "@/views/EditLabel.vue"


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:"/money"
  },
  {
    path:"/money",
    name:"money",
    component:Money
  },
  {
    path:"/labels",
    name:"labels",
    component:Labels
  },
  {
    path:"/statistics",
    name:"statistics",
    component:Statistics
  },
  {
    path:"/labels/edit/:id",
    name:"editlabel",
    component:EditLabel
  },
  {
    path:"*",
    name:"404",
    component:NotFound
  }

  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
