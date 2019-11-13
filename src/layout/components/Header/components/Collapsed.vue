<template>
<div class="header-collapsed-trigger" @click="onClickCollapsed">
  <a-icon :type=collapsedIcon />
</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Collapsed',
  computed: {
    ...mapGetters([
      'collapsedState'
    ]),
    collapsedIcon () {
      return this.collapsedState ? 'menu-unfold' : 'menu-fold'
    }
  },
  methods: {
    ...mapMutations({
      setCollapsedState: 'SET_COLLAPSED_STATE'
    }),
    onClickCollapsed () {
      this.setCollapsedState(!this.collapsedState)
    }
  }
}
</script>

<style lang="less">
.header-collapsed-trigger{
}
</style>
