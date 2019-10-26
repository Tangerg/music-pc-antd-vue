<template>
  <ul class="cover-list">
    <li class="cover-item" v-for="(cover,index) in coverList" :key="index">
      <div class="cover" @click="onClickCover(cover)">
        <div class="cover-other">
          <div class="cover-copywriter">{{cover.coverCopywriter}}</div>
          <div class="cover-play-count"><a-icon type="customer-service" /> {{cover.coverPlayCount}}</div>
          <div class="cover-img"><img alt="封面" :src=cover.coverImg /></div>
          <div class="cover-btn">
            <a-button shape="circle" icon="caret-right" @click="onClickPlay(cover)"/>
          </div>
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
  @import "../../styles/mixin.less";
  .cover-list {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .cover-item {
      width: 19%;
      margin: 5px 0;
      position: relative;
      overflow: hidden;
      .cover {
        .cover-other {
          position: relative;
          .cover-copywriter {
            position: absolute;
            padding: 6px;
            top: 0;
            width: 100%;
            color: white;
            border-radius: 5px 5px 0 0;
            background-color: rgba(0, 0, 0, 0.5);
            transform: translateY(-100%);
            transition: all 0.3s;
          }
          .cover-play-count {
            position: absolute;
            border-radius: 5px 5px 0 0;
            width: 60%;
            top: 0;
            right: 0;
            text-align: right;
            color: white;
            padding-right: 10px;
            background: linear-gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
            z-index: 999;
          }
          .cover-img {
            overflow: hidden;
            border-radius: 5px;
            &:hover {
              //box-shadow: 2px 2px 15px #bebebe;
            }
            img {
              width: 100%;
              border-radius: 5px;
            }
          }
          .cover-btn{
            position: absolute;
            right: 5px;
            bottom: 5px;
            opacity: 0;
          }
          &:hover {
            cursor: pointer;
            .cover-btn{
              opacity: 1;
            }
            .cover-copywriter {
              transform: translateY(0);
            }
            .cover-play-count {
              visibility: hidden;
            }
          }
        }
        .cover-text {
          width: 100%;
          margin: 5px 0;
          line-height: 20px;
          text-align: left;
          height: 60px;
          font-size: 15px;
          text-overflow:ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; //设置多行的行数
          -webkit-box-orient: vertical;
          overflow:hidden;
        }
      }
    }
  }
</style>
