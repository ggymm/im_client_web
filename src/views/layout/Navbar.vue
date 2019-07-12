<template>
  <div class="navbar-container" style="-webkit-app-region: drag">
    <a class="close" href="javascript:void(0)" style="-webkit-app-region: no-drag" @click="close">
      <svg-icon icon-class="close" />
    </a>
    <a href="javascript:void(0)" style="-webkit-app-region: no-drag" @click="max">
      <svg-icon :icon-class="icon" />
    </a>
    <a href="javascript:void(0)" style="-webkit-app-region: no-drag" @click="min">
      <svg-icon icon-class="remove" />
    </a>
  </div>
</template>

<script>
import winControl from '../../window/windowControl.js'

export default {
  name: 'Navbar',
  data() {
    return {
      // 默认选中的值
      icon: 'square'
    }
  },
  methods: {
    min() {
      winControl.min()
    },
    max() {
      winControl.max()
      this.icon =
          this.icon === 'square'
            ? 'browsers'
            : 'square'
    },
    close() {
      // 测试阶段，手动清除C:\Users\gongym\AppData\Roaming\Electron\data.db
      winControl.close()
    }
  }
}
</script>

