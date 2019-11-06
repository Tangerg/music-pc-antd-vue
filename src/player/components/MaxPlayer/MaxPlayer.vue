<template>
<div class="player-max">
  <div class="player-max-content">
    <a-button icon="fullscreen-exit" class="fullscreen-exit" @click="onChangePlayerDisplay(false)"></a-button>
    <div class="player-max-container">
      <div class="song-info">
        <div class="song-info-left">
          <img class="play-bar-support" src="../../../assets/play-bar-support.png" alt="">
          <img class="play-bar" :class="isPlaying" src="../../../assets/play-bar.png" alt="">
          <div class="cd-wrapper" >
            <div class="cd-img" :class="isPlaying">
              <div class="img-wrapper">
                <img :src=currentSong.picUrl />
              </div>
            </div>
          </div>
          <div class="btn-group">
            <a-button icon="heart" class="operate-btn" >喜欢</a-button>
            <a-button icon="folder-add" class="operate-btn" >收藏</a-button>
            <a-button icon="share-alt" class="operate-btn" >分享</a-button>
          </div>
        </div>
        <div class="song-info-right">
          <div class="song-name">
            <span class="name">{{currentSong.name}}</span>
            <span class="mv-tag" v-if="currentSong.mv">MV</span>
          </div>
          <div class="desc">
            <div class="desc-item">
              <span class="label">歌手：</span>
              <div v-for="(artist,index) in currentSong.artist">
                <span class="value">{{artist.name}}</span>
                <span v-if="index < currentSong.artist.length - 1">&nbsp;/&nbsp;</span>
              </div>
            </div>
            <div class="desc-item">
              <span class="label">专辑：</span>
              <div class="value">{{currentSong.album.name}}</div>
            </div>
          </div>
          <div>歌词组件</div>
        </div>
      </div>
      <div class="song-comment">
        <div class="song-comment-left">
          <div class="playlist-comment">
            <div>精彩评论</div>
            <comment-list :commentList="hotComments"></comment-list>
          </div>
          <div class="playlist-comment">
            <div>最新评论</div>
            <comment-list :commentList="comments"></comment-list>
          </div>
        </div>
        <div class="song-comment-right">
          <div>
            <div>相似歌曲</div>
            <div>
              <a-list itemLayout="horizontal" :dataSource="similarSongList">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <div>
                    <div><img style="width: 50px" :src="item.picUrl" alt=""></div>
                    <div>
                      <div>{{item.name}}</div>
                      <div>{{item.artist[0].name}}</div>
                    </div>
                  </div>
                </a-list-item>
              </a-list>
            </div>
          </div>
          <div>
            <div>包含歌单</div>
            <div>
              <a-list itemLayout="horizontal" :dataSource="similarPlayList">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <div>
                    <div><img style="width: 50px" :src="item.coverImg" alt=""></div>
                    <div>
                      <div>{{item.coverName}}</div>
                      <div>{{item.coverPlayCount}}</div>
                    </div>
                  </div>
                </a-list-item>
              </a-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="player-max-control">
    <div class="player-min-slider">
      <progress-bar></progress-bar>
    </div>
    <div class="player-min-control">
      <div class="control-left">
        <div class="song-cover">
          <img class="cursor" :src=currentSong.picUrl @click="onChangePlayerDisplay(true)" alt="封面">
        </div>
        <div class="song-text">
          <div class="song-text-common song-text-name cursor" @click="onChangePlayerDisplay(true)">{{currentSong.name}}</div>
          <span class="song-text-common song-text-artist" v-for="(artist,index) in currentSong.artist" :key="index">
            <span class="cursor" @click="onClickArtist(artist)">{{artist.name}}</span>
            <span v-if="index < currentSong.artist.length-1"> / </span>
          </span>
        </div>
      </div>
      <div class="control-center">
        <div class="btn-group">
          <span class="control control-other ">
            <a-icon class="cursor" type="heart" :theme="likeStateIcon" style="color: rgba(16,137,255,0.84)" @click="onClickLike"/>
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
          <span class="control control-other cursor" >
            <a-icon type="bars" @click="onClickDrawer"/>
            <span class="song-count"> {{countNum}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CommentList from '@c/CommentList'
import ProgressBar from '../ProgressBar'
import config from '@/config/config'
export default {
  name: 'MaxPlayer',
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
    comments: {
      type: Array,
      default: () => []
    },
    hotComments: {
      type: Array,
      default: () => []
    },
    similarSongList: {
      type: Array,
      default: () => []
    },
    similarPlayList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isPlaying () {
      return this.playState ? 'playing' : 'paused'
    },
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
    }
  },
  components: {
    ProgressBar,
    CommentList
  }
}
</script>

<style lang="less" scoped>
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(1turn);
    }
  }
  @import "~styles/mixin";
  .player-max{
  z-index: 200;
  width: 100%;
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  overflow: hidden;
  .fullscreen-exit{
    position: fixed;
    top: 50px;
    right: 50px;
  }
  .player-max-content{
    z-index: 200;
    position: absolute;
    top:0;
    right: 0;
    left: 0;
    bottom: 70px;
    padding-bottom: 5px;
    overflow: hidden;
    overflow-y: auto;
    .player-max-container{
      max-width: 900px;
      margin: auto;
      .song-info{
        display: flex;
        margin-bottom: 50px;
        &-left{
          position: relative;
          padding: 80px 70px 0 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .play-bar-support {
            position: absolute;
            left: calc( 36px + 320px / 2 - 30px / 2 );
            top: -15px;
            width: 30px;
            height: 30px;
            z-index: 2;
          }
          .play-bar {
            position: absolute;
            top: 0;
            left: calc( 36px + 320px / 2 - 6px );
            width: 100px;
            height: 146px;
            z-index: 1;
            transform-origin: 0 0;
            transform: rotate(-30deg);
            transition: all 0.3s;
            &.playing {
              transform: rotate(0deg);
            }
          }
          .cd-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 360px;
            height: 360px;
            background: #dfdfdf;
            border-radius: 50%;
            .cd-img {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: black;
              background: linear-gradient(-45deg, #333540, #070708, #333540);
              animation: rotate 20s linear infinite;
              &.paused {
                animation-play-state: paused;
              }
              .img-wrapper {
                width: 200px;
                height: 200px;
                flex-shrink: 0;
                img {
                  width: 100%;
                  border-radius: 50%;
                }
              }
            }
          }
          .btn-group{
            margin-top: 50px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .operate-btn{

            }
          }
        }
        &-right{
          flex: 1;
          padding-top: 45px;
          .song-name {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            .name {
              font-size: 24px;
              color: black;
            }
            .mv-tag {
              display: inline-block;
              margin-left: 8px;
              padding: 2px;
              border: 1px solid currentColor;
              border-radius: 2px;
              color: #d33a31;
              cursor: pointer;
            }
          }

          .artists {
            margin-bottom: 16px;
          }

          .desc {
            display: flex;
            font-size: 12px;
            margin-bottom: 30px;

            .desc-item {
              display: flex;
              margin-right: 32px;
              .label {
                display: inline-block;
                margin-right: 4px;
              }
              .value {
                color: blue;
              }
            }

            .lyric-wrap {
              width: 380px;
              height: 350px;
              mask-image: linear-gradient(
                180deg,
                hsla(0, 0%, 100%, 0) 0,
                hsla(0, 0%, 100%, 0.6) 15%,
                #fff 25%,
                #fff 75%,
                hsla(0, 0%, 100%, 0.6) 85%,
                hsla(0, 0%, 100%, 0)
              );

              .lyric-item {
                margin-bottom: 16px;
                font-size: 12px;

                &.active {
                  font-size: 14px;
                  color: white;
                  font-weight: 700;
                }

                .lyric-text {
                  margin-bottom: 8px;
                }
              }
            }
          }
        }
      }
      .song-comment{
        display: flex;
        &-left{
        }
        &-right{
        }
      }
    }
  }
  .player-max-control{
    position: fixed;
    z-index: 1002;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    .player-min-slider {
      width: 100%;
      position: absolute;
      top: -5px;
      padding: 0 5px;
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
          .one-line();
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
          color: #1089ff;
          font-size: 30px;
          &-center{
            font-size: 40px;
          }
        }
        &-other{
          font-size: 20px;
          &:hover {
            color: #1089ff;
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
      .cursor{
        cursor: pointer;
      }
    }
  }
}
</style>
