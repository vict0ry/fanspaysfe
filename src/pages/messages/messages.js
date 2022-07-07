import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { FolderList } from './folder-list'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { loadChatMessages, loadChats, sendMessage } from '../../redux/messages.action'
import axios from 'axios'
import { SocketContext } from '../../context/socket'
import { t } from 'i18next'
import ImageIcon from '@mui/icons-material/Image'
import SendTipModal from '../profile/modals/SendTipModal'
import { SharedLeftMenu } from '../../layout/components/SharedLeftMenu'
import { Icon } from './Icon'
import { Message } from './Message/Message'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const messageElement = React.createRef();


const chatMessages = [
  {
      "readBy": [
          "62865d31899c743cf48c9f7b",
          "62865cec899c743cf48c9f55"
      ],
      "_id": "62874cebd2e7014244c6623d",
      "sender": {
          "profilePic": "/uploads/images/232b85402f2eac53bf02e6b991611b20.png",
          "likes": [
              "62868daec45895444c94ddd5"
          ],
          "comments": [],
          "credit": [],
          "retweets": [],
          "following": [
              "62865d31899c743cf48c9f7b"
          ],
          "followers": [
              "62865d31899c743cf48c9f7b"
          ],
          "role": "user",
          "_id": "62865cec899c743cf48c9f55",
          "firstName": "sushant",
          "lastName": "chapagain",
          "username": "sushant7",
          "email": "sushant@gmail.com",
          "password": "$2b$10$bUvcUIu4yfLRKlb1jYkL/ewaiq/OP1PG5RUThL2Aa9.izy80i71fy",
          "createdAt": "2022-05-19T15:06:20.117Z",
          "updatedAt": "2022-05-23T14:38:36.349Z",
          "__v": 0,
          "coverPhoto": "/uploads/images/bd8f632eaea0b67321a10179dfd16e4e.png"
      },
      "content": "hello new group bro bro bro bro bro bro bro bro bro bro bro bor bor bor bro br ob r bogsdgsdgsghdsfh erjg j herb hr jerj hjaer j",
      "chat": "62874cdbd2e7014244c6622e",
      "createdAt": "2022-05-20T08:10:19.842Z",
      "updatedAt": "2022-05-20T16:44:12.291Z",
      "__v": 0
  },
  {
      "readBy": [
          "62865cec899c743cf48c9f55",
          "62865d31899c743cf48c9f7b"
      ],
      "_id": "628779e3a07c4c3c08a88d20",
      "sender": {
          "profilePic": "/uploads/images/31466738aa9cffdd021e24312a0e39ee.png",
          "likes": [
              "62868daec45895444c94ddd5",
              "62877a26a07c4c3c08a88d7f",
              "6287c4f8df2e914058cc8f10",
              "628b9c10564f523b14c2366a"
          ],
          "comments": [],
          "credit": [],
          "retweets": [],
          "following": [
              "62865cec899c743cf48c9f55"
          ],
          "followers": [
              "62865cec899c743cf48c9f55"
          ],
          "role": "user",
          "_id": "62865d31899c743cf48c9f7b",
          "firstName": "bame",
          "lastName": "bame",
          "username": "bame7",
          "email": "bame@gmail.com",
          "password": "$2b$10$7KIt3mmnHn1z6l0fOxWkc.6Hz98DMZM9MrNsNa1fXsPnNmP3K2LEm",
          "createdAt": "2022-05-19T15:07:29.923Z",
          "updatedAt": "2022-05-23T14:37:15.318Z",
          "__v": 0
      },
      "content": "hello hello form abame",
      "chat": "62874cdbd2e7014244c6622e",
      "createdAt": "2022-05-20T11:22:11.772Z",
      "updatedAt": "2022-05-20T16:44:12.291Z",
      "__v": 0
  },
  {
      "readBy": [],
      "_id": "62b997cd9882bb4a0281a13c",
      "sender": {
          "profilePic": "/uploads/images/6cee2f689ac6ea20f963387ab1ed8be8.png",
          "likes": [
              "62bb379a0f040eec764b2155",
              "62b9b4d272dbeba55f09d5a7"
          ],
          "comments": [],
          "credit": [],
          "retweets": [],
          "following": [],
          "followers": [
              "6255811a5aadc81fd3081d5e",
              "626e8bdf7cceb4644895b4d4",
              "62b9b0df7f5d66a3cf3f5c1b",
              "62b9c6ff772e16ac2cb47d0f",
              "62baab04990135c315bde583",
              "62bb392257aa48eccb262b43"
          ],
          "role": "user",
          "_id": "5fff0e6b4d090d1488d580cc",
          "firstName": "",
          "lastName": "testerson",
          "username": "test",
          "email": "test@test.test",
          "password": "$2b$10$QoT8Aj5esTfObrF2wfDfJOGBAGhwOFdYJIfm0wgL5JzEPQ6Pkhsma",
          "createdAt": "2021-01-13T15:14:51.299Z",
          "updatedAt": "2022-07-02T13:16:02.907Z",
          "__v": 1,
          "birthDate": "1965-07-31T21:00:00.000Z",
          "description": "nejaky dlouhy poopossfkj dsak fskdjf kasdjf kasdjfk sajdfkj asdkf as",
          "subscribtionPrice": 300
      },
      "content": "zxcxc",
      "chat": "62874cdbd2e7014244c6622e",
      "createdAt": "2022-06-27T11:43:09.737Z",
      "updatedAt": "2022-06-27T11:43:09.737Z",
      "__v": 0
  },
  {
    "readBy": [
        "62865cec899c743cf48c9f55",
        "62865d31899c743cf48c9f7b"
    ],
    "_id": "628779e3a07c4c3c08a88d20",
    "sender": {
        "profilePic": "/uploads/images/31466738aa9cffdd021e24312a0e39ee.png",
        "likes": [
            "62868daec45895444c94ddd5",
            "62877a26a07c4c3c08a88d7f",
            "6287c4f8df2e914058cc8f10",
            "628b9c10564f523b14c2366a"
        ],
        "comments": [],
        "credit": [],
        "retweets": [],
        "following": [
            "62865cec899c743cf48c9f55"
        ],
        "followers": [
            "62865cec899c743cf48c9f55"
        ],
        "role": "user",
        "_id": "62865d31899c743cf48c9f7b",
        "firstName": "bame",
        "lastName": "bame",
        "username": "bame7",
        "email": "bame@gmail.com",
        "password": "$2b$10$7KIt3mmnHn1z6l0fOxWkc.6Hz98DMZM9MrNsNa1fXsPnNmP3K2LEm",
        "createdAt": "2022-05-19T15:07:29.923Z",
        "updatedAt": "2022-05-23T14:37:15.318Z",
        "__v": 0
    },
    "content": "hello hello form abame",
    "chat": "62874cdbd2e7014244c6622e",
    "createdAt": "2022-05-20T11:22:11.772Z",
    "updatedAt": "2022-05-20T16:44:12.291Z",
    "__v": 0
  },
  {
    "readBy": [],
    "_id": "62b997cd9882bb4a0281a13c",
    "sender": {
        "profilePic": "/uploads/images/6cee2f689ac6ea20f963387ab1ed8be8.png",
        "likes": [
            "62bb379a0f040eec764b2155",
            "62b9b4d272dbeba55f09d5a7"
        ],
        "comments": [],
        "credit": [],
        "retweets": [],
        "following": [],
        "followers": [
            "6255811a5aadc81fd3081d5e",
            "626e8bdf7cceb4644895b4d4",
            "62b9b0df7f5d66a3cf3f5c1b",
            "62b9c6ff772e16ac2cb47d0f",
            "62baab04990135c315bde583",
            "62bb392257aa48eccb262b43"
        ],
        "role": "user",
        "_id": "5fff0e6b4d090d1488d580cc",
        "firstName": "",
        "lastName": "testerson",
        "username": "test",
        "email": "test@test.test",
        "password": "$2b$10$QoT8Aj5esTfObrF2wfDfJOGBAGhwOFdYJIfm0wgL5JzEPQ6Pkhsma",
        "createdAt": "2021-01-13T15:14:51.299Z",
        "updatedAt": "2022-07-02T13:16:02.907Z",
        "__v": 1,
        "birthDate": "1965-07-31T21:00:00.000Z",
        "description": "nejaky dlouhy poopossfkj dsak fskdjf kasdjf kasdjfk sajdfkj asdkf as",
        "subscribtionPrice": 300
    },
    "content": "zxcxc",
    "chat": "62874cdbd2e7014244c6622e",
    "createdAt": "2022-06-27T11:43:09.737Z",
    "updatedAt": "2022-06-27T11:43:09.737Z",
    "__v": 0
  },
  {
    "readBy": [
        "62865cec899c743cf48c9f55",
        "62865d31899c743cf48c9f7b"
    ],
    "_id": "628779e3a07c4c3c08a88d20",
    "sender": {
        "profilePic": "/uploads/images/31466738aa9cffdd021e24312a0e39ee.png",
        "likes": [
            "62868daec45895444c94ddd5",
            "62877a26a07c4c3c08a88d7f",
            "6287c4f8df2e914058cc8f10",
            "628b9c10564f523b14c2366a"
        ],
        "comments": [],
        "credit": [],
        "retweets": [],
        "following": [
            "62865cec899c743cf48c9f55"
        ],
        "followers": [
            "62865cec899c743cf48c9f55"
        ],
        "role": "user",
        "_id": "62865d31899c743cf48c9f7b",
        "firstName": "bame",
        "lastName": "bame",
        "username": "bame7",
        "email": "bame@gmail.com",
        "password": "$2b$10$7KIt3mmnHn1z6l0fOxWkc.6Hz98DMZM9MrNsNa1fXsPnNmP3K2LEm",
        "createdAt": "2022-05-19T15:07:29.923Z",
        "updatedAt": "2022-05-23T14:37:15.318Z",
        "__v": 0
    },
    "content": "hello hello form bro bro bro bor bor bor bro br ob r bogsdgsdgsghdsfh erjg j herb hr jerj hjaer j",
    "chat": "62874cdbd2e7014244c6622e",
    "createdAt": "2022-05-20T11:22:11.772Z",
    "updatedAt": "2022-05-20T16:44:12.291Z",
    "__v": 0
  },
  {
    "readBy": [],
    "_id": "62b997cd9882bb4a0281a13c",
    "sender": {
        "profilePic": "/uploads/images/6cee2f689ac6ea20f963387ab1ed8be8.png",
        "likes": [
            "62bb379a0f040eec764b2155",
            "62b9b4d272dbeba55f09d5a7"
        ],
        "comments": [],
        "credit": [],
        "retweets": [],
        "following": [],
        "followers": [
            "6255811a5aadc81fd3081d5e",
            "626e8bdf7cceb4644895b4d4",
            "62b9b0df7f5d66a3cf3f5c1b",
            "62b9c6ff772e16ac2cb47d0f",
            "62baab04990135c315bde583",
            "62bb392257aa48eccb262b43"
        ],
        "role": "user",
        "_id": "5fff0e6b4d090d1488d580cc",
        "firstName": "",
        "lastName": "testerson",
        "username": "test",
        "email": "test@test.test",
        "password": "$2b$10$QoT8Aj5esTfObrF2wfDfJOGBAGhwOFdYJIfm0wgL5JzEPQ6Pkhsma",
        "createdAt": "2021-01-13T15:14:51.299Z",
        "updatedAt": "2022-07-02T13:16:02.907Z",
        "__v": 1,
        "birthDate": "1965-07-31T21:00:00.000Z",
        "description": "nejaky dlouhy poopossfkj dsak fskdjf kasdjf kasdjfk sajdfkj asdkf as",
        "subscribtionPrice": 300
    },
    "content": "zxcxc bro bro bro bor bor bor bro br ob r bogsdgsdgsghdsfh erjg j herb hr jerj hjaer j",
    "chat": "62874cdbd2e7014244c6622e",
    "createdAt": "2022-06-27T11:43:09.737Z",
    "updatedAt": "2022-06-27T11:43:09.737Z",
    "__v": 0
  },
  {
    "readBy": [
        "62865cec899c743cf48c9f55",
        "62865d31899c743cf48c9f7b"
    ],
    "_id": "628779e3a07c4c3c08a88d20",
    "sender": {
        "profilePic": "/uploads/images/31466738aa9cffdd021e24312a0e39ee.png",
        "likes": [
            "62868daec45895444c94ddd5",
            "62877a26a07c4c3c08a88d7f",
            "6287c4f8df2e914058cc8f10",
            "628b9c10564f523b14c2366a"
        ],
        "comments": [],
        "credit": [],
        "retweets": [],
        "following": [
            "62865cec899c743cf48c9f55"
        ],
        "followers": [
            "62865cec899c743cf48c9f55"
        ],
        "role": "user",
        "_id": "62865d31899c743cf48c9f7b",
        "firstName": "bame",
        "lastName": "bame",
        "username": "bame7",
        "email": "bame@gmail.com",
        "password": "$2b$10$7KIt3mmnHn1z6l0fOxWkc.6Hz98DMZM9MrNsNa1fXsPnNmP3K2LEm",
        "createdAt": "2022-05-19T15:07:29.923Z",
        "updatedAt": "2022-05-23T14:37:15.318Z",
        "__v": 0
    },
    "content": "hello hello form abame",
    "chat": "62874cdbd2e7014244c6622e",
    "createdAt": "2022-05-20T11:22:11.772Z",
    "updatedAt": "2022-05-20T16:44:12.291Z",
    "__v": 0
  },
  {
    "readBy": [],
    "_id": "62b997cd9882bb4a0281a13c",
    "sender": {
        "profilePic": "/uploads/images/6cee2f689ac6ea20f963387ab1ed8be8.png",
        "likes": [
            "62bb379a0f040eec764b2155",
            "62b9b4d272dbeba55f09d5a7"
        ],
        "comments": [],
        "credit": [],
        "retweets": [],
        "following": [],
        "followers": [
            "6255811a5aadc81fd3081d5e",
            "626e8bdf7cceb4644895b4d4",
            "62b9b0df7f5d66a3cf3f5c1b",
            "62b9c6ff772e16ac2cb47d0f",
            "62baab04990135c315bde583",
            "62bb392257aa48eccb262b43"
        ],
        "role": "user",
        "_id": "5fff0e6b4d090d1488d580cc",
        "firstName": "",
        "lastName": "testerson",
        "username": "test",
        "email": "test@test.test",
        "password": "$2b$10$QoT8Aj5esTfObrF2wfDfJOGBAGhwOFdYJIfm0wgL5JzEPQ6Pkhsma",
        "createdAt": "2021-01-13T15:14:51.299Z",
        "updatedAt": "2022-07-02T13:16:02.907Z",
        "__v": 1,
        "birthDate": "1965-07-31T21:00:00.000Z",
        "description": "nejaky dlouhy poopossfkj dsak fskdjf kasdjf kasdjfk sajdfkj asdkf as",
        "subscribtionPrice": 300
    },
    "content": "zxcxc",
    "chat": "62874cdbd2e7014244c6622e",
    "createdAt": "2022-06-27T11:43:09.737Z",
    "updatedAt": "2022-06-27T11:43:09.737Z",
    "__v": 0
  },
  


  {
    "readBy": [],
    "_id": "62b997cd9882bb4a0281a13c",
    "sender": {
        "profilePic": "/uploads/images/6cee2f689ac6ea20f963387ab1ed8be8.png",
        "likes": [
            "62bb379a0f040eec764b2155",
            "62b9b4d272dbeba55f09d5a7"
        ],
        "comments": [],
        "credit": [],
        "retweets": [],
        "following": [],
        "followers": [
            "6255811a5aadc81fd3081d5e",
            "626e8bdf7cceb4644895b4d4",
            "62b9b0df7f5d66a3cf3f5c1b",
            "62b9c6ff772e16ac2cb47d0f",
            "62baab04990135c315bde583",
            "62bb392257aa48eccb262b43"
        ],
        "role": "user",
        "_id": "5fff0e6b4d090d1488d580cc",
        "firstName": "",
        "lastName": "testerson",
        "username": "test",
        "email": "test@test.test",
        "password": "$2b$10$QoT8Aj5esTfObrF2wfDfJOGBAGhwOFdYJIfm0wgL5JzEPQ6Pkhsma",
        "createdAt": "2021-01-13T15:14:51.299Z",
        "updatedAt": "2022-07-02T13:16:02.907Z",
        "__v": 1,
        "birthDate": "1965-07-31T21:00:00.000Z",
        "description": "nejaky dlouhy poopossfkj dsak fskdjf kasdjf kasdjfk sajdfkj asdkf as",
        "subscribtionPrice": 300
    },
    "content": "zxcxc",
    "chat": "62874cdbd2e7014244c6622e",
    "createdAt": "2022-07-06T11:22:11.772Z",
    "updatedAt": "2022-07-06T16:44:12.291Z",
    "__v": 0
  },
  {
    "readBy": [
        "62865cec899c743cf48c9f55",
        "62865d31899c743cf48c9f7b"
    ],
    "_id": "628779e3a07c4c3c08a88d20",
    "sender": {
        "profilePic": "/uploads/images/31466738aa9cffdd021e24312a0e39ee.png",
        "likes": [
            "62868daec45895444c94ddd5",
            "62877a26a07c4c3c08a88d7f",
            "6287c4f8df2e914058cc8f10",
            "628b9c10564f523b14c2366a"
        ],
        "comments": [],
        "credit": [],
        "retweets": [],
        "following": [
            "62865cec899c743cf48c9f55"
        ],
        "followers": [
            "62865cec899c743cf48c9f55"
        ],
        "role": "user",
        "_id": "62865d31899c743cf48c9f7b",
        "firstName": "bame",
        "lastName": "bame",
        "username": "bame7",
        "email": "bame@gmail.com",
        "password": "$2b$10$7KIt3mmnHn1z6l0fOxWkc.6Hz98DMZM9MrNsNa1fXsPnNmP3K2LEm",
        "createdAt": "2022-07-06T15:07:29.923Z",
        "updatedAt": "2022-07-06T14:37:15.318Z",
        "__v": 0
    },
    "content": "hello hello form abame",
    "chat": "62874cdbd2e7014244c6622e",
    "createdAt": "2022-07-06T12:22:11.772Z",
    "updatedAt": "2022-07-06T16:44:12.291Z",
    "__v": 0
  },


]




export function Messages() {
  const dispatch = useDispatch()
  const { userid } = useParams()
  const chatList = useSelector(state => state.messages.chatList)
  const selectedChatMessages = useSelector(state => state.messages.selectedChatMessages)
  const loggedUser = useSelector(state => state.user)
  const selectedChatId = userid || useSelector(state => state.messages.selectedChatId)

  const socket = useContext(SocketContext)
  useEffect(() => {
    socket.on('notification received', () => onNotificationRecieve())
  }, [])

  const onNotificationRecieve = () => {
    dispatch(loadChatMessages(selectedChatId)).then(scrollMessagesDown)
  }

  useEffect(() => {
    if (userid) {
      axios.get('/messages/' + userid).then(chat => {
        dispatch(loadChats())
      })
    }
  }, [])

  useEffect(() => {
    setIsTodayRendered(false);
  }, [chatMessages])

  function handleAddMessage() {
    dispatch(sendMessage(userMessage)).then(scrollMessagesDown)
    setUserMessage('')
    socket.emit('notification received', selectedChatId)
  }

  const scrollMessagesDown = () => {
    messageElement.current.scrollTop = messageElement.current.scrollHeight
  }

  const [userMessage, setUserMessage] = useState('');
  const [isTodayRendered, setIsTodayRendered] = useState(false);


  function handleMessageOnKeyDown(value) {
    setUserMessage(value)
  }

  const isSender = (i) => {
    return i.sender?._id === loggedUser.userData?._id
  }


  const styles = {
    header: {
      width: "100%",
      display: "flex",
      padding: "16px 24px",
      boxShadow: "0px 2px 8px rgba(26, 5, 29, 0.1)",
      justifyContent: "space-between"
    },
    headerLeft: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    headerRight: {
      display: "flex",
      alignItems: "center"
    },
    avatar: {
      borderRadius: "50%",
      overflow: "hidden",
      marginRight: 10
    },
    fullName: {
      fontSize: 18,
      fontWeight: 700
    },
    nickname: {
      fontWeight: 600,
      fontSize: 16,
      color: "#B3B3B3"
    },
    status: {
      padding: "2px 8px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#1FCC64",
      background: "#EBFEF9",
      marginLeft: 8
    },
    statusCircle: {
      width: 8,
      height: 8,
      background: "#1FCC64",
      borderRadius: "50%",
      marginLeft: 8
    },

    sendRequest: {
      width: 170,
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(90deg, #4776E6, #8E54E9)",
      color: "#fff",
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: "100%",
      textTransform: 'none',
    },
    chatController: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      height: 37,
      width: 37,
      minWidth: "initial",
      marginLeft: 8,
      cursor: "pointer"
    },
    point: {
      width: 5,
      height: 5,
      background: "#5D5E65",
      borderRadius: "50%",

    },
    
    
    messagesController: {
      width: "100%",
      height: 56,
      display: "flex",
      alignItems: "center",
      borderTop: "1px solid #ECE9F1",
      padding: 8
    },

    messages_cont: {
      width: "100%",
      height: 660,
      display: "flex",
      flexDirection: "column",

      padding: "8px 24px 24px 24px",
      overflow: "scroll"
    }
  }

  return (
    <div style={{ display: 'grid', marginTop: 20, gridTemplateColumns: '1fr 1fr 3fr' }}>
      <SharedLeftMenu />
      <FolderList />
      <Paper style={{
        width: 600,
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}>



        <Box ref={messageElement} style={styles.header}>


          <div style={styles.headerLeft}>
            <div style={styles.avatar}>
              <img 
                style={{
                  width: 48,
                  height: 48,
                }}
                src="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                alt=""
              ></img>
            </div>

            <div style={styles.nameInfo}>
              <div style={styles.fullName}>
                <span>Аня</span> <span>Кошкина</span>
              </div>
              <div style={styles.nickname}>@anncatjoy</div>
            </div>
            {true && <div style={{height: "100%"}}><div style={styles.status}>
              В сети 
              <div style={styles.statusCircle}></div>
            </div></div>}
          </div>

          <div style={styles.headerRight}>
            <Button style={styles.sendRequest} >
                Отправить запрос
            </Button>
            <Button style={styles.chatController}>
              <div style={styles.point}></div>
              <div style={styles.point}></div>
              <div style={styles.point}></div>
            </Button>
          </div>



        </Box>



        <Toolbar style={{ display: 'flex', flexDirection: "column", padding: 0}}>


          <List style={styles.messages_cont}>

            {chatMessages.length ? chatMessages.map((i, id) => {
                // const now = new Date();
                // const date = new Date(i.createdAt);

                

                // if (
                //   !isTodayRendered && 
                //   now.getFullYear() === date.getFullYear() &&
                //   now.getMonth() === date.getMonth() &&
                //   now.getDate() === date.getDate()
                // ){
                //   setIsTodayRendered(true);

                //   return (
                //       <ListItem style={{display: "flex", alignItems: "center", width: "100%", height: "50px", border: "1px solid #000"}}>
                //         <div style={{flexGrow: 1, height: 1, color: "#ECE9F1"}}></div>
                //         <div style={{fontSize: 14, fontWeight: 700}}>Сегодня</div>
                //         <div style={{flexGrow: 1, height: 1, color: "#ECE9F1"}}></div>
                //       </ListItem>
                //       // <Message i={i} id={id} isSender={isSender} />
                    
                //   )
                // }

                return (
                  <Message i={i} id={id} isSender={isSender} />
                )
              }) : <strong style={{ padding: '20px' }}>{t('COMMON.NOTHING_HERE_YET')}</strong>}





          </List>



          <Box style={styles.messagesController}>
            

            <Button style={{padding: 8, cursor: "pointer", minWidth: 0}}>
              <div style={{width: 24, height: 24}}>
                <Icon name="attachment" />
              </div>
            </Button>



            <TextField onChange={() => handleMessageOnKeyDown(event.target.value)}
              variant="standard"
              value={userMessage}
              InputProps={{disableUnderline: true}}
              hiddenLabel
              sx={{ width: '100%', padding: '0', marginLeft: 0, border: "0" }} id="outlined-basic"
            />


            <Button style={{padding: 8, cursor: "pointer", minWidth: 0}}>
              <div style={{width: 24, height: 24}}>
                <Icon name="emodji" />
              </div>
            </Button>

            <Button style={{padding: 8, cursor: "pointer", minWidth: 0}}>
              <div style={{width: 24, height: 24}}>
                <Icon name="voice" />
              </div>
            </Button>



            {/* <ImageIcon onClick={() => {
            }} style={{ color: '#5c9edf', cursor: 'pointer' }}>

            </ImageIcon>
            <SendTipModal user={loggedUser.userData} />
            <input
              type="file"
              multiple
              accept='.png,.jpg,.jpeg'
              onChange={() => {
              }}
              style={{ display: 'none' }}
            /> */}


          </Box>

          {/* <Button
            disabled={!userMessage.length}
            onClick={() => handleAddMessage()}
            sx={{ padding: 0, color: 'white', marginLeft: '5px' }} variant="contained">Send
          </Button> */}

        </Toolbar>
      </Paper>
    </div>
  )
}
