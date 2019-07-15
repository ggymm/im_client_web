<template>
  <div class="chat-panel-container">
    <div class="chat-panel-header" style="-webkit-app-region: drag">
      <span style="-webkit-app-region: no-drag;">{{ chatData.title }}</span>
      <svg-icon icon-class="more" style="-webkit-app-region: no-drag;" />
    </div>
    <div :style="contentHeight" class="chat-panel-content">
      <div id="scrolling" class="scrolling">
        <ul :style="contentScrolling">
          <li class="history" @click="getHistory()">查看更多消息</li>
          <li
            v-for="chatMessage in messages"
            :class="chatMessage.own ? 'pull-right' : 'pull-left'"
            class="chat-message-item"
          >
            <div class="avatar"><img :src="chatMessage.image" alt="头像"></div>
            <div :style="contentMaxWidth" class="content" v-html="chatMessage.content"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="chat-panel-drag-line"></div>
    <div v-focus :style="inputHeight" class="chat-panel-input" tabindex="-1">
      <div class="editor-header">
        <div class="editor-icon" title="表情">
          <svg-icon class="emoji" icon-class="emoji" />
        </div>
        <div class="editor-icon" title="发送文件">
          <svg-icon class="folder" icon-class="folder" />
        </div>
        <div class="editor-icon" title="聊天记录">
          <svg-icon class="record" icon-class="record" />
        </div>
      </div>
      <div
        id="editor-content"
        class="editor-content"
        contenteditable="true"
        spellcheck="false"
        @blur="isLocked = false"
        @focus="isLocked = true"
        @input="message = $event.target.innerHTML"></div>
      <div class="chat-panel-submit">
        <el-button size="mini" @click="sendMessage()">发送(S)</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from '../../../utils/index'

export default {
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus()
      }
    }
  },
  props: {
    chatData: {
      type: Object,
      default() {
      }
    },
    messages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isMoving: false,
      visible: false,
      usableHeight: window.innerHeight - 20 - 40 - 0.5,
      usableWidth: window.innerWidth - 60 - 250,
      defaultScale: 0.7,
      contentHeight: {
        height: ''
      },
      contentScrolling: {
        maxWidth: ''
      },
      contentMaxWidth: {
        maxWidth: ''
      },
      inputHeight: {
        height: ''
      },
      message: '',
      isLocked: false
    }
  },
  watch: {
    'messages': 'scrollToBottom'
  },
  created() {
    this.setUsableHeight()
    this.setUsableWidth()
    this.resetDivideHeight(this.defaultScale)
    this.resetContentScrolling()
    this.resetContentMaxWidth()
  },
  mounted() {
    this._resizeHanlder = debounce(() => {
      this.setUsableHeight()
      this.setUsableHeight()
      this.setUsableWidth()
      this.resetDivideHeight(this.defaultScale)
      this.resetContentScrolling()
      this.resetContentMaxWidth()
    }, 300)
    window.addEventListener('resize', this._resizeHanlder)
    // 滚动到最底部
    this.scrollToBottom()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._resizeHanlder)
  },
  methods: {
    setUsableHeight() {
      this.usableHeight = window.innerHeight - 20 - 40 - 1
    },
    setUsableWidth() {
      this.usableWidth = window.innerWidth - 60 - 250
    },
    resetDivideHeight(scale) {
      this.contentHeight.height = this.usableHeight * scale + 'px'
      this.inputHeight.height = this.usableHeight * (1 - scale) + 'px'
    },
    resetContentScrolling() {
      this.contentScrolling.maxWidth = this.usableWidth - 7 + 'px'
    },
    resetContentMaxWidth() {
      this.contentMaxWidth.maxWidth = this.usableWidth * 0.5 + 13.934 + 'px'
    },
    sendMessage() {

    },
    scrollToBottom() {
      this.$nextTick(() => {
        const div = document.getElementById('scrolling')
        div.scrollTop = div.scrollHeight
      })
    },
    getHistory() {
      // 获取历史消息
      // 从服务器获取历史消息
    }
  }
}
</script>
