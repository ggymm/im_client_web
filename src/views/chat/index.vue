<template>
  <div class="chat-container">
    <Search />
    <ChatList :chat-list="chatList" />
    <ChatPanel :chat-data="currentChat" :messages="currentMessageList" />
  </div>
</template>

<script>
import { ChatList, ChatPanel, Search } from './components'

export default {
  name: 'Chat',
  components: {
    ChatList,
    ChatPanel,
    Search
  },
  data() {
    return {
      chatList: [
        {
          id: 0,
          icon: 'server',
          title: '服务器',
          lastMessage: '智能服务器',
          lastUpdateDate: '18/12/12'
        },
        {
          id: -1,
          icon: 'file-transfer',
          title: '文件云存储',
          lastMessage: '云存储文件助手',
          lastUpdateDate: '18/12/12'
        },
        {
          id: -2,
          icon: 'news',
          title: '新闻头条',
          lastMessage: '最新的新闻热点',
          lastUpdateDate: '18/12/12'
        },
        {
          id: -3,
          icon: 'test-user',
          title: '测试用户',
          lastMessage: '理论上是最新一条消息',
          lastUpdateDate: '18/12/12'
        }
      ],
      currentChat: {
        id: 0,
        icon: 'server',
        title: '服务器',
        lastMessage: '智能服务器',
        lastUpdateDate: '18/12/12'
      },
      currentMessageList: []
    }
  },
  mounted() {
  },
  created() {
  },
  beforeDestroy() {
  },
  methods: {
    setMessage(message) {
    },
    getMessage() {
    },
    getUserChat(userId) {
    }
  }
}
</script>

