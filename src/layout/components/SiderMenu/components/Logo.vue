<template>
  <div class="music-logo" @click="clickLogo()">
    <div v-show="collapsed === false">蓝眼音乐</div>
    <div v-show="collapsed === true">蓝</div>
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
  },
  methods: {
    clickLogo () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less">
  .music-logo {
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 24px;
    color: var(--header-font-color-1--);
    text-align: center;
    background-color: var(--header-logo-color--);
    cursor: pointer;
  }
</style>
