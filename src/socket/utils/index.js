const messageId = 52312

export function encodeMessageData(request) {
  const msgBuffer = new ArrayBuffer(2 + request.length)
  const msgContent = new DataView(msgBuffer)
  msgContent.setUint16(0, messageId, true)
  for (let i = 0; i < request.length; i++) {
    msgContent.setUint8(2 + i, request[i])
  }
  return msgBuffer
}

export function decodeMessageData(event) {
  debugger
  if (event.data instanceof ArrayBuffer) {
    const msgContent = new DataView(event.data)
    const msgId = msgContent.getUint16(0, true)
    if (msgId === messageId) {
      return new Uint8Array(event.data.slice(2))
    } else {
      return null
    }
  } else {
    return null
  }
}
