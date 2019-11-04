<template>
  <div class="music-player">
    <!--<list-drawer
      :visible="drawerState"
    >
    </list-drawer>-->
    <max-player
      v-show="fullScreen"
      :playState="playState"
      :likeState="true"
      :playMode="playMode"
      :countNum="playList.length"
      :currentTime="currentTimeStr"
      :currentSong="currentSong"
      :comments="comments"
      :hotComments="hotComments"
      @onClickDrawer="clickDrawer"
      @onClickArtist="clickArtist"
      @onClickLike="clickLike"
      @onClickPrev="clickPrev"
      @onClickNext="clickNext"
      @onClickSound="clickSound"
      @onChangePlayState="changePlayState"
      @onChangePlayerDisplay="changePlayerDisplay"
      @onChangePlayMode="changePlayMode"
      >
    </max-player>
    <min-player
      v-show="!fullScreen"
      :playState="playState"
      :likeState="true"
      :playMode="playMode"
      :countNum="playList.length"
      :currentTime="currentTimeStr"
      :currentSong="currentSong"
      :percent="percent"
      @onClickDrawer="clickDrawer"
      @onClickArtist="clickArtist"
      @onClickLike="clickLike"
      @onClickPrev="clickPrev"
      @onClickNext="clickNext"
      @onClickSound="clickSound"
      @onChangePlayState="changePlayState"
      @onChangePlayerDisplay="changePlayerDisplay"
      @onChangePlayMode="changePlayMode"
      @onChangeSliderValue="changeSliderValue"
    >
    </min-player>
    <audio  ref="audio" @canplay="canPlay"  @timeupdate="timeUpdate" @ended="audioPlayEnd" autoplay></audio>
  </div>
</template>

<script>
import config from '@/config/config'
import MinPlayer from './components/MinPlayer'
import MaxPlayer from './components/MaxPlayer'
import ListDrawer from './components/ListDrawer'
import { mapGetters, mapMutations } from 'vuex'
import { getPlaySongSource } from 'api/song'
import { getMusicComment } from 'api/comment'

import { createComment } from '@/class/comment'
import { formatTime } from 'utils/time'

export default {
  name: 'Player',
  data () {
    return {
      musicUrl: '',
      currentTimeNum: 0,
      currentTimeStr: '00:00',
      duration: 0,
      hotComments: [],
      comments: []
    }
  },
  computed: {
    ...mapGetters([
      'playState',
      'playMode',
      'fullScreen',
      'drawerState',
      'sequenceList',
      'playList',
      'currentIndex',
      'currentSong'
    ]),
    totalNum () {
      return this.sequenceList.length
    },
    percent () {
      if (this.currentSong.durationNum === 0) {
        return 0
      } else {
        return this.currentTimeNum / this.currentSong.durationNum > 1 ? 1 : this.currentTimeNum / this.currentSong.durationNum
      }
    }
  },
  watch: {
    currentSong (newVal, oldVal) {
      if (!newVal.id) {
        return
      }
      if (newVal.id === oldVal.id) {
        return
      }
      this.getPlaySongUrl(newVal.id)
      this.initMusicComment(newVal.id)
    },
    musicUrl (url) {
      const audio = this.$refs.audio
      audio.src = url
    },
    playState (state) {
      const audio = this.$refs.audio
      state ? audio.play() : audio.pause()
    }
  },
  methods: {
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN',
      setDrawerState: 'SET_DRAWER_STATE',
      setPlayState: 'SET_PLAY_STATE',
      setPlayMode: 'SET_PLAY_MODE',
      setSequenceList: 'SET_SEQUENCE_LIST',
      setCurrentIndex: 'SET_CURRENT_INDEX'
    }),
    canPlay () {
    },
    // 更改时间显示
    timeUpdate (e) {
      this.currentTimeNum = e.target.currentTime
      this.currentTimeStr = formatTime(this.currentTimeNum)
    },
    // 更改drawer显示
    clickDrawer (flag) {
      this.setDrawerState(flag)
    },
    // 点击歌手
    clickArtist () {

    },
    // 喜欢不喜欢
    clickLike () {

    },
    // 点击上一曲
    clickPrev () {
      this.prevSong()
    },
    // 点击下一曲
    clickNext () {
      this.nextSong()
    },
    // 音量调整
    clickSound () {

    },
    // 更改播放模式
    changePlayMode () {
      const playMode = (this.playMode + 1) % 3
      this.setPlayMode(playMode)
    },
    // 更改播放器显示方式
    changePlayerDisplay (flag) {
      this.setFullScreen(flag)
    },
    // 更改播放状态
    changePlayState () {
      this.setPlayState(!this.playState)
    },
    changeSliderValue (value) {
      const audio = this.$refs.audio
      audio.currentTime = value * this.currentSong.durationNum
    },
    // 更改播放源
    getPlaySongUrl (id) {
      getPlaySongSource(id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.musicUrl = res.data[0].url
          if (this.musicUrl === null) {
            this.nextSong()
          }
        }
      })
    },
    // 单曲播放结束
    audioPlayEnd () {
      if (this.playMode === config.PLAY_MODE.singleLoop) {
        this.loopPlay()
      } else {
        this.nextSong()
      }
    },
    // 单曲循环
    loopPlay () {
      const audio = this.$refs.audio
      audio.currentTime = 0
      audio.play()
    },
    // 下一曲
    nextSong () {
      let index = this.currentIndex + 1
      if (index === this.playList.length) {
        index = 0
      }
      this.setCurrentIndex(index)
    },
    // 上一曲
    prevSong () {
      let index = this.currentIndex - 1
      if (index === -1) {
        index = this.playList.length - 1
      }
      this.setCurrentIndex(index)
    },

    initMusicComment (id) {
      getMusicComment(id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.hotComments = res.hotComments.map((comment) => {
            return createComment(comment)
          })
          this.comments = res.comments.map((comment) => {
            return createComment(comment)
          })
        }
      })
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
