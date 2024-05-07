import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'', component:()=>import('../public/pages/the-home-page.component.vue')},
    {path:'/home', component: ()=> import('../public/pages/the-home-page.component.vue') },
    {path:'/nursing/mental-state-exams', component:()=>import('../nursing/pages/the-results-page.component.vue')},
    {path:'/:pathMatch(.*)*', component:()=>import('../public/pages/the-notfound-page.component.vue')}
  ]
})

export default router
