import { ref } from 'vue';
import { useEventListener } from '@vant/use';

/**
 * 用户网络是否可用
 * @return {Object} isOnline
 * @return {Boolean} online 非响应式
 */
export const useOnline = () => {
  const isOnline = ref<boolean>(true);

  const setStatus = () => {
    isOnline.value = navigator.onLine;
  };

  // 页面加载后，马上更新网络状态
  setStatus();

  useEventListener('online', setStatus);
  useEventListener('offline', setStatus);

  return { isOnline, online: navigator.onLine };
};
