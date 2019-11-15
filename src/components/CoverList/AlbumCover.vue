<template>
  <ul class="cover-list">
    <li class="cover-item" v-for="(cover,index) in coverList" :key="index">
      <div class="cover" @click="onClickCover(cover)">
        <div class="cover-main">
          <div class="cover-img">
            <div class="album-cover-cd" ></div>
            <img alt="封面" :src=cover.album.picUrl />
          </div>
        </div>
        <div class="album-text">
          <div class="album-name">{{cover.album.name}}{{cover.album.name}}{{cover.album.name}}{{cover.album.name}}{{cover.album.name}}</div>
          <div class="album-publish" v-if="display">{{cover.album.publishTime}}</div>
          <div class="album-artist" v-if="!display">{{cover.album.artist.name}}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ArtistCover',
  props: {
    coverList: {
      type: Array,
      default: () => []
    },
    display: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    onClickCover (cover) {
      this.$emit('onClickCover', cover)
    }
  }
}
</script>

<style lang="less">
@import "./common";
  .cover-main{
    .cover-img{
      .album-cover-cd{
        width: 100%;
        background-image: url("../../assets/album.png");
        height: 100%;
        position: absolute;
        right: -50px;
      }
    }
  }
  .album-text{
    margin: 5px 0 20px;
    .album-name{
      .line-clamp(2);
      color: var(--body-font-color-1--)
    }
    .album-publish{
      color: var(--body-font-color-2--)
    }
  }
</style>
