<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="closeDrawer"
      :visible="visible"
      width="300"
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
            <a-list
              itemLayout="horizontal"
              :dataSource="songListData"
              :locale="{emptyText: '暂无歌曲'}"
            >
              <a-list-item  slot="renderItem" slot-scope="item, index">
                <div class="song-list-wrap" @clcik="playItem(item)">
                  <div class="song-info">
                    <div class="song-info-title">{{item.name}}</div>
                    <div class="song-info-artist">{{item.artist[0].name}}</div>
                  </div>
                  <div class="song-time">{{item.time}}</div>
                  <div class="song-control">
                    <span @click="playItem(item)">
                      <a-icon type="play-circle" />
                    </span>
                    <span>
                      <a-icon type="delete" />
                    </span>
                  </div>
                </div>
              </a-list-item>
            </a-list>
        </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
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
    playItem (item) {
      this.$emit('playItem', item)
    }
  }
}
</script>
<style lang="less">
  @import "~styles/mixin";
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
      background-color: #f5f5f5;
      padding: 0 20px;
      display: flex;
      &-wrap{
        margin: auto;
        width: 100%;
        .title{
          font-size: 18px;
          margin-bottom: 5px;
        }
        .count{
          font-size: 15px;
          color: #a8a8a8;
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
            .one-line()
          }
          .song-info-artist{
            width: 90%;
            font-size: 13px;
            .one-line()
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
