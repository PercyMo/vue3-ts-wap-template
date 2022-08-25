const { defineConfig } = require('@vue/cli-service');
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const dayjs = require('dayjs');

const __APP_INFO__ = {
  version: require('./package.json').version,
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // TODO: 临时关闭并行构建，unplugin-vue-define-options 编译结果异常，暂时无法解决
  parallel: false,
  devServer: {
    // open: true,
    // 代理服务，解决前端跨域问题时会非常有用
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     ws: false,
    //     changeOrigin: true,
    //   },
    // },
  },
  configureWebpack: (config) => {
    // vue3-defineOptions
    config.plugins.push(require('unplugin-vue-define-options/webpack')());
    config.plugins.push(
      ComponentsPlugin({
        types: [],
        dts: false,
        resolvers: [VantResolver()],
      })
    );

    // 定义全局变量
    config.plugins.push(
      new webpack.DefinePlugin({
        __APP_INFO__: JSON.stringify(__APP_INFO__),
      })
    );

    // 打包分析
    if (process.env.npm_config_report) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
        })
      );
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/variables.scss";`,
      },
    },
  },
});
