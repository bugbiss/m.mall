<template>
  <div class="home-page">
    <search-bar />
    <hot-recommend />
    <div class="banner-section">
      <div class="bg"></div>
      <v-swiper :list="bannerList" slideWidth="92%" loop>
        <template v-slot="{ item }">
          <div class="slide">
            <img :src="item.img">
          </div>
        </template>
      </v-swiper>
    </div>
    <span>123123</span>
  </div>
</template>

<script>
import VSwiper from '@/components/v-swiper/v-swiper'
import SearchBar from './components/search-bar'
import HotRecommend from './components/hot-recommend'

export default {
  components: {
    SearchBar,
    HotRecommend,
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
  .banner-section {
    position: relative;
    height: 260px;
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80%;
      background: linear-gradient(90deg,#442857,#5b2b50);
    }
    .slide {
      height: 260px;
      img {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
}
</style>
