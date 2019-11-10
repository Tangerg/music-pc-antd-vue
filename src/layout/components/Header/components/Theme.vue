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
import { updateTheme } from 'utils/color'
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
      this.debounce(() => console.log('fn 防抖执行了'), 1000)
      if (this.color.hex !== value.hex) {
        this.color = value
      }
    },
    console (val) {
      console.log('123')
    },
    debounce (fn, wait = 50) {
      // 通过闭包缓存一个定时器 id
      let timer = null
      // 将 debounce 处理结果当作函数返回
      // 触发事件回调时执行这个返回函数
      return function (...args) {
        // 如果已经设定过定时器就清空上一次的定时器
        if (timer) clearTimeout(timer)
        // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, wait)
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
