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
        this.exitFullScreen()
      } else {
        this.requestFullScreen(main)
      }
      this.fullScreen = !this.fullScreen
    },
    requestFullScreen (element) {
      const docElm = element
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen()
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
      }
    },
    exitFullScreen () {
      const de = window.parent.document
      if (de.exitFullscreen) {
        de.exitFullscreen()
      } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen()
      } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen()
      } else if (de.msExitFullscreen) {
        de.msExitFullscreen()
      }
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
