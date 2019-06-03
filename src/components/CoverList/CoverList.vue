<template>
  <ul class="cover-list">
    <li class="cover-item" v-for="(cover,index) in coverList" :key="index">
      <div class="cover" @click="onClickCover(cover.coverId)">
        <div class="cover-img">
          <img
            alt="歌单封面"
            :src=cover.coverImg
          />
        </div>
        <div class="cover-text">{{cover.coverName}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CoverList',
  props: {
    coverList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onClickCover (id) {
      this.$router.push(`/song-list/${id}`)
    }
  }
}
</script>

<style lang="less">
  .cover-list {
    width: 100%;
    .cover-item {
      width: 20%;
      position: relative;
      display: inline-block;
      padding: 5px 5px;
      box-sizing: border-box;
      .cover {
        .cover-img {
          position:relative;
          //border: 1px #ccd2d6 solid;
          &:hover{
            box-shadow:2px 2px 15px #333333;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 0;
          }
        }
        .cover-text {
          margin: 5px 0;
          float: left;
          line-height: 20px;
          text-align: left;
          height: 60px;
          overflow: hidden;
          font-size: 15px;
          padding-bottom: 15px;
        }
      }
    }
  }
</style>
