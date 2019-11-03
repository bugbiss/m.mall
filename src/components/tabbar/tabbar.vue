<template>
  <div class="v-tabbar">
    <slot></slot>
  </div>
</template>

<script>
import { findChildrenComponents } from '@/utils'

export default {
  name: 'Tabbar',
  mounted () {
    const children = findChildrenComponents(this, 'TabItem')
    children[0].active = true
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="less" scoped>
.v-tabbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  background-color: #fff;
}
</style>
