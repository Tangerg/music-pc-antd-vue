<template>
  <div class="music-player">
    <list-drawer :show="show"></list-drawer>
    <max-player v-show="fullScreen"></max-player>
    <min-player :isPlaying="isPlaying" v-show="!fullScreen" @showDrawer="show = !show" @showMax="maxPlayer"></min-player>
  </div>
</template>

<script>
import MinPlayer from './components/MinPlayer'
import MaxPlayer from './components/MaxPlayer'
import ListDrawer from './components/ListDrawer'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Player',
  data () {
    return {
      value: 20,
      show: false,
      max: false
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'fullScreen'
    ])
  },
  methods: {
    ...mapActions({
      setFullScreen: 'SET_FULL_SCREEN'
    }),
    maxPlayer () {
      this.setFullScreen(true)
    }
  },
  components: {
    MinPlayer,
    MaxPlayer,
    ListDrawer
  }
}
</script>

<style lang="less">
</style>
