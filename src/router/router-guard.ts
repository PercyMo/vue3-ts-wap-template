import type { Router } from 'vue-router';

const defaultTitle = document.title;

export const createRouterGuard = (router: Router) => {
  router.beforeEach((to) => {
    document.title = to.meta.title ? to.meta.title : defaultTitle;
  });
};
