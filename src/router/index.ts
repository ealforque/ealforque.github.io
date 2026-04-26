import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('@/pages/HomePage.vue'), meta: { title: 'Home' } },
  { path: '/about', name: 'about', component: () => import('@/pages/AboutPage.vue'), meta: { title: 'About' } },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('@/pages/ExperiencePage.vue'),
    meta: { title: 'Experience' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/pages/ProjectsPage.vue'),
    meta: { title: 'Projects' }
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('@/pages/EducationPage.vue'),
    meta: { title: 'Education' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/ContactPage.vue'),
    meta: { title: 'Contact' }
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  const base = 'Eric Alforque — Full Stack Software Developer'
  document.title = to.meta.title ? `${to.meta.title} · ${base}` : base
})
