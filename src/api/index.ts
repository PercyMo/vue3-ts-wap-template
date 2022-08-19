import { request } from '@/utils/request';
import type { AxiosRequestConfig } from 'axios';

export type Response<T = any> = {
  code: number;
  message: string;
  data: T;
};

export type BaseResponse<T = any> = Promise<Response<T>>;

export const Example = <T = any>(config: AxiosRequestConfig) =>
  request<T>(config, {
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000,
    interceptors: {
      responseInterceptors: (response: Response) => {
        if (response.code === 0) {
          return response.data;
        }
        return response;
      },
    },
  });
