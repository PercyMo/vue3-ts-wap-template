<template>
  <div class="example">
    <VanNavBar title="Example Page" />
    <template v-if="online">
      Hello!
      <DBackTop />
    </template>
    <VanEmpty v-else image="network" description="网络开小差了，刷新试试吧" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useReachBottom } from '@/hooks/event/useReachBottom';
import { useOnline } from '@/hooks';
import DBackTop from '@/components/basic/back-top/index.vue';

defineOptions({
  name: 'ExampleHome',
});

const { online } = useOnline();

onMounted(() => {
  initPage();
});

const initPage = () => {
  getDate();
  doSomethingElse();
};

const getDate = () => {
  // ...
};

const doSomethingElse = () => {
  // ...
};

// 页面触底
useReachBottom(() => {
  // ...
});
</script>

<style lang="scss" scoped>
.example {
  min-height: 300vh;

  :deep(.van-nav-bar__content) {
    background-color: aliceblue;
  }
}
</style>
