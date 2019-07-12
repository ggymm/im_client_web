<template>
  <div class="sidebar-container">
    <div class="avatar-container">
      <img alt="头像" src="../../assets/avatar.jpg">
    </div>
    <div class="menu-container">
      <a class="menu-item chat" href="javascript:void(0)" @click="handleMessage">
        <svg-icon :icon-class="chat" />
      </a>
      <a class="menu-item relations" href="javascript:void(0)" @click="handleUsers">
        <svg-icon :icon-class="relations" />
      </a>
      <a class="menu-item collect" href="javascript:void(0)" @click="handleCollect">
        <svg-icon :icon-class="collect" />
      </a>
    </div>
    <div class="setting-container">
      <a class="setting" href="javascript:void(0)">
        <svg-icon icon-class="setting" />
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data() {
    return {
      // 默认选中的值
      chat: 'chat',
      relations: 'relations',
      collect: 'collect'
    }
  },
  mounted: function() {
    const currentHash = window.location.hash
    if (currentHash.indexOf('chat') > 0) {
      this.handleChangeIcon('chat')
    } else if (currentHash.indexOf('relations') > 0) {
      this.handleChangeIcon('relations')
    } else if (currentHash.indexOf('collect') > 0) {
      this.handleChangeIcon('collect')
    }
  },
  methods: {
    handleMessage() {
      this.handleChangeIcon('chat')
      this.$router.push('/chat')
    },
    handleUsers() {
      this.handleChangeIcon('relations')
      this.$router.push('/relations')
    },
    handleCollect() {
      this.handleChangeIcon('collect')
    },
    handleChangeIcon(index) {
      this.chat = index === 'chat' ? 'chat-choose' : 'chat'
      this.relations = index === 'relations' ? 'relations-choose' : 'relations'
      this.collect = index === 'collect' ? 'collect-choose' : 'collect'
    }
  }
}
</script>
