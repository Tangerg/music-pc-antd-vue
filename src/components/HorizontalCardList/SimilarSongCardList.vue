<template>
  <div class="card-list">
    <a-list :dataSource="songArr">
      <a-list-item slot="renderItem" slot-scope="item">
        <div style="width: 100%">
          <card-item :item="item" @onClickArtist="clickArtist"></card-item>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import CardItem from './CardItem'
export default {
  name: 'SimilarSongCardList',
  props: {
    songArr: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    clickPlaylist (item) {
      this.$emit('onclickPlaylist', item)
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

</style>
