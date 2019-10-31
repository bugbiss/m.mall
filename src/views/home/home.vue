<template>
  <div class="home-page">
    <v-swiper :list="bannerList" slideWidth="92%" loop>
      <template v-slot="{ item }">
        <div class="slide">
          <img :src="item.img">
        </div>
      </template>
    </v-swiper>
  </div>
</template>

<script>
import VSwiper from '@/components/v-swiper/v-swiper'

export default {
  components: {
    VSwiper
  },
  data () {
    return {
      bannerList: []
    }
  },
  mounted () {
    this.getBannerList()
  },
  methods: {
    getBannerList () {
      this.$http.get('/bannerList').then(res => {
        this.bannerList = res
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home-page {
  padding-bottom: 120px;
  .slide {
    height: 260px;
    background: #eaeaea;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }
}
</style>
