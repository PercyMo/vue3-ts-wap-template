import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { createRouterGuard } from './router-guard';
import ErrorRouter from './modules/error';
import ExampleRouter from './modules/example';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
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

export const setupRouter = (app: App<Element>) => {
  // 路由守卫
  createRouterGuard(router);
  app.use(router);
};

export default router;
