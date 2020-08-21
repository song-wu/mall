<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #F2F2F2;
    /* 保证在屏幕下面 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* x的偏移量 y的偏移量 模糊距离 模糊颜色rgb值和清晰度 */
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
  }
</style>
