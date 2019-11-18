<template>
  <div>
    <a-drawer
      :closable="false"
      @close="closeDrawer"
      :visible="visible"
      width="350"
    >
      <div class="drawer">
        <div class="drawer-header">
          <div class="drawer-header-wrap">
            <div class="title">播放队列</div>
            <div class="count">
              <span class="count-num">共 {{totalNum}} 首</span>
              <span class="count-clear" @click="cleanPlayList">
              <a-icon type="delete" />清空
              </span>
            </div>
          </div>
        </div>
        <div class="drawer-body">
          <drawer-list
            :dataSource="songListData"
            :currentSong="currentSong"
            @onClickSong="clickSong"
            @onClickArtist="clickArtist"
          ></drawer-list>
        </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import { DrawerList } from '@c/HorizontalList'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    totalNum: {
      type: Number,
      default: 0
    },
    songListData: {
      type: Array,
      default: () => []
    },
    currentSong: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    closeDrawer () {
      this.$emit('closeDrawer', false)
    },
    cleanPlayList () {
      this.$emit('cleanPlayList')
    },
    clickSong (item, index) {
      this.$emit('onClickSong', item , index)
    },
    clickArtist (art) {
      this.$emit('onClickArtist', art)
    }
  },
  components: {
    DrawerList
  }
}
</script>
<style lang="less">
  @import "~styles/mixin";
  @import "~styles/var";
  .ant-drawer-body{
    height: 100%;
    padding: 0 !important;
  }
  .ant-list-item{
    &:hover{
      background-color: #f5f5f5;
    }
  }
  .drawer{
    height: 100%;
    overflow-y: hidden;
    &-header{
      height: 80px;
      padding: 0 20px;
      display: flex;
      border-bottom: @base--border;
      &-wrap{
        margin: auto;
        width: 100%;
        .title{
          font-size: 18px;
          margin-bottom: 5px;
        }
        .count{
          font-size: 15px;
          color: var(--body-font-color-2--);
          &-num{
          }
          &-clear{
            float: right;
            cursor: pointer;
          }
        }
      }
    }
    &-body{
      height: calc(100% - 80px);
      overflow-y: auto;
      overflow-x: hidden;
      .song-list-wrap{
        width: 300px;
        display: flex;
        padding: 0 20px;
        &:hover .song-time{
          visibility: hidden;
        }
        &:hover .song-control{
          visibility: visible;
        }
        .song-info{
          width: 70%;
          .song-info-title{
            font-weight: 500;
            font-size: 15px;
            width: 90%;
            .no-wrap()
          }
          .song-info-artist{
            width: 90%;
            font-size: 13px;
            .no-wrap()
          }
        }
        .song-time{
          //visibility: visible;
          float: right;
          font-size: 13px;
          color: #b6b6b6;
          margin: auto;
          margin-bottom: 0;
        }
        .song-control{
          cursor: pointer;
          visibility: hidden;
        }
      }
    }
  }
</style>
