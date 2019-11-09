<template>
  <div class="music-player">
    <list-drawer
      :visible="drawerState"
    >
    </list-drawer>
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
      :similarSongList="similarSongList"
      :similarPlayList="similarPlayList"
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
/*
*   引用顺序 1官方 2配置 3组件 4类方法 5工具函数 6api
* */
import { mapGetters, mapMutations } from 'vuex'

import config from '@/config/config'

import MinPlayer from './components/MinPlayer'
import MaxPlayer from './components/MaxPlayer'
import ListDrawer from './components/ListDrawer'

import { createComment } from '@/class/comment'
import { createSongBySimilar } from '@/class/song'
import { createPlaylistBySimilar } from '@/class/playlist'
import { formatLyric } from '@/class/lyric'

import { formatTime } from 'utils/time'
import { shuffle, findIndexById } from 'utils/shuffle'

import { getPlaySongSource, getSimilarSong, getPlaySongLyric } from 'api/song'
import { getSimilarPlaylist } from 'api/playlist'
import { getMusicComment } from 'api/comment'

export default {
  name: 'Player',
  data () {
    return {
      musicUrl: '',
      currentTimeNum: 0,
      currentTimeStr: '00:00',
      duration: 0,
      hotComments: [],
      comments: [],
      readyFlag: false,
      similarSongList: [],
      similarPlayList: [],
      lyric: []
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
      return Math.min(this.currentTimeNum / this.currentSong.durationNum, 1) || 0
    }
  },
  watch: {
    currentSong (newSong, oldSong) {
      if (!newSong.id) {
        return
      }
      if (newSong.id === oldSong.id) {
        return
      }
      this.getPlaySongUrl(newSong.id)
      this.initMusicComment(newSong.id)
      this.initSimilarSong(newSong.id)
      this.initSimilarPlayList(newSong.id)
      this.initPlaySongLyric(newSong.id)
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
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlayList: 'SET_PLAY_LIST'
    }),
    canPlay () {
      this.readyFlag = true
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
      let list = null
      if (playMode === config.PLAY_MODE.random) {
        list = shuffle(this.sequenceList)
      } else {
        list = this.sequenceList
      }
      let index = findIndexById(list, this.currentSong)
      this.setCurrentIndex(index)
      this.setPlayList(list)
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
            this.setPlayState(false)
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
    },
    initSimilarSong (id) {
      getSimilarSong(id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.similarSongList = res.songs.map((song) => {
            return createSongBySimilar(song)
          })
          console.log(this.similarSongList)
        }
      })
    },
    initSimilarPlayList (id) {
      getSimilarPlaylist(id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.similarPlayList = res.playlists.map((playlist) => {
            return createPlaylistBySimilar(playlist)
          })
          console.log(this.similarPlayList)
        }
      })
    },
    initPlaySongLyric (id) {
      getPlaySongLyric(id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.lyric = formatLyric(res)
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
