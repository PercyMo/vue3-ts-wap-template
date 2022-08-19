export interface ScrollToParams {
  // 滚动容器，默认：window
  container?: HTMLElement | Window | Document;
  // 至顶部距离，默认：0
  to?: number;
  // 滚动动画持续时间，默认：300ms
  duration?: number;
  callback?: Fn;
}

const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) {
    return (c / 2) * t * t + b;
  }
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const getScroll = (target: HTMLElement | Window | Document) => {
  if (target === window) {
    return (target as Window).scrollY;
  } else if (target instanceof Document) {
    return target.documentElement.scrollTop;
  } else {
    return (target as HTMLElement).scrollTop;
  }
};

/**
 * 容器滚动至固定位置
 */
export const useScrollTo = ({
  container = window,
  to = 0,
  duration = 300,
  callback,
}: ScrollToParams = {}) => {
  const scrollTop = getScroll(container);
  const change = to - scrollTop;
  const increment = 20;
  let currentTime = 0;

  const frameFunc = () => {
    currentTime += increment;
    const nextScrollTop = easeInOutQuad(
      currentTime,
      scrollTop,
      change,
      duration
    );

    if (container === window) {
      (container as Window).scrollTo(window.scrollX, nextScrollTop);
    } else if (container instanceof Document) {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      (container as HTMLElement).scrollTop = nextScrollTop;
    }

    if (currentTime < duration) {
      window.requestAnimationFrame(frameFunc);
    } else if (typeof callback === 'function') {
      callback();
    }
  };

  window.requestAnimationFrame(frameFunc);
};
