<template>
  <a-table
    size="middle"
    :columns="columns"
    :dataSource="dataSource"
    :pagination="false"
  >
    <span slot="songIndex" slot-scope="text, record, index">
      {{ index + 1 }}
    </span>
  </a-table>
</template>

<script>
export default {
  name: 'ListTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
</style>
