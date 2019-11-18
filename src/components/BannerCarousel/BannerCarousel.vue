<template>
    <carousel class="banner-carousel" :interval="4000" type="card">
      <carousel-item v-for="(banner,index) in banners" :key="index">
        <div class="banner-item">
          <img :src="banner.imageUrl" alt="轮播图" class="banner-img">
          <div class="banner-tag" :style="addColor(banner.titleColor)">{{banner.typeTitle}}</div>
        </div>
      </carousel-item>
    </carousel>
</template>
<script>
import {
  Carousel,
  CarouselItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/carousel.css'
import './icon.css'
import 'element-ui/lib/theme-chalk/carousel-item.css'
export default {
  name: 'Banner',
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    console.log(this.banners)
  },
  data () {
    return {
    }
  },
  methods: {
    addColor (color) {
      return `background: ${color}`
    }
  },
  components: {
    Carousel,
    CarouselItem
  }
}
</script>
<style lang="less" scoped>
  .banner-carousel {
    margin-top: 10px;
    .banner-item{
      position: relative;
      .banner-img {
        width: 100%;
      }
      .banner-tag {
        color: #fff;
        position: absolute;
        right: 0;
        bottom: 10px;
        padding: 1px 7px;
        border-radius: 999px 0 0 999px;
      }
    }
  }
</style>
