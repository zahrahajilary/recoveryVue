import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import i18n from "../i18n";
Vue.use(VueRouter)
const routes = [
    {path:'/',
    redirect:`/${i18n.locale}`
    },
  {
      path:'/:lang',
      component:{
          render(c){return c('router-view')}
      },
      children:[
          {
              path: '/',
              name: 'Home',
              component:()=>import( '../views/Home')
          },
          {
              path: 'about',
              name: 'About',
              component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
              meta: {
                  requiresAuth: true
              }
          },
          {
              path: 'posts',
              name: 'Posts',
              component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue')
          },
          {
             path:'posts/:id',
             name:'PostDetail',
             component:()=>import ('../components/posts/PostDetail')
          },
          {
              path:'login',
              name:'login',
              component:()=>import ('../views/Login')
          }

      ]
  }
]
const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
        console.log(NProgress,'ng ')
    }
    next()
})

router.afterEach(() => {
    NProgress.done()
})


export default router
