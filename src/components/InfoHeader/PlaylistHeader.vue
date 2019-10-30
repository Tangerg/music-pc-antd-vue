<template>
  <div class="info-header">
    <div class="info-main">
      <div class="info-main-left">
        <div class="info-cover" >
          <img :src=Content.coverImgUrl alt="封面">
        </div>
      </div>
      <div class="info-main-center">
        <div class="info-center info-playlist">
          <div class="info-title playlist-title">
            <span class="info-type">歌单</span>
            <span>{{Content.name}}</span>
          </div>
          <div class="playlist-create">
            <a-avatar :src=Content.creator.avatarUrl icon="user"/>
            <div class="create-creater">{{Content.creator.nickname}}</div>
            <div class="create-time">{{Content.createTime}}创建</div>
          </div>
          <div class="btn-group playlist-operate">
            <a-button icon="play-circle" type="primary" class="operate-btn" >播放全部</a-button>
            <a-button icon="folder-add" type="primary" class="operate-btn" >收藏({{Content.subscribedCount}})</a-button>
            <a-button icon="share-alt" type="primary" class="operate-btn" >分享({{Content.shareCount}})</a-button>
          </div>
          <div class="info-text-group">
            <div class="text-item playlist-tag" v-if="Content.tags">标签:<span class="tags"  v-for="(tag,index) in Content.tags" :key="index" @click="onClickTag(tag)"> {{tag}} <span class="slant-line" v-if="index !== Content.tags.length-1">/</span>
              </span>
            </div>
            <div class="text-item" :class="introduceClass">简介: <span v-html="Content.description"></span></div>
          </div>
        </div>
      </div>
      <div class="info-main-right">
        <div class="info-playlist-right">
          <div class="info-playlist-count">
            <div class="songs-count">
              <div>歌曲数</div>
              <div>{{Content.trackCount}}</div>
            </div>
            <div class="play-count">
              <div>播放数</div>
              <div>{{Content.playCount}}</div>
            </div>
          </div>
          <div class="list-introduce-more" @click="changeFold">
            <a-icon :type=arrow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoHeader',
  props: {
    Content: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      fold: true
    }
  },
  computed: {
    introduceClass () {
      return this.fold ? 'playlist-introduce-fold' : 'playlist-introduce'
    },
    arrow () {
      return this.fold ? 'down' : 'up'
    }
  },
  methods: {
    changeFold () {
      this.fold = !this.fold
    },
    onClickTag (tag) {
      this.$emit('onClickTag', tag)
    }
  }
}
</script>

<style lang="less">
  @import "./common";
  .info-playlist{
    .playlist-create{
      display: flex;
      margin: 5px 0;
      align-items: center;
      .create-creater{
        margin: 0 20px 0 10px;
        cursor: pointer;
        font-size: 16px;
      }
      .create-time{
        color: #585858;
        font-size: 14px;
        font-weight: lighter;
      }
    }
    .tags{
      color: #1089ff;
      cursor: pointer;
      .slant-line{
        color: black;
        cursor: auto;
      }
    }
    .playlist-introduce{
      width: 100%;
      line-height: 20px;
      text-align: left;
      &-fold{
        line-height: 20px;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
  .info-playlist-count{
    min-width: 150px;
    display: flex;
    font-size: 12px;
    text-align: right;
    .songs-count{
      padding-right: 20px;
      margin-right: 20px;
      border-right: 1px solid dimgray;
    }
    .play-count{
      //text-align: left;
    }
  }
  .list-introduce-more{
    position: absolute;
    top: 160px;
    right: 10px;
    &:hover{
      cursor: pointer;
    }
  }
</style>
