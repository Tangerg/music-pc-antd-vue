<template>
  <div>
    <div class="card-item">
      <div class="card-item-cover">
        <img :src="item.picUrl || item.picUrl" alt="封面">
      </div>
      <div class="card-item-text" v-if="item.playCount">
        <div class="name">{{item.name}}</div>
        <div class="other">播放：{{item.playCount}}</div>
      </div>
      <div class="card-item-text" v-if="item.artist">
        <div class="name">{{item.name}}{{item.name}}{{item.name}}</div>
        <span v-for="(art,index) in item.artist" :key="index" class="content-text">
        <span class="artist-name">{{art.name}}</span>
        <span v-if="index+1<item.artist.length"> / </span>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less">
  @import "~styles/mixin.less";
    .card-item{
      display: flex;
      align-items: center;
      min-width: 0;
      .card-item-cover{
        flex: 0 0 auto;
        img{
          width: 50px;
        }
      }
      .card-item-text{
        flex: 0 0 auto;
        margin-left: 10px;
        min-width: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .name{
          .no-wrap
        }
        .other{
          .no-wrap
        }
      }
    }
</style>
