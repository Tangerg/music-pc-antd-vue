<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="closeDrawer"
      :visible="visible"
    >
      <div class="drawer-header">
        <div>播放队列</div>
        <div>
          <span>共26首</span>
          <span>清空</span>
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
      this.$emit('closeDrawer')
    }
  }
}
</script>
<style lang="less">
  .drawer-header{
    /*position: absolute;
    top: 0;
    right: 0;
    left: 0;*/
    height: 64px;
    z-index: 999;
    background-color: white;
  }
  .drawer-body{
    height: calc(100% - 64px);
    overflow-y: auto;
    overflow-x: hidden;
    background-color: transparent;
  }
</style>
