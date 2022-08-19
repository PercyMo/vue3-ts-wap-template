import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from '@/utils/auth';
import { Toast } from 'vant';

interface Interceptors {
  // 请求拦截器
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  // 响应拦截器
  responseInterceptors?: (response: any) => any;
}

interface InstanceOptions {
  // 请求基础路径
  baseURL?: string;
  // 响应超时
  timeout?: number;
  // 自定义拦截器
  interceptors?: Interceptors;
  // 是否直接获取 data，而忽略 message 等
  isGetDataDirectly?: boolean;
}

export interface RequestOptions extends InstanceOptions {
  // 是否直接获取 data，而忽略 message 等
  isGetDataDirectly?: boolean;
}

const createInstance = (options: InstanceOptions): AxiosInstance => {
  const {
    baseURL = process.env.VUE_APP_BASE_API,
    timeout = 5000,
    interceptors,
    isGetDataDirectly,
  } = options;
  const instance = axios.create({
    baseURL,
    timeout,
    withCredentials: true, // 跨域携带cookie
  });

  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      // 实例自定义请求拦截函数
      if (interceptors && interceptors.requestInterceptors) {
        config = interceptors.requestInterceptors(config);
      }
      if (token && config.headers) {
        config.headers.token = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // 响应状态异常处理
      if (/^[4|5]/.test(String(response.status))) {
        return Promise.reject(response.statusText);
      }

      // 实例自定义响应拦截函数
      if (interceptors && interceptors.responseInterceptors) {
        return interceptors.responseInterceptors(response.data);
      }

      // 响应数据异常处理
      const res = response.data;
      if (res.code !== 0) {
        Toast.fail(res.msg || '接口出错啦！');
        return Promise.reject(new Error(res.msg || 'Error'));
      } else {
        return isGetDataDirectly ? res.data : res;
      }
    },
    (error) => {
      Toast.fail('糟糕，请求出错啦！');
      return Promise.reject(error);
    }
  );
  return instance;
};

export const request = <T = any>(
  config: AxiosRequestConfig,
  options: RequestOptions = {}
): Promise<T> => {
  try {
    return createInstance(options).request(config);
  } catch (error) {
    return Promise.reject(error);
  }
};
