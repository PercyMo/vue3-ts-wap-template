# vue3-ts-wap-template

## 技术栈

- [Vue 3](https://cn.vuejs.org/)
- [Vant 3](https://vant-contrib.gitee.io/vant/#/zh-CN/home)
- [TypeScript](https://www.typescriptlang.org/)

## 目录结构

```
.
├── public
├── src
│   ├── App.vue
│   ├── main.ts
│   ├── api
│   ├── assets                    # 静态资源
│   ├── components
│   │   └── basic                 # 通用基础组件
│   │   └── business              # 通用业务组件
│   ├── directives                # 指令
│   ├── hooks
│   ├── plugins
│   ├── router
│   ├── store
│   ├── styles
│   ├── utils
│   └── views
└── types                         # 全局类型
```

## 开始

```bash
# 安装依赖
$ yarn install

# 启动本地开发 默认 localhost:8080
$ yarn serve

# 生产环境构建
$ yarn build

# 查看代码分析
$ yarn analyz
```

## 功能

```
- px自动转换rem (默认375宽，在 postcss.config.js 调整)
- components
  - BackTop 返回顶部
- 开发环境下 vconsole
- hooks
  - 页面触底事件
- 页面
  - 404错误页
  - /_about 查看构建时间及版本号
- analyz 构建分析
- eslint/stylelint/prettier 配合 gitHooks 提交前进行代码检验并自动修复大部分格式问题
```

## TODO

- [ ] hooks
- [ ] directives
- [ ] axios 封装优化。取消重复请求；请求失败重试；接口缓存；
- [ ] 自定义 icon
- [ ] 主题定制
