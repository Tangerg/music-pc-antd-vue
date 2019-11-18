<template>
  <div>
    <ul class="cover-list">
      <li class="cover-item" v-for="(cover,index) in coverList" :key="index">
        <div class="cover" @click="clickCover(cover)">
          <div class="cover-main">
            <div class="playlist-copywriter" v-if="cover.playlist.copywriter">{{cover.playlist.copywriter}}</div>
            <div class="playlist-play-count"><a-icon type="customer-service" /> {{cover.playlist.playCount}}</div>
            <div class="cover-img"><img alt="封面" :src=cover.playlist.coverImgUrl /></div>
            <!--<div class="playlist-play-btn">
              <a-button shape="circle" icon="caret-right" @click="clickPlay(cover)"/>
            </div>-->
          </div>
          <div class="cover-text">{{cover.playlist.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PlaylistCover',
  props: {
    coverList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    clickCover (cover) {
      this.$emit('onClickCover', cover)
    },
    clickPlay (cover) {
      this.$emit('onClickPlay', cover)
    }
  }
}
</script>

<style lang="less">
  @import "./common";
  .cover-main{
    .playlist-copywriter {
      position: absolute;
      width: 100%;
      padding: 5px;
      top: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      transform: translateY(-100%);
      transition: all 0.3s;
    }
    .playlist-play-count {
      position: absolute;
      width: 60%;
      top: 0;
      right: 0;
      text-align: right;
      color: #fff;
      padding: 2px 10px 2px 0;
      background: linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    }
    .playlist-play-btn{
      position: absolute;
      right: 5px;
      bottom: 5px;
      opacity: 0;
    }
    &:hover {
      cursor: pointer;
      .playlist-play-btn{
        opacity: 1;
      }
      .playlist-copywriter {
        transform: translateY(0);
      }
      .playlist-play-count {
        visibility: hidden;
      }
    }
  }
</style>
