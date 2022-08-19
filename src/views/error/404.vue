<template>
  <div class="home">
    <VanEmpty image="error" description="糟糕，页面找不到了">
      <VanButton
        round
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        to="/"
      >
        返回首页
      </VanButton>
    </VanEmpty>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-empty) {
  padding-top: 20%;
}
</style>
