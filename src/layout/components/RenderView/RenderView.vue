<template>
  <div class="render-view">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'RenderView'
}
</script>

<style lang="less">
  .render-view {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
