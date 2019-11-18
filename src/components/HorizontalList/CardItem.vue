<template>
  <div class="card-item">
      <div class="card-item-cover">
        <img :src="item.picUrl || item.coverImgUrl" alt="封面">
      </div>
      <div class="card-item-text" v-if="item.playCount">
        <div class="item-name">{{item.name}}</div>
        <div class="item-other">播放：{{item.playCount}}</div>
      </div>
      <div class="card-item-text" v-if="item.artist">
        <div class="item-name">{{item.name}}</div>
        <div class="item-other">
          <span v-for="(art,index) in item.artist" :key="index">
          <span class="artist-name" @click.stop="clickArtist(art)">{{art.name}}</span>
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
  },
  methods: {
    clickArtist (art) {
      this.$emit('onClickArtist', art)
    }
  }
}
</script>

<style lang="less">
  @import "~styles/mixin.less";
    .card-item{
      width: 100%;
      display: flex;
      align-items: center;
      min-width: 0;
      .card-item-cover{
        img{
          width: 50px;
        }
      }
      .card-item-text{
        margin: 0 10px;
        min-width: 0;
        .no-wrap();
        .item-name{
          color: var(--body-font-color-1--);
          .no-wrap();
        }
        .item-other{
          color: var(--body-font-color-2--);
          .no-wrap();
          .artist-name{
            .color-cursor();
          }
        }
      }
    }
</style>
