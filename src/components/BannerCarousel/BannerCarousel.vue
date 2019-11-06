<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div style="width:100%;margin:20px auto;height:400px">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options">
      <!-- slideritem wrapped package with the components you need -->
      <template slot-scope="coverflow">
        <slideritem v-for="(banner,index) in banners" :pageLength="banners.length" :index="index" :key="index" style="width: 333%">
          <img :src="banner.imageUrl" alt="" style="height: 300px">
        </slideritem>
      </template>
    </slider>
  </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
  name: 'Banner',
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      // Slider configuration [obj]
      options: {
        effect: 'coverflow',
        currentPage: 0,
        thresholdDistance: 100,
        thresholdTime: 300,
        deviation: 200,
        widthScalingRatio: 0.8,
        heightScalingRatio: 0.8,
        slidesToScroll: 1,
        loop: true
      }
    }
  },
  components: {
    slider,
    slideritem
  }
}
</script>
