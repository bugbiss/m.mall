<template>
  <div id="app">
    <router-view/>
    <div class="tabbar-wrap">
      <tabbar @change="handleTabChange">
        <tab-item icon="icon-shouyex">首页</tab-item>
        <tab-item icon="icon-fenleix">分类</tab-item>
        <tab-item icon="icon-gouwuchex">购物车</tab-item>
        <tab-item icon="icon-wodex">我的</tab-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/tabbar'
import TabItem from '@/components/tabbar/tab-item'

export default {
  components: {
    Tabbar,
    TabItem
  },
  methods: {
    handleTabChange (index) {
      console.log(index)
    }
  }
}
</script>

<style lang="less">
#app {
  position: relative;
  .tabbar-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #eaeaea;
  }
}
</style>
