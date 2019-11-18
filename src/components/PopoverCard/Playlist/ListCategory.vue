<template>
<div class="filter-container">
  <div class="filter-content">
    <div class="all-category"
         @click="clickTag(tags.all)"
         :class="activeClass(tags.all)"
    >
      {{tags.all.name}}
    </div>
    <div class="other-category">
      <div class="category-item" v-for="(tagArr,index) in tags.other" :key="index">
        <div class="category-label">{{tagArr.name}}：</div>
        <div class="category-content">
          <span
            class="category-content-item"
            :class="activeClass(tag)"
            v-for="(tag,index) in tagArr.tags"
            :key="index"
            @click="clickTag(tag)"
          >
            {{tag.name}}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListCategory',
  props: {
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
      tempTag: {}
    }
  },
  methods: {
    clickTag (tag) {
      if (tag.name !== this.tempTag.name) {
        this.$emit('onClickTag', tag)
        this.tempTag = tag
      }
    },
    activeClass (tag) {
      if (this.activeTag.name === tag.name) {
        return 'active'
      }
    }
  }
}
</script>

<style lang="less">
@import "~styles/var";
@import "~styles/mixin";
.filter-container{
  width: 550px;
  height: 350px;
  overflow-x: hidden;
  overflow-y: auto;
  .filter-content{
    padding: 10px 25px;
    .all-category{
      height: 35px;
      text-align: center;
      line-height: 35px;
      border: @base--border;
      cursor: pointer;
    }
    .active{
      border: 1px solid var(--header-bg-color--) !important;
      color: var(--body-font-color-1--);
    }
    .other-category{
      width: 100%;
      .category-item{
        display: flex;
        margin: 16px 0;
        font-size: 15px;
        .category-label{
          white-space: nowrap;
          padding: 5px 0;
        }
        .category-content{
          width: 100%;
          .category-content-item{
            text-align: center;
            width: 20%;
            display: inline-block;
            padding: 5px 0;
            cursor: pointer;
            .no-wrap();
          }
          .active{
            border: 1px solid var(--header-bg-color--);
            color: var(--body-font-color-1--);
          }
        }
      }
    }
  }
}
</style>
