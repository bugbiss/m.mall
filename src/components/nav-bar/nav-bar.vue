<template>
  <div class="v-nav-bar">
    <div class="left">
      <i class="icon iconfont icon-icon-test31"></i>
    </div>
    <span class="title">{{title}}</span>
    <!-- <div class="right">search</div> -->
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    back: Boolean,
    title: {
      type: String,
      default: '会员购'
    }
  }
}
</script>

<style lang="less" scoped>
.v-nav-bar {
  position: relative;
  height: 88px;
  line-height: 88px;
  text-align: center;
  background: #fff;
  .title {
    font-size: 32px;
    font-weight: bold;
  }
  .left, .right {
    position: absolute;
    bottom: 0;
    height: 100%;
    .iconfont {
      font-size: 52px;
    }
  }
  .left {
    left: 30px;
  }
  .right {
    right: 30px;
  }
}
</style>
