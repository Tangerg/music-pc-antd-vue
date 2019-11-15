<template>
  <div class="song-list">
    <a-list
      class="song-list-arr"
        v-for="(songList,listIndex) in songListArr"
        :key="listIndex"
        :dataSource="songList"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <div class="song-list-item">
          <div class="song-list-item-index">{{computedIndex(listIndex,index)}}</div>
          <card-item :item="item"></card-item>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import { addZero } from 'utils/time'
import CardItem from './CardItem'
export default {
  name: 'SongCard',
  props: {
    songListArr: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    computedIndex (listIndex, index) {
      return addZero(listIndex * this.songListArr[0].length + index + 1)
    }
  },
  components: {
    CardItem
  }
}
</script>

<style lang="less">
.song-list{
  margin-top: 15px;
  display: flex;
  .song-list-arr{
    width: 50%;
    border: 1px solid #e8e8e8;
    .ant-list-item-content-single{
      width: 100%;
    }
    .song-list-item{
      cursor: pointer;
      display: flex;
      align-items: center;
      .song-list-item-index{
        min-width: 0;
        padding: 0 15px;
      }
    }
    &:first-child{
      border-right: 0;
    }
  }
}
</style>
