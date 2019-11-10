<template>
  <ul class="cover-list">
    <li class="cover-item" v-for="(cover,index) in coverList" :key="index">
      <div class="cover" @click="onClickCover(cover)">
        <div class="cover-other">
          <div class="cover-img">
            <img alt="封面" :src=cover.artist.imageUrl />
          </div>
        </div>
        <div class="cover-text">{{cover.artist.name}}</div>
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
</style>
