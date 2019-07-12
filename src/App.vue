<template>
  <div id="app">
    <div class="app-wrapper">
      <sidebar />
      <div class="main-container">
        <navbar />
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './views/layout'
import ChatController from './socket/chatController'
export default {
  name: 'App',
  components: {
    AppMain,
    Navbar,
    Sidebar
  },
  mounted() {
    // 初始化WebSocket连接操作
    ChatController.init()
  }
}
</script>

<style lang="sass">
  @import './styles/index.scss'
  // 全局自定义的css样式
</style>
