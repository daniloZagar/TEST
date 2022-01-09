import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/views/Welcome.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    meta: { layout: 'blank' },
    component: Welcome,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/home/country/:slug',
    name: 'Country',
    component: () => import('../views/CountryDetails.vue'),
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
});

export default router;
