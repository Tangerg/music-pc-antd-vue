<template>
  <div class="music-search-detail">
    <div class="search-countent">搜索"<span class="search-countent-text">{{this.appSearch}}</span>"，找到{{this.count}}首单曲
    </div>
    <info-tab :tabList="tabList" @onChangeTab="handleChangeTab" />
    <SongTable :dataSource="songList" @onClickSong="clickSong" @onClickArtist="clickArtist" @onClickAlbum="clickAlbum"></SongTable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import config from '@/config/config'
import SongTable from '@c/SongTable'
import InfoTab from '@c/InfoTab'
import { getSearch } from 'api/search'
import { createSong } from '@/class/song'
export default {
  name: 'search',
  data () {
    return {
      count: 0,
      songList: [],
      tabList: [
        {
          title: '单曲',
          key: 'playlist'
        },
        {
          title: '歌手',
          key: 'comment'
        },
        {
          title: '专辑',
          key: 'subscribed'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'appSearch'
    ])
  },
  watch: {
    appSearch (newVal) {
      this.getSearchRes(newVal, 1)
    }
  },
  mounted () {
    this.getSearchRes(this.appSearch, 1)
  },
  methods: {
    ...mapActions([
      'selectPlay'
    ]),
    handleChangeTab () {

    },
    clickSong (record, index) {
      this.selectPlay({
        list: this.songList,
        index: index
      })
    },
    clickArtist (artist) {
      this.$router.push(`/artist/${artist.id}`)
    },
    clickAlbum (album) {
      console.log(album)
    },
    async getSearchRes (keywords, type, limit) {
      const { code, result } = await getSearch(keywords, type, limit)
      if (code === config.ERR_OK) {
        this.songList = result.songs.map((track) => {
          return Object.freeze(createSong(track))
        })
        this.count = result.songCount
      }
    }
  },
  components: {
    InfoTab,
    SongTable
  }
}
</script>

<style lang="less">
.music-search-detail{
  height: 100%;
  padding: 0 20px;
  background: var(--body-bg-color--);
  overflow-y: auto;
  overflow-x: hidden;
  .search-countent{
    padding: 20px;
    .search-countent-text{
      color: var(--header-bg-color--);
    }
  }
}
</style>
