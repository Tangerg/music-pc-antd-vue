<template>
  <div class="artist-detail">
    <artist-header v-if="artistInfo" :content="artistInfo"></artist-header>
    <info-tab :tabList="tabList" @onChangeTab="handleChangeTab"></info-tab>
    <div v-show="activeKey === tabList[0].key" class="artist-song-table">
      <song-table :dataSource="topList" @onClickSong="clickSong" @onClickArtist="clickArtist" @onClickAlbum="clickAlbum"></song-table>
    </div>
    <div v-show="activeKey === tabList[1].key" class="artist-album">
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
import { mapActions } from 'vuex'
import config from '@/config/config'

import { createSongByPlaylist } from '@/class/song'
import { createArtist } from '@/class/artist'
import { createCoverByAlbum } from '@/class/cover'

import SongTable from '@c/SongTable'
import InfoTab from '@c/InfoTab'
import { ArtistHeader } from '@c/InfoHeader'
import { AlbumCover } from '@c/CoverList'

import { getArtistDetail, getArtistMv, getArtistTop50, getArtistAlbum } from 'api/artist'

import { backTop } from 'utils/dom'
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
      artistInfo: {},
      mvList: [],
      topList: [],
      AlbumList: [],
      tabList: TABLIST,
      activeKey: 'top'
    }
  },
  watch: {
    id () {
      this.initArtist()
    }
  },
  computed: {
    id () {
      return Number(this.$route.params.id)
    }
  },
  mounted () {
    this.initArtist()
  },
  methods: {
    ...mapActions([
      'sequencePlay',
      'selectPlay'
    ]),
    async initArtist () {
      await this.initArtistInfo()
      await this.initArtistMv()
      await this.initArtistTop50()
      await this.initArtistAlbum()
    },
    async initArtistInfo () {
      const { code, artist } = await getArtistDetail(this.$route.params.id)
      if (code === config.ERR_OK) {
        this.artistInfo = createArtist(artist)
      }
    },
    handleChangeTab (key) {
      this.activeKey = key
    },
    clickAlbum (album) {
    },
    clickArtist (artist) {
      this.$router.push(`/artist/${artist.id}`)
    },
    clickSong (record, index) {
      this.selectPlay({
        list: this.topList,
        index: index
      })
    },
    async initArtistMv () {
      const { code, mvs } = await getArtistMv(this.$route.params.id)
      if (code === config.ERR_OK) {
        this.mvList = mvs
      }
    },
    async initArtistTop50 () {
      const { code, songs } = await getArtistTop50(this.$route.params.id)
      if (code === config.ERR_OK) {
        this.topList = songs.map((song) => {
          return createSongByPlaylist(song)
        })
      }
    },
    async initArtistAlbum () {
      const { code, hotAlbums } = await getArtistAlbum(this.$route.params.id)
      if (code === config.ERR_OK) {
        this.AlbumList = hotAlbums.map((album) => {
          return createCoverByAlbum(album)
        })
      }
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
    background: var(--body-bg-color--);
    color: var(--body-font-color-1--);
    .artist-song-table{
      width: 100%;
    }
    .artist-album{
      width: 100%;
      padding: 0 30px;
    }
  }
</style>
