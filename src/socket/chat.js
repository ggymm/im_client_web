import protoRoot from './message.js'
import { decodeMessageData, encodeMessageData } from './codec.js'

const CommandType = protoRoot.lookup('message.CommandType')
const MsgType = protoRoot.lookup('message.MsgType')
const ChatType = protoRoot.lookup('message.ChatType')

const ChatController = {
  connect: false,
  websocket: null,
  login: function() {
    const messageObject = {
      From: 1,
      To: 0,
      Cmd: CommandType.values['LOGIN_REQ'],
      CreateTime: new Date().getTime(),
      MsgType: MsgType.values['TEXT'],
      ChatType: ChatType.values['PRIVATE'],
      GroupId: '',
      Content: '',
      Extras: ''
    }
    if (this.websocket.readyState === WebSocket.OPEN) {
      // 希望获取到聊天列表
      this.websocket.send(encodeMessageData(messageObject))
    }
  },
  init: async function() {
    const _this = this
    this.websocket = new WebSocket('ws://localhost:18808/chat')
    this.websocket.binaryType = 'arraybuffer'
    this.websocket.onmessage = function(event) {
      const message = decodeMessageData(event)
      if (message !== null) {
        console.log(message)
      }
    }
    this.websocket.onclose = function(event) {
    }
    this.websocket.onopen = function() {
      _this.connect = true
      ChatController.login()
    }
  }
}

export default ChatController

