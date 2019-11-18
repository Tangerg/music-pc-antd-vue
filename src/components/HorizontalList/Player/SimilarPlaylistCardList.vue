<template>
  <div class="card-list">
    <a-list :dataSource="playlistArr">
      <a-list-item slot="renderItem" slot-scope="item" @click="clickPlaylist(item)">
        <card-item :item="item"></card-item>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import CardItem from '../CardItem'
export default {
  name: 'SimilarPlaylistCardList',
  props: {
    playlistArr: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    clickSong (item) {
      this.$emit('onClickSong', item)
    }
  },
  components: {
    CardItem
  }
}
</script>

<style lang="less">
</style>
