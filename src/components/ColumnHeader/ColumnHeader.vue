<template>
  <div class="column-header">
    <div class="column-header-left">{{column.title}}</div>
    <div class="column-header-right">
      <span class="show-more" v-if="column.show" @click="showMore()">更多></span>
    </div>
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
    showMore () {
      console.log(this.column.route)
    }
  }
}
</script>

<style lang="less">
  .column-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e8e8e8;
    .column-header-left {
      flex: 1;
      text-align: left;
      font-size: 18px;
      font-weight: 600;
    }
    .column-header-right {
      flex: 1;
      text-align: right;
      color: #acacac;
      .show-more{
        cursor: pointer;
      }
    }
  }
</style>
