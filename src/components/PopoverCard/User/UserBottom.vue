<template>
  <div class="user-bottom">
    <a-list itemLayout="horizontal">
      <a-list-item slot="renderItem" slot-scope="item, index">
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: 'UserBottom',
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.user-bottom{
  width: 280px;
}
</style>
