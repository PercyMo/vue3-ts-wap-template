import { useEventListener } from '@vant/use';
import { throttle } from 'lodash-es';

/**
 * 页面触底事件
 * @param {Function} callback - 触底执行回调
 * @param {Number} distance - 距离页面底部触发距离
 */
export const useReachBottom = (callback: Fn, distance = 100) => {
  let isReachBottom = false;

  const scrollElement = document.documentElement;

  const scrollHandler = throttle(() => {
    const scrollHeight = scrollElement.scrollHeight;
    const currentHeight =
      scrollElement.scrollTop + scrollElement.clientHeight + distance;
    if (currentHeight < scrollHeight && isReachBottom) {
      isReachBottom = false;
    }
    if (isReachBottom) return;
    if (currentHeight >= scrollHeight) {
      isReachBottom = true;
      typeof callback === 'function' && callback();
    }
  }, 200);

  useEventListener('scroll', scrollHandler);
};
