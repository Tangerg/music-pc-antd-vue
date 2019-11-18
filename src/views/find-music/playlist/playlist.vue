<template>
  <div>
    <playlist-filter :hotTags="hotTags" :tags="tags" @onClickTag="onClickTag" :activeTag="activeTag"></playlist-filter>
    <playlist-cover :coverList="playList" @onClickCover="clickPlaylist"></playlist-cover>
  </div>
</template>

<script>
import { getPlaylistHotTags, getPlaylistAllTags, getPlaylistByCat } from 'api/playlist'
import PlaylistFilter from '@c/PlaylistFilter'
import { PlaylistCover } from '@c/CoverList'
import config from '@/config/config'
import { createCoverByPlaylist } from '@/class/cover'
export default {
  name: 'playlist',
  data () {
    return {
      hotTags: [],
      tags: {},
      activeTag: { name: '华语' },
      playList: []
    }
  },
  watch: {
    activeTag (newVal) {
      this.getPlaylist()
    }
  },
  mounted () {
    this.initTag()
    this.getPlaylist()
  },
  methods: {
    onClickTag (tag) {
      this.activeTag = tag
    },
    clickPlaylist (cover) {
      this.$router.push(`/song-list/${cover.playlist.id}`)
    },
    async getPlaylist () {
      const { code, playlists } = await getPlaylistByCat(this.activeTag.name)
      if (code === config.ERR_OK) {
        this.playList = playlists.map((playList) => {
          return createCoverByPlaylist(playList)
        }).slice(0, 30)
      }
      console.log(this.playList)
    },
    async initTag () {
      await this.initHotTags()
      await this.initAllTags()
    },
    async initHotTags () {
      const { code, tags } = await getPlaylistHotTags()
      if (code === config.ERR_OK) {
        this.hotTags = this.createTagList(tags)
      }
    },
    async initAllTags () {
      const { code, all, sub, categories } = await getPlaylistAllTags()
      if (code === config.ERR_OK) {
        this.tags.all = {
          name: all.name,
          category: all.category
        }
        this.tags.other = this.addTags2Cat(this.createTagList(sub), this.categoriesObj2Arr(categories))
      }
      console.log(this.tags)
    },
    addTags2Cat (tags, cats) {
      for (let i = 0; i < cats.length; i++) {
        let arr = []
        for (let j = 0; j < tags.length; j++) {
          if (tags[j].category === cats[i].category) {
            arr.push(tags[j])
          }
        }
        cats[i].tags = arr
      }
      return cats
    },
    categoriesObj2Arr (categories) {
      let arr = []
      for (let i in categories) {
        let obj = {}
        obj.category = Number(i)
        obj.name = categories[i]
        arr.push(obj)
      }
      return arr
    },
    createTagList (tags) {
      return tags.map((tag) => {
        return {
          name: tag.name,
          category: tag.category
        }
      })
    }
  },
  components: {
    PlaylistFilter,
    PlaylistCover
  }
}
</script>

<style lang="less">

</style>
