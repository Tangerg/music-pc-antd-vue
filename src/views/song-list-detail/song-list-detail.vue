<template>
<div style="overflow-y: scroll;height: 100%">
  <song-list-info :ListInfo="listInfo" @playAll="playAll()"></song-list-info>
  <song-list-table :columns="columns" :dataSource="songList"></song-list-table>
</div>
</template>

<script>
import config from '@/config/config'
import SongListInfo from '@c/ListInfo'
import SongListTable from '@c/ListTable'
import { getPlayList } from 'api/songList'
import { createListInfo } from '@/class/listInfo'
import { createSong } from '@/class/song'
import { mapActions } from 'vuex'

const COLUMNS = [
  {
    title: '#',
    align: 'center',
    scopedSlots: { customRender: 'songIndex' },
    width: '100px'
  },
  {
    title: '歌曲',
    dataIndex: 'name'
  }, {
    title: '歌手',
    dataIndex: 'artist[0].name',
    width: '20%'
  }, {
    title: '专辑',
    dataIndex: 'album.name'
  },
  {
    title: '时长',
    dataIndex: 'time',
    width: '20%'
  }
]
export default {
  name: 'song-list-detail',
  data () {
    return {
      songList: [],
      listInfo: {},
      columns: COLUMNS
    }
  },
  beforeMount () {
    this.init()
  },
  methods: {
    ...mapActions([
      'sequencePlay'
    ]),
    init () {
      this.params = this.$route.params
      getPlayList(this.params.id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.listInfo = createListInfo(res.playlist)
          this.songList = res.playlist.tracks.map((track) => {
            return createSong(track)
          })
        }
      })
    },
    playAll () {
      this.sequencePlay({
        list: this.songList
      })
    }
  },
  components: {
    SongListInfo,
    SongListTable
  }
}
</script>

<style lang="less">

</style>
