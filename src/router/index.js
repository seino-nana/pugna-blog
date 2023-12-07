import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path:'/',
        name:'/',
        redirect:'/index',
        component: () => import('@/views/layout/index.vue'),
        children:[
          {
            path:'/index',
            name:'index',
            component: () => import('@/views/index/index.vue')
          },
          {
            path:'/about',
            name:'about',
            component: () => import('@/views/about/about.vue')
          },
          {
            path:'/works',
            name:'works',
            component: () => import('@/views/works/works.vue')
          },
          {
            path:'/blog',
            name:'blog',
            component: () => import('@/views/blog/blog.vue')
          },
          {
            path:'/tool',
            name:'tool',
            component: () => import('@/views/tool/tool.vue')
          },
          {
            path:'/article/:id',
            name:'article',
            component: () => import('@/views/article/article.vue'),
            props: true
          },
          {
            path:'/tools/add',
            name:'addTools',
            component: () => import('@/views/add/addTools.vue')
          },
          {
            path:'/article/add',
            name:'addArticle',
            component: () => import('@/views/add/addArticle.vue')
          }
        ] 
      },
      {
        path:'/',
        redirect:'/index'
      }
    ]
  })

  export default router