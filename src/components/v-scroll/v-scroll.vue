<template>
  <div class="v-scroll">
    <div ref="scrollContent" class="scroll-content">
      <slot></slot>
      <div ref="scrollBottom" class="scroll-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VScroll',
  props: {
    pullUpLoad: Boolean, // 开启上拉加载
    disLoad: { // 距离底部的长度
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isPullUp: false
    }
  },
  mounted () {
    this.initScroll()
  },
  beforeDestroy () {
    this.unbind()
  },
  methods: {
    initScroll () {
      if (this.pullUpLoad) {
        this.onPullUp()
      }
    },
    unbind () {
      if (this.pullUpLoad) {
        this.observer.disconnect()
      }
    },
    onPullUp () {
      const { scrollContent, scrollBottom } = this.$refs
      const options = {
        root: scrollContent,
        rootMargin: `0px 0px ${this.disLoad}px 0px`
      }
      this.observer = new IntersectionObserver(([entries]) => {
        if (this.isPullUp) return
        if (entries.isIntersecting) {
          this.isPullUp = true
          this.$emit('onPullUp')
        }
      }, options)
      this.observer.observe(scrollBottom)
    },
    finishPullUp () {
      this.isPullUp = false
    }
  }
}
</script>

<style lang="less" scoped>
.v-scroll {
  position: relative;
  height: 100%;
  .scroll-content {
    height: 100%;
    overflow-y: scroll;
    .scroll-bottom {
      height: 0;
    }
  }
}
</style>
