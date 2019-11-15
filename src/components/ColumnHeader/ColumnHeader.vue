<template>
  <div class="column-header">
    <span class="column-header-left">{{column.title}}</span>
    <span class="column-header-right">
      <span class="show-more" v-if="column.show" @click="onClickShowMore()">更多></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ColumnHeader',
  props: {
    column: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    onClickShowMore () {
    }
  }
}
</script>

<style lang="less">
  .column-header {
    height: 50px;
    line-height: 50px;
    display: flex;
    color: var(--body-font-color-1--);
    border-bottom: 1px solid #e8e8e8;
    .column-header-left {
      width: 90%;
      text-align: left;
      font-size: 18px;
    }
    .column-header-right {
      width: 10%;
      text-align: right;
      .show-more{
        cursor: pointer;
      }
    }
  }
</style>
