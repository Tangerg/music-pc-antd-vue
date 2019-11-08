<template>
  <div class="full-screen">
    <a-icon :type="isFullScreen" @click="handleFullScreen"/>
  </div>
</template>

<script>
export default {
  name: 'FullScreen',
  data () {
    return {
      fullScreen: false
    }
  },
  computed: {
    isFullScreen () {
      return this.fullScreen ? 'fullscreen-exit' : 'fullscreen'
    }
  },
  methods: {
    handleFullScreen () {
      const main = document.body
      if (this.fullScreen) {
        document.exitFullscreen() || document.mozCancelFullScreen() || document.msExitFullscreen() || document.webkitCancelFullScreen()
      } else {
        main.requestFullscreen() || main.mozRequestFullScreen() || main.webkitRequestFullScreen() || main.msRequestFullscreen()
      }
      this.fullScreen = !this.fullScreen
    }
  }
}
</script>

<style lang="less">
.full-screen{
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
</style>
