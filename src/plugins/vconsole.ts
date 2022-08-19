// @ts-ignore:next-line
import VConsole from 'vconsole';

export const setupVConsole = () => {
  if (process.env.NODE_ENV !== 'production') {
    new VConsole();
  }
};
