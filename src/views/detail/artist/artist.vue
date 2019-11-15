<template>
  <div class="artist-detail">
    <artist-header :content="artistInfo" :mvSize="this.mvList.length"></artist-header>
    <info-tab :tabList="tabList" @onChangeTab="handleChangeTab"></info-tab>
    <div v-show="activeKey === tabList[0].key" class="playlist-song-table">
      <song-table :dataSource="topList" @onClickSong="clickSong"></song-table>
    </div>
    <div v-show="activeKey === tabList[1].key" class="playlist-song-table">
      <album-cover :coverList="AlbumList"></album-cover>
    </div>
    <div v-show="activeKey === tabList[2].key" class="playlist-song-table">
      mv
    </div>
    <div v-show="activeKey === tabList[3].key" class="playlist-song-table">
      详情
    </div>
    <div v-show="activeKey === tabList[4].key" class="playlist-song-table">
      相似
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import config from '@/config/config'

import { createSong } from '@/class/song'
import { createCoverByAlbum } from '@/class/cover'

import SongTable from '@c/SongTable'
import InfoTab from '@c/InfoTab'
import { ArtistHeader } from '@c/InfoHeader'
import { AlbumCover } from '@c/CoverList'

import { getArtistMv, getArtistTop50, getArtistAlbum } from 'api/artist'

const TABLIST = [
  {
    title: '热门50首',
    key: 'top'
  },
  {
    title: '专辑',
    key: 'album'
  },
  {
    title: 'MV',
    key: 'mv'
  },
  {
    title: '歌手详情',
    key: 'detail'
  },
  {
    title: '相似歌手',
    key: 'similar'
  }
]
export default {
  name: 'artist',
  data () {
    return {
      mvList: [],
      topList: [],
      AlbumList: [],
      tabList: TABLIST,
      activeKey: 'top'
    }
  },
  mounted () {
    this.initArtistMv()
    this.initArtistTop50()
    this.initArtistAlbum()
  },
  computed: {
    ...mapGetters([
      'artistInfo'
    ])
  },
  methods: {
    ...mapActions([
      'sequencePlay',
      'selectPlay'
    ]),
    handleChangeTab (key) {
      this.activeKey = key
    },
    clickSong (record, index) {
      this.selectPlay({
        list: this.topList,
        index: index
      })
    },
    initArtistMv () {
      getArtistMv(this.$route.params.id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.mvList = res.mvs
        }
      })
    },
    initArtistTop50 () {
      getArtistTop50(this.$route.params.id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.topList = res.songs.map((song) => {
            return createSong(song)
          })
        }
      })
    },
    initArtistAlbum () {
      getArtistAlbum(this.$route.params.id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.AlbumList = res.hotAlbums.map((album) => {
            return createCoverByAlbum(album)
          })
        }
      })
    }
  },
  components: {
    ArtistHeader,
    InfoTab,
    SongTable,
    AlbumCover
  }
}
</script>

<style lang="less">
  .artist-detail {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: white;
  }
</style>
