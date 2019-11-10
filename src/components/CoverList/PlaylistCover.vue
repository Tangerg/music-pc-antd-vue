<template>
  <ul class="cover-list">
    <li class="cover-item" v-for="(cover,index) in coverList" :key="index">
      <div class="cover" @click="onClickCover(cover)">
        <div class="cover-other">
          <div class="cover-copywriter">{{cover.playlist.copywriter}}</div>
          <div class="cover-play-count"><a-icon type="customer-service" /> {{cover.playlist.playCount}}</div>
          <div class="cover-img"><img alt="封面" :src=cover.playlist.coverImgUrl /></div>
          <div class="cover-btn">
            <a-button shape="circle" icon="caret-right" @click="onClickPlay(cover)"/>
          </div>
        </div>
        <div class="cover-text">{{cover.playlist.name}}</div>
      </div>
    </li>
  </ul>
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
    onClickCover (cover) {
      this.$emit('onClickCover', cover)
    },
    onClickPlay (cover) {
      this.$emit('onClickPlay', cover)
    }
  }
}
</script>

<style lang="less">
  @import "./common";
</style>
