<template>
  <div class="chat-list-container">
    <div class="scrolling">
      <ul>
        <li v-for="chat in chatList" :key="chat.id" class="chat-item" @click="changeUserPanel(chat)">
          <div class="icon">
            <svg-icon :icon-class="chat.icon" />
          </div>
          <div class="content">
            <div class="title">{{ chat.title }}</div>
            <div class="last-chat">{{ chat.lastMessage }}</div>
            <div class="last-update-date" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    changeUserPanel(chat) {
    }
  }
}
</script>
