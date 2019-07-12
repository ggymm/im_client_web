/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict'

var $protobuf = require('protobufjs/light')

var $root = ($protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root()))
  .addJSON({
    message: {
      nested: {
        CommandType: {
          values: {
            HANDSHAKE_REQ: 0,
            HANDSHAKE_RESP: 1,
            AUTH_REQ: 2,
            AUTH_RESP: 3,
            LOGIN_REQ: 4,
            LOGIN_RESP: 5,
            JOIN_GROUP_REQ: 6,
            JOIN_GROUP_RESP: 7,
            JOIN_GROUP_NOTIFY_RESP: 8,
            EXIT_GROUP_NOTIFY_RESP: 9,
            CHAT_REQ: 10,
            CHAT_RESP: 11,
            HEARTBEAT_REQ: 12,
            CLOSE_REQ: 13,
            CANCEL_MSG_REQ: 14,
            CANCEL_MSG_RESP: 15,
            GET_USER_REQ: 16,
            GET_USER_RESP: 17,
            GET_MESSAGE_REQ: 18,
            GET_MESSAGE_RESP: 19,
            GET_UN_READ_MESSAGE_REQ: 20,
            GET_UN_READ_MESSAGE_RESP: 21
          }
        },
        MsgType: {
          values: {
            TEXT: 0,
            IMG: 1,
            VOICE: 2,
            VIDEO: 3,
            MUSIC: 4,
            NEWS: 5
          }
        },
        ChatType: {
          values: {
            PUBLIC: 0,
            PRIVATE: 1
          }
        },
        Message: {
          fields: {
            From: {
              type: 'int64',
              id: 1
            },
            To: {
              type: 'int64',
              id: 2
            },
            Cmd: {
              type: 'CommandType',
              id: 3
            },
            CreateTime: {
              type: 'int64',
              id: 4
            },
            MsgType: {
              type: 'MsgType',
              id: 5
            },
            ChatType: {
              type: 'ChatType',
              id: 6
            },
            GroupId: {
              type: 'string',
              id: 7
            },
            Content: {
              type: 'string',
              id: 8
            },
            Extras: {
              type: 'string',
              id: 9
            }
          }
        }
      }
    }
  })

module.exports = $root
