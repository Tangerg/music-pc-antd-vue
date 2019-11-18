<template>
  <div class="drawer-sequence-list">
    <a-list :dataSource="dataSource">
      <a-list-item slot="renderItem" slot-scope="item, index" @click="clickSong(item, index)">
        <div class="drawer-sequence-list-item">
          <div class="sequence-list-song-info">
            <div class="song-info-name">
              <span class="content-text" :class="currentPlay(item)">{{item.name}}</span>
              <a-icon class="mv-icon" v-if="item.mv !== 0" type="youtube" @click.stop="onClickMv(record.mv)"/>
            </div>
            <div class="song-info-other">
            <span class="song-info-artist content-text">
              <span v-for="(art,index) in item.artist" :key="index">
                <span class="artist-name" :class="currentPlay(item)" @click.stop="clickArtist(art)">{{art.name}}</span>
                <span v-if="index+1<item.artist.length"> / </span>
              </span>
            </span>
              <span class="song-info-duration">{{item.durationStr}}</span>
            </div>
          </div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: 'DrawerList',
  props: {
    dataSource: {
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
  mounted () {
    this.int()
  },
  methods: {
    int () {
      console.log(this.dataSource)
    },
    currentPlay (item) {
      if (item.id === this.currentSong.id) {
        return 'playing'
      }
    },
    clickSong (item, index) {
      this.$emit('onClickSong', item , index)
    },
    clickArtist (art) {
      this.$emit('onClickArtist', art)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~styles/mixin.less";
.drawer-sequence-list{
  /deep/ .ant-list-item-content-single {
    width: 100%;
  }
  .drawer-sequence-list-item{
    padding: 0 25px;
    width: 100%;
    color: var(--body-font-color-1--);
    .sequence-list-song-info{
      width: 100%;
      .no-wrap();
      .content-text{
        .no-wrap();
      }
      .playing{
        color: var(--header-logo-color--);
      }
      .song-info-name{
        width: 100%;
        font-size: 16px;
        display: flex;
        align-items: center;
        flex: 0 0 24px;
        .no-wrap();
        .mv-icon{
          margin-left: 5px;
          cursor: pointer;
          color: red;
        }
      }
      .song-info-other{
        display: flex;
        .song-info-artist{
          width: 80%;
          .artist-name{
            cursor: pointer;
          }
        }
        .song-info-duration{
          width: 20%;
          text-align: end;
          color: var(--body-font-color-2--);
        }
      }
    }
  }
}
</style>
