<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="list.length">
    <swiper-slide v-for="item in list" :key="item.id">
      <slot :item="item"></slot>
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
    },
    delay: {
      type: Number,
      default: 4000
    },
    speed: {
      type: Number,
      default: 500
    },
    loop: Boolean
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  data () {
    return {
      swiperOption: {
        loop: this.loop,
        speed: this.speed,
        autoplay: {
          delay: this.delay,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
