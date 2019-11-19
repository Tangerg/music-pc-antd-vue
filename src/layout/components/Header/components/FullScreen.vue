<template>
  <div class="music-full-screen">
    <a-icon :type="isFullScreen" @click="handleFullScreen"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'FullScreen',
  computed: {
    ...mapGetters([
      'fullScreen'
    ]),
    isFullScreen () {
      return this.fullScreen ? 'fullscreen-exit' : 'fullscreen'
    }
  },
  methods: {
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN'
    }),
    handleFullScreen () {
      const element = document.documentElement
      if (this.fullScreen) {
        this.exitFullScreen()
      } else {
        this.requestFullScreen(element)
      }
      this.setFullScreen(!this.fullScreen)
    },
    requestFullScreen (element) {
      const requestMethod = element.requestFullScreen || // W3C
        element.webkitRequestFullScreen || // Chrome等
        element.mozRequestFullScreen || // FireFox
        element.msRequestFullScreen
      if (requestMethod) {
        requestMethod.call(element)
      }
    },
    exitFullScreen () {
      const exitMethod = document.exitFullscreen || // W3C
        document.mozCancelFullScreen || // Chrome等
        document.webkitExitFullscreen || // FireFox
        document.webkitExitFullscreen // IE11
      if (exitMethod) {
        exitMethod.call(document)
      }
    }
  }
}
</script>

<style lang="less">
.music-full-screen{
}
</style>
