<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(banner, index) in banners" :key="index" >
      <img :src="banner.imageUrl" style="width: 600px"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'BannerCarousel',
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 10,
          stretch: 10,
          depth: 90,
          modifier: 1.5,
          slideShadows: false
        }
      }
    }
  },
  methods: {
    appendSlide () {
      this.swiperSlides.push(this.swiperSlides.length + 1)
    },
    prependSlide () {
      this.swiperSlides.unshift(this.swiperSlides[0] - 1)
    },
    popSlide () {
      this.swiperSlides.pop()
    },
    shiftSlide () {
      this.swiperSlides.shift()
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="less">
  .type-title {
    z-index: 200;
    padding: 2px 10px;
    color: white;
    border-radius: 50px 0 0 50px;
    position: absolute;
    right: -5px;
    bottom: 10px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
