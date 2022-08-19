<template>
  <div>
    <VanNavBar title="系统信息" />
    <VanCellGroup>
      <VanCell title="版本号：" :value="version" />
      <VanCell title="最后构建时间：" :value="lastBuildTime" />
    </VanCellGroup>
  </div>
</template>

<script setup lang="ts">
const { version, lastBuildTime } = __APP_INFO__;
</script>
