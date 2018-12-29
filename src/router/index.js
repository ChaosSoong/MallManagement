import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
import Layout from '@/components/Layout'
import Error401 from '@/views/errorPage/401'
import Error404 from '@/views/errorPage/404'

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [{
        path: 'dashboard',
        component: Dashboard
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      component: Error404
    },
    {
      path: '/401',
      component: Error401
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(1, to)
  console.log(2, from)
  if (to.matched.length === 0) {
    from.name ? next({
      name: from.name
    }) : next('/404');
  } else {
    next(); //如果匹配到正确跳转
  }
})

export default router