import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ErrorRouter from './modules/error';
import ExampleRouter from './modules/example';
import HomeView from '../views/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/_about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: 'about' */ '@/views/about.vue'),
  },
  ...ExampleRouter,
  // 404页 必须放置在路由末尾
  ...ErrorRouter,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
