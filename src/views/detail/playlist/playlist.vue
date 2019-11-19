<template>
  <div class="playlist-detail" v-if="playlist.id">
    <playlist-header :content="playlist" v-if="playlist.creator" @onClickPlayAll="playAll"></playlist-header>
    <info-tab :tabList="tabList" @onChangeTab="handleChangeTab">
      <a-input-search v-show="activeKey === tabList[0].key" slot="tab-slot" placeholder="搜索歌单音乐" style="width: 150px"  />
    </info-tab>
    <div v-show="activeKey === tabList[0].key" class="playlist-song-table">
      <SongTable :dataSource="songList" @onClickSong="clickSong" @onClickArtist="clickArtist" @onClickAlbum="clickAlbum"></SongTable>
    </div>
    <div v-show="activeKey === tabList[1].key" class="playlist-comment">
      <div class="playlist-comment-item" v-if="hotComments.length">
        <column-header :column="{title:'精彩评论'}"></column-header>
        <comment-list :commentList="hotComments"></comment-list>
      </div>
      <div class="playlist-comment-item" v-if="comments.length">
        <column-header :column="{title:'最新评论'}"></column-header>
        <comment-list :commentList="comments"></comment-list>
      </div>
    </div>
    <div v-show="activeKey === tabList[2].key">收藏界面</div>
  </div>
</template>

<script>
/*
*   引用顺序 1官方 2配置 3组件 4类方法 5工具函数 6api
* */
import { mapActions } from 'vuex'

import config from '@/config/config'

import InfoTab from '@c/InfoTab'
import SongTable from '@c/SongTable'
import CommentList from '@c/CommentList'
import { PlaylistHeader } from '@c/InfoHeader'
import ColumnHeader from '@c/ColumnHeader'

import { createPlaylistDesc } from '@/class/playlist'
import { createSongByPlaylist } from '@/class/song'
import { createComment } from '@/class/comment'

import { getPlaylistDetail } from 'api/playlist'
import { getPlaylistComment } from 'api/comment'

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
      activeKey: INDEX_KEY,
      hotComments: [],
      comments: [],
      tracks: []
    }
  },
  mounted () {
    this.initPlaylistDetail()
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'sequencePlay',
      'selectPlay'
    ]),
    async initPlaylistDetail () {
      await this.initPlaylistInfo()
      await this.initPlaylistComment()
      await this.initPlaylistSong(this.tracks)
    },
    async initPlaylistInfo () {
      const { code, playlist } = await getPlaylistDetail(this.$route.params.id)
      if (code === config.ERR_OK) {
        this.playlist = createPlaylistDesc(playlist)
        this.tabList[1].title = `评论(${this.playlist.commentCount})`
        this.tracks = playlist.tracks
      }
    },
    async initPlaylistSong (tracks) {
      this.songList = tracks.map((track) => {
        return Object.freeze(createSongByPlaylist(track))
      })
    },
    async initPlaylistComment () {
      const { code, hotComments, comments } = await getPlaylistComment(this.$route.params.id)
      if (code === config.ERR_OK) {
        this.hotComments = hotComments.map((comment) => {
          return createComment(comment)
        })
        this.comments = comments.map((comment) => {
          return createComment(comment)
        })
      }
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
    SongTable,
    CommentList,
    ColumnHeader
  }
}
</script>

<style lang="less">
  .playlist-detail{
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: var(--body-bg-color--);
    .playlist-song-table{
      width: 100%;
    }
    .playlist-comment{
      padding: 20px 30px;
      .playlist-comment-item{
        margin-top: 5px;
      }
    }
  }
</style>
