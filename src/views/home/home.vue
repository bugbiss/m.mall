<template>
  <div class="home-page">
    <v-swiper :list="bannerList" />
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
  .box {
    line-height: 200px;
    font-size: 50px;
  }
}
</style>
