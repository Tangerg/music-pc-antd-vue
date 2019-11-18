<template>
  <div class="song-card-list">
    <a-list
      class="song-list-arr"
      v-for="(songList,listIndex) in songListArr"
      :key="listIndex"
      :dataSource="songList"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <div class="song-list-item" @click="clickSong(item)">
          <div class="song-list-item-index">{{computedIndex(listIndex,index)}}</div>
          <card-item :item="item" @onClickArtist="clickArtist"></card-item>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import { addZero } from 'utils/time'
import CardItem from '../CardItem'
export default {
  name: 'NewSong',
  props: {
    songListArr: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    computedIndex (listIndex, index) {
      return addZero(listIndex * this.songListArr[0].length + index + 1)
    },
    clickSong (item) {
      this.$emit('onClickSong', item)
    },
    clickArtist (art) {
      this.$emit('onClickArtist', art)
    }
  },
  components: {
    CardItem
  }
}
</script>

<style lang="less">
  @import "~styles/mixin";
  .song-card-list{
    margin-top: 15px;
    display: flex;
    .song-list-arr{
      width: 50%;
      border: 1px solid #e8e8e8;
      .ant-list-item-content-single{
        width: 100%;
        .song-list-item{
          width: 100%;
          .no-wrap();
          display: flex;
          align-items: center;
          .song-list-item-index{
            width: 50px;
            text-align: center;
          }
        }
      }
      &:first-child{
        border-right: 0;
      }
    }
  }
</style>
