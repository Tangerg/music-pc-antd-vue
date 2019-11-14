<template>
  <div class="search-card">
    <div class="search-common search-hot">
      <div class="search-title">
        <a-icon type="search" />
        热门搜索
      </div>
      <a-list class="search-content" itemLayout="horizontal" :dataSource="hots" :split="false">
        <a-list-item class="list-item" @click="clickSearchItem(item)" slot="renderItem" slot-scope="item, index">
          <span class="search-name">{{item.first}}</span>
        </a-list-item>
      </a-list>
    </div>
    <div class="search-common search-history">
      <div class="search-title">
        <a-icon type="clock-circle" />
        搜索历史
      </div>
      <a-list class="search-content" itemLayout="horizontal" :dataSource="hots" :split="false">
        <a-list-item  @click="clickSearchItem(item)"class="list-item" slot="renderItem" slot-scope="item, index">
          <span class="search-name">{{item.title}}</span>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchCard',
  props: {
    hots: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    clickSearchItem (item) {
      this.$emit('onClickSearchItem', item)
    }
  }
}
</script>

<style lang="less">
@import "~styles/mixin";
.search-card{
  width: 451px;
  display: flex;
  .search-common{
    width: 225px;
    &:first-child{
      border-right: 1px solid #e8e8e8;
    }
    .search-title{
      padding: 5px 10px;
      border-bottom: 1px solid #e8e8e8;
      color: var(--header-font-color-3--);
    }
    .search-content{
      width: 100%;
      margin-bottom: 5px;
      .list-item{
        padding: 5px 10px;
        cursor: pointer;
        .ant-list-item-content-single{
          width: 100%;
        }
        .search-name{
          padding-left: 16px;
          width: 100%;
          .no-wrap();
        }
      }
    }
  }
}
</style>
