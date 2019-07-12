import protoRoot from './proto/proto.js'
import { encodeMessageData, decodeMessageData } from './utils'

const messageProtocol = protoRoot.lookup('message.Message')

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
    const request = messageProtocol.encode(messageProtocol.create(messageObject)).finish()
    if (this.websocket.readyState === WebSocket.OPEN) {
      this.websocket.send(encodeMessageData(request))
    }
  },
  init: async function() {
    const _this = this
    this.websocket = new WebSocket('ws://localhost:18808/chat')
    this.websocket.binaryType = 'arraybuffer'
    this.websocket.onmessage = function(event) {
      console.log(messageProtocol.decode(decodeMessageData(event)))
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

