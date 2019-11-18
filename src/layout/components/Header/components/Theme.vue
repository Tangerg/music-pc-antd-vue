<template>
<div class="music-theme">
  <a-popover placement="bottom" trigger="click">
    <div slot="content">
      <sketch-picker
        @input="updateValue"
        :value="color"
        :presetColors="presetColors"
      ></sketch-picker>
    </div>
    <div class="user-info">
      <a-icon type="setting" />
    </div>
  </a-popover>
</div>
</template>

<script>
import { Sketch } from 'vue-color'
import { updateTheme } from 'utils/theme'
import { Orange, Dark } from 'styles/theme'
const COLOR_LIST = [
  '#F5222D',
  '#FA541C',
  '#FAAD14',
  '#13C2C2',
  '#52C41A',
  '#1890FF',
  '#2F54EB',
  '#722ED1'
]
export default {
  data () {
    return {
      color: '',
      presetColors: COLOR_LIST
    }
  },
  methods: {
    updateValue (value) {
      this.debounce(this.changeColor(value), 1000)
    },
    changeColor (value) {
      document.documentElement.style.setProperty('--header-bg-color--', value.hex)
    },
    debounce (func, delay) {
      let timer

      return function (...args) {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    }
  },
  components: {
    'sketch-picker': Sketch
  }
}
</script>

<style lang="less">
.music-theme{
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
</style>
