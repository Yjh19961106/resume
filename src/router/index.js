import Vue from 'vue'
import Router from 'vue-router'
import  VantCom from '@/components/VantComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: "我的简历"
      },
      component: () => import("../pages/index.vue")
    },
    {
      path: "/index",
      name: "index",
      meta: {
        title: "我的简历"
      },
      component: () => import("../pages/index.vue")
    },
    {
      path: '/vant',
      name: 'VantCom',
      component: VantCom,
    }
  ]
})

