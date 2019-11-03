<template>
  <div class="search-bar-container">
    <div class="region">
      <span>上海</span>
      <i class="icon iconfont icon-icon-test37"></i>
    </div>
    <div class="search">
      <i class="icon iconfont icon-icon-test6"></i>
      <span class="placeholder">展览演出、嘉宾、城市</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 30px;
  background-image: linear-gradient(90deg,#442857,#5b2b50);
  background-size: 100% auto;
  background-position: 0 100%;
  .region {
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #fff;
    .iconfont {
      color: #fb7299;
    }
  }
  .search {
    display: flex;
    align-items: center;
    width: 560px;
    height: 56px;
    background: #f4f4f4;
    border-radius: 56px;
    font-size: 24px;
    color: #999;
    .iconfont {
      color: #333;
      margin: 0 16px;
    }
  }
}
</style>
