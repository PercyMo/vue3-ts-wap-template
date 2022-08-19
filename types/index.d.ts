/**
 * 任意函数类型
 */
declare interface Fn<T = any, R = T> {
  (...args: T[]): R;
}
