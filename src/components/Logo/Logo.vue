<template>
  <div class="logo">
    <div v-show="collapsed === false">xx云音乐</div>
    <div v-show="collapsed === true">X</div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
  .logo {
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 24px;
    color: #2e2e2e;
    text-align: center;
    background-color: transparent;
  }
</style>
