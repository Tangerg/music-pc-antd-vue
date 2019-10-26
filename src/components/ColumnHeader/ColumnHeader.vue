<template>
  <div class="column-header">
    <div class="column-header-left">{{title}}</div>
    <div class="column-header-right">
      <span class="show-more" v-if="show" @click="showMore()">更多></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    },
    route: {
      type: String,
      default: ''
    }
  },
  methods: {
    showMore () {
      console.log(this.route)
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
