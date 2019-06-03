<template>
  <div class="music-player">
<!--
    <div class="player-max">1212</div>
-->
    <div class="player-min">
      <div class="player-min-slider">
        <vue-slider v-model="value" dotSize="10" :silent="true"  :lazy="true" tooltip="none"></vue-slider>
      </div>
      <div class="player-min-info-control">
        <div class="info">
          <div class="info-song-cover">
            <img src="http://p2.music.126.net/t6pUXP9J35-tlp_F4b1_pA==/109951164107025135.jpg" alt="歌曲封面">
          </div>
          <div class="info-song-text">
            <span class="name">Lighters</span>
            <span class="singer">Eminem</span>
          </div>
        </div>
        <div class="play-control">
          <span class="control1">
            <a-icon type="heart" />
          </span>
          <span class="control">
            <a-icon type="left-circle" />
          </span>
          <span class="control control-center">
            <a-icon type="play-circle" />
          </span>
          <span class="control">
            <a-icon type="right-circle" />
          </span>
          <span class="control1">
            <a-icon type="sound" />
          </span>
        </div>
        <div class="other-control">
          <span class="control1">01:40/03:57</span>
          <span class="control1">
            <a-icon type="reload" />
          </span>
          <span class="control1">
           <a-icon type="align-left" />23
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  data () {
    return {
      value: 20
    }
  }
}
</script>

<style lang="less">
.music-player{
  .player-min{
    width: 100%;
    position: relative;
    background-color: #fff;
    .player-min-slider{
      width: 100%;
      position: absolute;
      top:-4px;
    }
    .player-min-info-control{
      height: 70px;
      display: flex;
      flex-direction: row;
      .info{
        flex: 0.3;
        display: flex;
        flex-direction: row;
        .info-song-cover{
          width: 50px;
          margin: auto 10px;
          img{
            width: 50px;
          }
        }
        .info-song-text{
          display: flex;
          flex-direction: column;
          .name{
            margin-top: 10px;
            font-size: 18px;
            font-weight: 500;
          }
          .singer{
            font-weight: lighter;
          }
        }
      }
      .play-control{
        flex: 0.4;
        margin: auto;
        text-align: center;
        height: 100%;
        .control1{
          font-size: 20px;
          margin: auto 10px;
          cursor: pointer;
          &:hover{
            color: #1e90ff;
          }
        }
        .control{
          height: 100%;
          //background-color: dodgerblue;
          font-size: 30px;
          margin: auto 10px;
          cursor: pointer;
          color: #1e90ff;
          &-center{
            font-size: 40px;
          }
        }
      }
      .other-control{
        flex: 0.3;
        margin: auto;
        text-align: right;
        .control1{
          font-size: 20px;
          margin: auto 10px;
          cursor: pointer;
          &:hover{
            color: #1e90ff;
          }
        }
      }
    }
  }
}
</style>
