import { ref, onMounted, onUnmounted } from 'vue';
import dayjs from 'dayjs';

/**
 * 动态获取本地时间
 */
export const useTime = () => {
  const year = ref<number>(1992); // 年
  const month = ref<number>(12); // 月
  const day = ref<number>(20); // 日
  const hour = ref<number>(0); // 时
  const minute = ref<number>(0); // 分
  const second = ref<number>(0); // 秒
  const week = ref<string>(''); // 星期几

  let timer: ReturnType<typeof setInterval> | null = null;

  const updateTime = () => {
    const date = dayjs();
    year.value = date.year();
    month.value = date.month() + 1;
    day.value = date.date();
    hour.value = date.hour();
    minute.value = date.minute();
    second.value = date.second();
    week.value = '日一二三四五六'.charAt(date.day());
  };

  updateTime();

  onMounted(() => {
    timer && clearInterval(timer);
    timer = setInterval(updateTime, 1000);
  });

  onUnmounted(() => {
    timer && clearInterval(timer);
  });

  return { year, month, day, hour, minute, second, week };
};
