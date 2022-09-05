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
        meta: {
          title: 'Here is an example page',
        },
        component: () =>
          import(
            /* webpackChunkName: 'example' */ '@/views/example/home/index.vue'
          ),
      },
    ],
  },
];

export default routes;
