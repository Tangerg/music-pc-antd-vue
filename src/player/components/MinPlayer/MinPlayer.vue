<template>
  <div class="player-min">
    <div class="player-min-slider">
      <progress-bar></progress-bar>
    </div>
    <div class="player-min-control">
      <div class="control-left">
        <div class="song-cover">
          <div class="open-max-player" @click="changePlayerState(true)">
            <div class="icon">
              <a-icon type="fullscreen" />
            </div>
          </div>
          <img src="http://p2.music.126.net/t6pUXP9J35-tlp_F4b1_pA==/109951164107025135.jpg" alt="封面">
        </div>
        <div class="song-text">
          <span class="song-text-common song-text-name">Lighters</span>
          <span class="song-text-common song-text-artist">Eminem</span>
        </div>
      </div>
      <div class="control-center">
        <div class="btn-group">
          <span class="control control-other">
            <!--<a-icon type="heart" />-->
            <a-icon type="heart" theme="filled" style="color: #f46b47" />
          </span>
          <span class="control control-play" @clcik="prevSong">
            <a-icon type="left-circle"/>
          </span>
          <span class="control control-play control-play-center" @click="changePlayState">
            <a-icon :type=playStateIcon />
          </span>
          <span class="control control-play" @clcik="nextSong">
            <a-icon type="right-circle"/>
          </span>
          <span class="control control-other">
            <a-icon type="reload"/>
          </span>
        </div>
      </div>
      <div class="control-right">
        <div class="btn-group">
          <span class="control control-time">{{currentTime}} / {{fullTime}}</span>
          <span class="control control-other">
            <a-icon type="sound"/>
          </span>
          <span class="control control-other" @click="showDrawer()">
            <a-icon type="bars" />
          <span class="song-count"> {{totalNum}}</span>
        </span>
        </div>
      </div>
    </div>
  </div>
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
    currentTime: {
      type: String,
      default: '00:00'
    },
    fullTime: {
      type: String,
      default: '00:00'
    },
    playMode: {
      type: Number,
      default: config.PLAY_MODE.sequence
    },
    totalNum: {
      type: Number,
      default: 0
    }
  },
  computed: {
    playStateIcon () {
      return this.playState ? 'pause-circle' : 'play-circle'
    }
  },
  methods: {
    showDrawer () {
      this.$emit('showDrawer', true)
    },
    changePlayerState (flag) {
      this.$emit('changePlayerState', flag)
    },
    changePlayState () {
      this.$emit('changePlayState')
    },
    prevSong () {
      this.$emit('prevSong')
    },
    nextSong () {
      this.$emit('nextSong')
    }
  },
  components: {
    ProgressBar
  }
}
</script>

<style lang="less">
  @import "../../../styles/mixin";
  .player-min {
    width: 100%;
    position: relative;
    background-color: #fff;
    //box-sizing: border-box;
    .player-min-slider {
      width: 100%;
      position: absolute;
      top: -4px;
    }
    .player-min-control {
      height: 70px;
      display: flex;
      flex-direction: row;
      .control-left {
        width: 33%;
        display: flex;
        flex-direction: row;
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
          display: flex;
          flex-direction: column;
          &-common {
            width: calc(100% - 10px);
            .one-line();
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
          flex-direction: row;
          justify-content:center;
        }
      }
      .control-right {
        width: 33%;
        margin: auto;
        .btn-group{
          padding-right: 10px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
      }
      .control{
        margin: auto 10px;
        cursor: pointer;
        &-play{
          margin: auto 10px;
          color: #4ccc65;
          font-size: 30px;
          &-center{
            font-size: 40px;
          }
        }
        &-other{
          font-size: 20px;
          &:hover {
            color: #4ccc65;
          }
          .song-count{
            font-size: 17px;
            font-weight: 400;
          }
        }
        &-time{
          color: #b6b6b6;
          font-weight: 400;
        }
      }
    }
  }
</style>
