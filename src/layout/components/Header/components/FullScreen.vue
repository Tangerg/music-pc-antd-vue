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
      const main = document.body
      if (this.fullScreen) {
        this.exitFullScreen()
      } else {
        this.requestFullScreen(main)
      }
      this.setFullScreen(!this.fullScreen)
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
.music-full-screen{
}
</style>
