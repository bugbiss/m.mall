<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="item in list" :key="item.id">
      <img :src="item.img">
    </swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  data () {
    return {
      swiperOption: {
        autoHeight: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.v-swiper {

}
</style>
