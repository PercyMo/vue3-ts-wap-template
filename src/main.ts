import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from '@/store';
import { setupVant, setupAssets, setupVConsole } from '@/plugins';
// rem 布局适配
import 'amfe-flexible/index.js';

const app = createApp(App);

function setupPlugins() {
  // 注册常用 vant 组件
  setupVant(app);
  // 引入静态资源
  setupAssets();
  // 开发环境加载 vConsole
  setupVConsole();
}

function setupApp() {
  // 挂载 store 状态管理
  setupStore(app);
  // 挂载路由
  setupRouter(app);
  app.mount('#app');
}

setupPlugins();

setupApp();
