<template>
  <div class="music-render-view">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'RenderView'
}
</script>

<style lang="less">
  .music-render-view {
    height: 100%;
    background: var(--body-bg-color--);
  }
</style>
