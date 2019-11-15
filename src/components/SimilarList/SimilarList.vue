<template>
  <div class="similar-list">
    <a-list itemLayout="horizontal" :dataSource="dataSource"  v-if="dataType === 1">
      <a-list-item slot="renderItem" slot-scope="item, index" @click="onClickPlaylist(item)">
        <div class="list-item">
          <div class="item-cover">
            <img :src="item.coverImgUrl" alt="">
          </div>
          <div class="item-text">
            <div class="name">{{item.name}}</div>
            <div class="other">播放：{{item.playCount}}</div>
          </div>
        </div>
      </a-list-item>
    </a-list>
    <a-list itemLayout="horizontal" :dataSource="dataSource" v-if="dataType === 2">
      <a-list-item slot="renderItem" slot-scope="item, index" @click="onClickSong(item)">
        <div class="list-item">
          <div class="item-cover">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="item-text">
            <div class="name">{{item.name}}</div>
            <span v-for="(art,index) in item.artist" :key="index" class="content-text">
              <span class="artist-name">{{art.name}}</span>
              <span v-if="index+1<item.artist.length"> / </span>
            </span>
          </div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: 'SimilarList',
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    dataType: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onClickPlaylist (item) {
      console.log(item)
    },
    onClickSong (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less">
  @import "~styles/mixin.less";
.similar-list{
  width: 100%;
  .list-item{
     display: flex;
     .item-cover{
       width: 50px;
       img{
         width: 100%;
       }
     }
     .item-text{
       margin-left: 10px;
       .name{
         .no-wrap
       }
       .other{
         .no-wrap
       }
     }
   }
}
</style>
