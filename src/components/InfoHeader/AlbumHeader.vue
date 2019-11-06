<template>
  <div class="info-header">
    <!--信息上半部分-->
    <div class="info-main">

      <!--左侧封面图-->
      <div class="info-main-left album-left">
        <div class="info-cover" >
          <div class="info-cover-album" ></div>
          <img :src=Info.content.coverImg alt="封面">
        </div>
      </div>
      <!--左侧封面图-->

      <!--中部三选一-->
      <div class="info-main-center">
        <div class="info-center info-album" >
          <div class="info-title album-title">
            <span class="info-type">专辑</span>
            <span>与火星的孩子对话</span>
          </div>
          <div class="btn-group album-operate">
            <a-button icon="play-circle" type="primary" class="operate-btn" >播放全部</a-button>
            <a-button icon="folder-add" type="primary" class="operate-btn" >收藏(254562)</a-button>
            <a-button icon="share-alt" type="primary" class="operate-btn" >分享(236)</a-button>
          </div>
          <div class="info-text-group">
            <div class="text-item album-artist">歌手：华晨宇</div>
            <div class="text-item album-time">时间：2019-10-28</div>
          </div>
        </div>
      </div>
    </div>
    <!--信息上半部分-->

    <div class="info-column">下方操作</div>
  </div>
</template>

<script>
export default {
  name: 'InfoHeader',
  props: {
    content: {
      type: Object,
      default: () => {
      }
    }
  },
  data () {
    return {
      overflow: true
    }
  },
  computed: {
    introduceClass () {
      return this.overflow ? 'playlist-introduce-fold' : 'playlist-introduce'
    }
  },
  methods: {
    showMore () {
      this.overflow = !this.overflow
    }
  }
}
</script>

<style lang="less">
  @import "./common";
  .album-left{
    margin-right: 53px !important;
    .info-cover-album{
      width: 200px;
      height: 100%;
      position: absolute;
      left: 23px;
      background-image: url("../../assets/album.png");
    }
  }
</style>
