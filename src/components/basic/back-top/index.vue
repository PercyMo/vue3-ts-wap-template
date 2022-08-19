<template>
  <div
    :class="['d-back-top', visible ? '' : 'hiden']"
    :style="wrapStyle"
    @click="handleClick"
  >
    <VanIcon name="back-top" size="20" />顶部
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { CSSProperties } from 'vue';
import { useEventListener } from '@vant/use';
import { debounce } from 'lodash-es';
import { useScrollTo } from '@/hooks/event/useScrollTo';

defineOptions({
  name: 'DBackTop',
});

const props = defineProps({
  // 是否开启动画
  animated: {
    type: Boolean,
    default: true,
  },
  // 自定义居底位置
  bottom: {
    type: Number,
    default: 30,
  },
});

const visible = ref<boolean>(false);

const wrapStyle = computed(
  (): CSSProperties => ({
    bottom: `${props.bottom}px`,
  })
);

const handleClick = () => {
  useScrollTo({ duration: 500 });
};

const windowHeight = window.screen.height;
const handleScroll = debounce(() => {
  if (window.scrollY > windowHeight && !visible.value) {
    visible.value = true;
  }
  if (window.scrollY <= windowHeight && visible.value) {
    visible.value = false;
  }
}, 200);

useEventListener('scroll', handleScroll);
</script>

<style lang="scss" scoped>
.d-back-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 10px;
  width: 40px;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
  height: 40px;
  color: #fff;
  font-size: 9px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  z-index: 99;

  &.hiden {
    visibility: hidden;
  }
}
</style>
