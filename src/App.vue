<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'musicApp'
}
</script>
<style lang="less">
@import "styles/index.less";
#app {
  height: 100%;
  background: var(--body-bg-color--);
}
</style>
