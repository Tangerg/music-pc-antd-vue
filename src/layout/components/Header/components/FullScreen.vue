<template>
  <div><a-icon :type="isFullScreen" @click="handleFullScreen"/></div>
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
      let main = document.body
      if (this.fullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }
      this.fullScreen = !this.fullScreen
    }
  }
}
</script>

<style lang="less">

</style>
