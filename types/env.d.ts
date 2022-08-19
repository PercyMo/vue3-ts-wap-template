/**
 * 环境变量类型声明
 */
declare namespace NodeJs {
  interface Process {
    env: {
      ENV: 'development' | 'production';

      // 网站前缀
      BASE_URL: string;

      // API 请求路径
      VUE_APP_BASE_API: string;
    };
  }
}
