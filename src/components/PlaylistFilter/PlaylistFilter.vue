<template>
  <div class="playlist-filter">
    <div class="playlist-filter-all">
      <a-popover placement="bottomLeft" trigger="click">
        <div slot="title">
          <div style="padding: 10px 25px;font-size: 17px">添加标签</div>
        </div>
        <div slot="content">
          <list-category @onClickTag="clickTag" :tags="tags" :activeTag="activeTag"></list-category>
        </div>
        <a-button>{{activeTag.name}}<a-icon type="down" /></a-button>
      </a-popover>
    </div>
    <div class="playlist-filter-hot">
      <div class="filter-label">热门标签：</div>
      <div class="filter-content">
        <span
          class="filter-content-item"
          :class="activeClass(tag)"
          v-for="(tag,index) in hotTags"
          :key="index"
          @click="clickTag(tag)"
        >
          {{tag.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ListCategory } from '../PopoverCard'
export default {
  name: 'PlaylistFilter',
  props: {
    hotTags: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Object,
      default: () => {}
    },
    activeTag: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  },
  methods: {
    clickTag (tag) {
      this.$emit('onClickTag', tag)
    },
    activeClass (tag) {
      if (this.activeTag.name === tag.name) {
        return 'active'
      }
    }
  },
  components: {
    ListCategory
  }
}
</script>

<style lang="less">
.playlist-filter{
  .playlist-filter-hot{
    display: flex;
    margin: 10px 0;
    font-size: 16px;
    .filter-label{
      white-space: nowrap;
      margin:  5px 5px 5px 0;
    }
    .filter-content{
      .filter-content-item{
        display: inline-block;
        padding: 5px 10px;
        cursor: pointer;
      }
      .active{
        background: var(--header-bg-color--);
        color: var(--header-font-color-1--);
      }
    }
  }
}
</style>
