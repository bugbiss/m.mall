<template>
  <ul class="hot-recommend">
    <li>初音未来</li>
    <li>英雄联盟S9总决赛</li>
    <li>WePlay</li>
  </ul>
</template>

<script>
export default {
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.hot-recommend {
  display: flex;
  align-items: center;
  color: #fff;
  padding: 10px 30px 30px;
  font-size: 24px;
  background: linear-gradient(90deg,#442857,#5b2b50);
  li {
    margin-left: 40px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
