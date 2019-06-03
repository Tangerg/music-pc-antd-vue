<template>
  <div class="song-list-info">
    <div class="list-img">
      <img :src=ListInfo.coverImgUrl alt="图片">
    </div>
    <div class="list-info">
      <h5 class="list-info-title">{{ListInfo.name}}</h5>
      <div class="list-creator">
       <span class="list-info-creator">
        <a-avatar :src="ListInfo.creator.avatarUrl">
        </a-avatar>
        {{ListInfo.creator.creatorName}}
      </span>
        <span class="list-info-create-time">
        {{ListInfo.createTime}}
      </span>
      </div>
      <div class="btn-group">
        <a-button icon="play-circle" class="btn">播放全部</a-button>
        <a-button icon="folder-add" class="btn">{{subscribedCount}}</a-button>
        <a-button icon="share-alt" class="btn">{{shareCount}}</a-button>
      </div>
      <div class="list-info-tags">
        标签：
        <span style="color: #1b7ad9;" v-for="(tag,index) in ListInfo.tags">
          {{tag}}
          <span v-if="index !==ListInfo.tags.length-1" style="color: #2e2e2e;">/</span>
        </span>
      </div>
      <div class="list-info-desc">
        简介：{{ListInfo.descriptionOld}}
        <a-popover placement="bottom" trigger="click">
          <template slot="content">
            <div class="desc-popover">{{ListInfo.description}}</div>
          </template>
          <span class="desc-detail">详情</span>
        </a-popover>
      </div>
    </div>
    <div class="count-info">
      <div class="songs-count">
        <div>歌曲数</div>
        <div>{{ListInfo.trackCount}}</div>
      </div>
      <div class="play-count">
        <div>播放数</div>
        <div>{{ListInfo.playCount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListInfo',
  props: {
    ListInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    subscribedCount () {
      return `收藏(${this.ListInfo.subscribedCount})`
    },
    shareCount () {
      return `分享(${this.ListInfo.shareCount})`
    }
  }
}
</script>

<style lang="less">
  @import "../../styles/mixin.less";
  .song-list-info {
    position: relative;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    .list-img {
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .list-info {
      position: relative;
      margin-left: 30px;
      height: 100%;
      max-width: 500px;
      .list-info-title {
        margin-bottom: 20px;
      }
      .list-creator {
        margin-bottom: 20px;
        .list-info-creator {
          margin-right: 10px;
        }
        .list-info-create-time {
          margin-left: 10px;
          color: gray;
        }
      }
      .btn-group {
        margin-bottom: 20px;
        .btn {
          margin-right: 15px;
        }
      }
      .list-info-desc {
        margin-top: 5px;
        width: 85%;
        line-height: 20px;;
        height: 20px;
        overflow-y: hidden;
        .one-line();
        .desc-popover{
          max-width: 200px;
        }
        .desc-detail {
          position: absolute;
          right: 20px;
          color: dodgerblue;
          cursor: pointer;
        }
      }
    }
    .count-info {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: 20px;
      right: 20px;
      color: gray;
      text-align: right;
      .songs-count {
        padding: 0 10px;
        border-right: 1px solid #a1a5a9;
      }
      .play-count {
        padding: 0 10px;
      }
    }
  }
</style>
