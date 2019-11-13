<template>
  <div
    class="scroller"
    ref="scroller"
  >
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(ScrollBar)
BScroll.use(MouseWheel)

const defaultOptions = {
  mouseWheel: true,
  scrollY: true,
  scrollbar: true,
  probeType: 3,
  refreshDelay: 20
}
export default {
  name: 'Scroller',
  props: {
    data: {
      default: () => []
    }
  },
  data () {
    return {}
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll () {
      if (!this.$refs.scroller) {
        return
      }
      this.scroller = new BScroll(this.$refs.scroller, defaultOptions)
    },
    getScroller () {
      return this.scroller
    },
    refresh () {
      this.scroller.refresh()
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style lang="less" >
  .scroller {
    position: relative;
    overflow: hidden;
    height: 100%;
    .bscroll-indicator {
      border: none !important;
      background: gray !important;
    }
  }
</style>
