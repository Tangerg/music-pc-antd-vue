<template>
  <div class="playlist-detail" v-if="playlist.id">
    <playlist-header :Content="playlist" v-if="playlist.creator" @onClickPlayAll="playAll"></playlist-header>
    <info-tab :tabList="tabList" @onChangeTab="handleChangeTab">
      <a-input-search v-show="activeKey === tabList[0].key" slot="tab-slot" placeholder="搜索歌单音乐" style="width: 150px"  />
    </info-tab>
    <div v-show="activeKey === tabList[0].key">
      <SongTable :dataSource="songList" @onClickSong="clickSong" @onClickArtist="clickArtist" @onClickAlbum="clickAlbum"></SongTable>
    </div>
    <div v-show="activeKey === tabList[1].key">评论界面</div>
    <div v-show="activeKey === tabList[2].key">收藏界面</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import { getPlayList } from 'api/songList'

import { createPlaylist } from '@/class/playlist'
import { createSong } from '@/class/song'

import config from '@/config/config'

import { PlaylistHeader } from '@c/InfoHeader'
import InfoTab from '@c/InfoTab'
import SongTable from '@c/SongTable'

const INDEX_KEY = 'playlist'
export default {
  name: 'playlist',
  data () {
    return {
      playlist: {},
      songList: [],
      tabList: [
        {
          title: '歌曲列表',
          key: 'playlist'
        },
        {
          title: '评论',
          key: 'comment'
        },
        {
          title: '收藏者',
          key: 'subscribed'
        }
      ],
      activeKey: INDEX_KEY
    }
  },
  mounted () {
    this.initPlayList()
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'sequencePlay',
      'selectPlay'
    ]),
    async initPlayList () {
      /*const { playlist } = await getPlayList(this.$route.params.id)
      this.playlist = createPlaylist(playlist)
      this.tabList[1].title = `评论(${this.playlist.commentCount})`
      await this.initSongList(playlist.tracks)*/
      getPlayList(this.$route.params.id).then((res) => {
        if (res.code === config.ERR_OK) {
          this.playlist = createPlaylist(res.playlist)
          this.tabList[1].title = `评论(${this.playlist.commentCount})`
          this.songList = res.playlist.tracks.map((track) => {
            return createSong(track)
          })
          console.log(this.songList)
        }
      })
    },
    async initSongList (tracks) {
      this.songList = tracks.map((track) => {
        return createSong(track)
      })
    },
    clickSong (record, index) {
      this.selectPlay({
        list: this.songList,
        index: index
      })
    },
    clickArtist (artist) {
      console.log(artist)
    },
    clickAlbum (album) {
      console.log(album)
    },
    handleChangeTab (key) {
      this.activeKey = key
    },
    playAll () {
      this.sequencePlay({
        list: this.songList
      })
    }
  },
  components: {
    PlaylistHeader,
    InfoTab,
    SongTable
  }
}
</script>

<style lang="less">
  .playlist-detail{
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: white;
  }
</style>
