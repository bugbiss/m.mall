<template>
  <div class="v-tab-bar" :class="{active}" @click="handleClick">
    <i :class="`icon iconfont ${icon}`"></i>
    <slot></slot>
  </div>
</template>

<script>
import { findParentComponents, findBrothersComponents } from '@/utils'

export default {
  name: 'TabItem',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    handleClick () {
      const parent = findParentComponents(this, 'Tabbar')
      const brothers = findBrothersComponents(this, 'TabItem', false)
      brothers.forEach(item => {
        item.active = false
      })
      const index = brothers.findIndex(item => item === this)
      this.active = true
      parent.onChange(index)
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.v-tab-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  .icon {
    font-size: 36px;
    margin-bottom: 12px;
  }
  &.active {
    color: #fb7299;
  }
}
</style>
