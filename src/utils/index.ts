/**
 * 防抖：仅用作函数示例，实际请使用 lodash-es/debounce
 */
export const debounce = <T extends Fn>(fn: T, wait = 200) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const debounced = function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      return fn.apply(this, args);
    }, wait);
  };
  return debounced as (...args: Parameters<T>) => ReturnType<T>;
};
