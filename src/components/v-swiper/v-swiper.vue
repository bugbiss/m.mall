<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="list.length">
    <swiper-slide :style="{ width: slideWidth }" v-for="item in list" :key="item.id">
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
    slideWidth: {
      type: String,
      default: '100%'
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
        },
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: -40,
          slideShadows: false
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
