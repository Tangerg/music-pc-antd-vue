<template>
  <a-carousel arrows>
    <div
      slot="prevArrow" slot-scope="props"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div
      slot="nextArrow" slot-scope="props"
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right-circle" />
    </div>
    <div v-for="(banner,index) in banners" :key="index">
      <img
        style="width: 100%;"
        :src="banner.imageUrl"/>
      <span class="type-title" :style="titleColor(banner.titleColor)">
        {{banner.typeTitle}}
      </span>
    </div>
  </a-carousel>
</template>

<script>
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
      slide: 1,
      auto: true
    }
  },
  methods: {
    titleColor (color) {
      return 'background-color:' + color
    }
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
/*  .ant-carousel /deep/ .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }*/

  .ant-carousel /deep/ .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31,45,61,.11);
    opacity: 0.3;
  }
  .ant-carousel /deep/ .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel /deep/ .custom-slick-arrow:hover {
    opacity: 0.5;
  }
</style>
