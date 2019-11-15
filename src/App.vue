<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    this.info()
  },
  methods: {
    info () {
      const h = this.$createElement
      this.$info({
        title: '说明',
        content: h('div', {}, [
          h('div', '产品使用说明')
        ]),
        onOk () {}
      })
    }
  }
}
</script>
<style lang="less">
@import "styles/index.less";
#app {
  height: 100%;
}
</style>
