<template>
<transition name="player-min-transition">
  <div class="player-min">
    <div class="player-min-slider">
      <progress-bar :percent="percent" @onValueChange="onChangeSliderValue"></progress-bar>
    </div>
    <div class="player-min-control">
      <div class="control-left">
        <div class="song-cover">
          <img class="cursor" :src=currentSong.picUrl @click="onChangePlayerDisplay(true)" alt="封面">
        </div>
        <div class="song-text">
          <div class="song-text-common song-text-name cursor" @click="onChangePlayerDisplay(true)">{{currentSong.name}}</div>
          <div class="song-text-common song-text-artist">
            <span v-for="(artist,index) in currentSong.artist" :key="index">
              <span class="cursor" @click="onClickArtist(artist)">{{artist.name}}</span>
              <span v-if="index < currentSong.artist.length-1"> / </span>
            </span>
          </div>
        </div>
      </div>
      <div class="control-center">
        <div class="btn-group">
          <span class="control control-other ">
            <a-icon class="cursor" type="heart" :theme="likeStateIcon" style="color: var(--header-bg-color--)" @click="onClickLike"/>
          </span>
          <span class="control control-play cursor" >
            <a-icon type="left-circle" @click="onClickPrev"/>
          </span>
          <span class="control control-play control-play-center cursor" >
            <a-icon :type=playStateIcon @click="onChangePlayState"/>
          </span>
          <span class="control control-play cursor" >
            <a-icon type="right-circle" @click="onClickNext"/>
          </span>
          <span class="control control-other cursor">
            <a-icon :type=playModeIcon @click="onChangePlayMode"/>
          </span>
        </div>
      </div>
      <div class="control-right">
        <div class="btn-group">
          <span class="control control-time">{{currentTime}} / {{currentSong.durationStr}}</span>
          <span class="control control-other cursor">
            <a-icon type="sound" @click="onClickSound"/>
          </span>
          <span class="control control-other cursor" @click="onClickDrawer">
            <a-icon type="bars" />
            <span class="song-count"> {{countNum}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import ProgressBar from '../ProgressBar'
import config from '@/config/config'
export default {
  name: 'MinPlayer',
  props: {
    playState: {
      type: Boolean,
      default: false
    },
    likeState: {
      type: Boolean,
      default: false
    },
    currentTime: {
      type: String,
      default: '00:00'
    },
    playMode: {
      type: Number,
      default: config.PLAY_MODE.sequence
    },
    countNum: {
      type: Number,
      default: 0
    },
    currentSong: {
      type: Object,
      default: function () {
        return {}
      }
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  computed: {
    playStateIcon () {
      return this.playState ? 'pause-circle' : 'play-circle'
    },
    playModeIcon () {
      return this.playMode === config.PLAY_MODE.sequence
        ? 'menu-unfold' : this.playMode === config.PLAY_MODE.singleLoop
          ? 'retweet' : 'question'
    },
    likeStateIcon () {
      return this.likeState ? 'filled' : 'outlined'
    }
  },
  methods: {
    onClickDrawer () {
      this.$emit('onClickDrawer', true)
    },
    onChangePlayerDisplay (flag) {
      this.$emit('onChangePlayerDisplay', flag)
    },
    onClickArtist (artist) {
      this.$emit('onClickArtist', artist)
    },
    onClickLike () {
      this.$emit('onClickLike')
    },
    onChangePlayState () {
      this.$emit('onChangePlayState')
    },
    onClickPrev () {
      this.$emit('onClickPrev')
    },
    onClickNext () {
      this.$emit('onClickNext')
    },
    onChangePlayMode () {
      this.$emit('onChangePlayMode')
    },
    onClickSound () {
      this.$emit('onClickSound')
    },
    onChangeSliderValue (value) {
      this.$emit('onChangeSliderValue', value)
    }
  },
  components: {
    ProgressBar
  }
}
</script>

<style lang="less">
  @import "~styles/mixin";
  .player-min{
    &.player-min-transition-enter-active, &.player-min-transition-leave-active {
      transform: translateY(0);
      transition: all 0.2s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
    &.player-min-transition-enter, &.player-min-transition-leave-to {
      transform: translateY(100%);
      transition: all 0.2s cubic-bezier(0.86, 0.18, 0.82, 1.32);
      // opacity:0;
    }
  }
  .player-min {
    position: relative;
    background: var(--body-bg-color--);
    .player-min-slider {
      width: 100%;
      position: absolute;
      top: -5px;
    }
    .player-min-control {
      height: 70px;
      display: flex;
      .control-left {
        width: 33%;
        display: flex;
        .song-cover {
          width: 70px;
          height: 70px;
          padding: 10px;
          position: relative;
          &:hover .open-max-player{
            visibility: visible;
          }
          .open-max-player{
            position: absolute;
            top: 10px;
            left: 10px;
            width: 50px;
            height: 50px;
            border-radius: 2px;
            background-color: rgba(65, 65, 65, 0.5);
            visibility: hidden;
            cursor: pointer;
            .icon{
              color: #eef4f8;
              width: 100%;
              font-size: 30px;
              text-align: center;
            }
          }
          img {
            width: 50px;
            height: 50px;
            border-radius: 2px;
          }
        }
        .song-text {
          width: calc(100% - 70px);
          margin: auto;
          display: inline-block;
          .no-wrap();
          &-common {
            width: calc(100% - 10px);
          }
          &-name {
            font-size: 17px;
            font-weight: 500;
          }
          &-artist {
            font-size: 15px;
            font-weight: 400;
          }
        }
      }
      .control-center {
        width: 34%;
        margin: auto;
        .btn-group{
          display: flex;
          justify-content:center;
        }
      }
      .control-right {
        width: 33%;
        margin: auto;
        .btn-group{
          padding-right: 10px;
          display: flex;
          justify-content: flex-end;
        }
      }
      .control{
        margin: auto 10px;
        &-play{
          margin: auto 10px;
          color: var(--header-bg-color--);
          font-size: 30px;
          &-center{
            font-size: 40px;
          }
        }
        &-other{
          font-size: 20px;
          &:hover {
            color: var(--header-bg-color--);
          }
          .song-count{
            font-size: 17px;
            font-weight: 400;
          }
        }
        &-time{
          color: var(--body-font-color-2--);
          font-weight: 400;
        }
      }
      .cursor{
        cursor: pointer;
      }
    }
  }
</style>
