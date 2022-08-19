import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/example',
    name: 'example',
    redirect: '/example/home',
    children: [
      {
        path: 'home',
        name: 'example-home',
        component: () =>
          import(/* webpackChunkName: 'example' */ '@/views/example/home.vue'),
      },
    ],
  },
];

export default routes;
