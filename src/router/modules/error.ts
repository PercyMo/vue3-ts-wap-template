import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/error',
    name: 'error',
    redirect: '/error/404',
    children: [
      {
        path: '404',
        name: 'PageNotFound',
        meta: {
          title: 'The page is not found',
        },
        component: () =>
          import(/* webpackChunkName: 'error' */ '@/views/error/404.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/error/404',
  },
];

export default routes;
