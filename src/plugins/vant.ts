import type { App } from 'vue';
import {
  Icon,
  Button,
  Lazyload,
  Toast,
  Cell,
  CellGroup,
  NavBar,
  Empty,
} from 'vant';

// 函数式组件样式需单独引入
import 'vant/es/toast/style';

export const setupVant = (app: App<Element>) => {
  app.use(Icon);
  app.use(Button);
  app.use(Lazyload, {
    loading: require('@/assets/images/img_loading.png'),
  });
  app.use(Toast);
  app.use(Cell);
  app.use(CellGroup);
  app.use(NavBar);
  app.use(Empty);
};
