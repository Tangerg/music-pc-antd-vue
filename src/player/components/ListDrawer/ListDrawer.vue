<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="closeDrawer"
      :visible="visible"
      width="300"
    >
      <div class="drawer">
        <div class="drawer-header">
          <div style="margin: auto;width: 100%;position: relative">
            <div class="title">播放队列</div>
            <div class="count">
              <span class="count-num">共{{totalNum}}首</span>
              <span class="count-clear" @click="cleanPlayList">
              <a-icon type="delete" />清空
            </span>
            </div>
          </div>
        </div>
        <div class="drawer-body">
          <a-list
            itemLayout="horizontal"
            :dataSource="data"
          >
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              >
                <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
                <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 1'
  },

  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
]
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    totalNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      visible1: this.show,
      data
    }
  },
  methods: {
    closeDrawer () {
      this.$emit('closeDrawer', false)
    },
    cleanPlayList () {
      this.$emit('cleanPlayList')
    }
  }
}
</script>
<style lang="less">
  .ant-drawer-body{
    height: 100%;
    padding: 0 !important;
  }
  .drawer{
    height: 100%;
    &-header{
      height: 64px;
      z-index: 999;
      background-color: #d6d6d6;
      padding: 0 20px;
      .title{
        font-size: 20px;
      }
      .count{
        &-num{
        }
        &-clear{
          margin-left: 60px;
          cursor: pointer;
        }
      }
    }
    &-body{
      height: calc(100% - 64px);
      overflow-y: auto;
      overflow-x: hidden;
      background-color: transparent;
    }
  }
</style>
