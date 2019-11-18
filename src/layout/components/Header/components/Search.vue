<template>
<div class="music-search">
  <a-popover placement="bottomLeft" trigger="click">
    <template slot="content">
      <search-card :hots="hots" @onClickSearchItem="onClickSearchItem"></search-card>
      <result-card></result-card>
    </template>
    <a-input-search
      class="search-div"
      placeholder="搜索音乐，视频等"
      :value="value"
      @change="onChange"
      @search="onSearch"
    />
  </a-popover>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getHotSearch, getSearch } from 'api/search'
import { SearchCard, ResultCard } from '@c/PopoverCard'
import config from '@/config/config'
export default {
  name: 'Search',
  data () {
    return {
      value: '',
      hots: []
    }
  },
  mounted () {
    this.initHotSearch()
  },
  methods: {
    ...mapMutations({
      setAppSearch: 'SET_APP_SEARCH'
    }),
    onChange (e) {
      const { value } = e.target
      this.value = value
    },
    onSearch (value, event) {
      if (value.trim() === '') {
        return
      }
      this.setAppSearch(value)
      this.$router.push('/search')
    },
    onClickSearchItem (item) {
      this.value = item.first
    },
    async initHotSearch () {
      const { code, result } = await getHotSearch()
      if (code === config.ERR_OK) {
        this.hots = result.hots
      }
    }
  },
  components: {
    SearchCard,
    ResultCard
  }
}
</script>

<style lang="less">
.music-search{
  .search-div{
    .ant-input{
      border: none;
      border-radius: 999px;
    }
  }
}
</style>
