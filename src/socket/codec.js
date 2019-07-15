import protoRoot from './message.js'

const messageProtocol = protoRoot.lookup('message.Message')

const messageId = 52312

export function encodeMessageData(messageObject) {
  const request = messageProtocol.encode(messageProtocol.create(messageObject)).finish()
  const msgBuffer = new ArrayBuffer(2 + request.length)
  const msgContent = new DataView(msgBuffer)
  msgContent.setUint16(0, messageId, true)
  for (let i = 0; i < request.length; i++) {
    msgContent.setUint8(2 + i, request[i])
  }
  return msgBuffer
}

export function decodeMessageData(event) {
  if (event.data instanceof ArrayBuffer) {
    const msgContent = new DataView(event.data)
    const msgId = msgContent.getUint16(0, true)
    // 校验消息ID
    if (msgId === messageId) {
      return messageProtocol.decode(new Uint8Array(event.data.slice(2)))
    } else {
      return null
    }
  } else {
    return null
  }
}
