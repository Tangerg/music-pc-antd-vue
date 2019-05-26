<template>
  <div class="column-header">
    <div class="column-header-left">{{title}}</div>
    <div class="column-header-center">{{title}}</div>
    <div class="column-header-right">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'ColumnHeader',
  props: {
    title: {
      type: String,
      default: ''
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
    margin-bottom: 5px;
    .column-header-left {
      flex: 1;
      text-align: left;
      font-size: 18px;
      font-weight: 500;
    }
    .column-header-center {
      flex: 1;
      text-align: center;
    }
    .column-header-right {
      flex: 1;
      text-align: right;
    }
  }
</style>
