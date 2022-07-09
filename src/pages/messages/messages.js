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
import { ClickAwayListener } from '@mui/base'
import useWindowDimensions from '../../useWindowDimensions'


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

  // useEffect(() => {
  //   setIsTodayRendered(false);
  // }, [chatMessages])

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

  const [headerMenuClicked, setHeaderMenuClicked] = useState(false);
  const [attachmentMenuClicked, setAttachmentMenuClicked] = useState(false);

  const [uploadedImages, setUploadedImages] = useState([]);


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
      cursor: "pointer",
      position: "relative"
    },
    chatControllerOpen: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      right: "0",
      top: "50%",
      background: "#fff",
      zIndex: 1,
      borderRadius: 8,
      boxShadow: "0px 2px 8px rgba(26, 5, 29, 0.1)",

      // width: 200
    },
    chatControllerOpenItem: {
      padding: 8,
      fontSize: 12,
      fontWeight: 700,
      color: "#000",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      width: "100%",
      textTransform: "none",
      whiteSpace: "nowrap"
    },
    chatControllerOpenImage: {
      marginRight: 8,
      width: 16,
      height: 16,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
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

    messageControllerOpen: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      left: "50%",
      bottom: "50%",
      background: "#fff",
      zIndex: 1,
      borderRadius: 8,
      boxShadow: "0px 2px 8px rgba(26, 5, 29, 0.1)",
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

  // console.log(uploadedImages)
  const fileInput = React.useRef(null);
  const { height, width } = useWindowDimensions();

  return (
    <div
      // style={{ display: 'grid', marginTop: 20, gridTemplateColumns: '1fr 1fr 3fr' }}
      style={{display: "flex", marginTop: 20}}
    >
      <SharedLeftMenu />
      <FolderList />
      <Paper
        // xl={{
        //   width: 600,
        //   display: "flex",
        //   flexDirection: "column",
        //   height: "100%"
        // }}
        // sm={{
        //   width: 300,
        //   display: "flex",
        //   flexDirection: "column",
        //   height: "100%"
        // }}

        style={{
          width: 600,
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}
      >



        <Box
          // ref={messageElement}
          style={styles.header}
        >


          <Box style={styles.headerLeft}>
            <Box style={styles.avatar}>
              <img
                style={{
                  width: 48,
                  height: 48,
                }}
                src="data:image/png;base64,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"
                alt=""
              />
            </Box>

            <Box style={styles.nameInfo}>
              <Box style={styles.fullName}>
                <span>Аня</span> <span>Кошкина</span>
              </Box>
              <Box style={styles.nickname}>@anncatjoy</Box>
            </Box>
            {true &&
              <Box style={{height: "100%"}}>
                <Box style={styles.status}>
                  В сети
                  <Box style={styles.statusCircle}></Box>
                </Box>
              </Box>
            }
          </Box>

          <Box style={styles.headerRight}>
            {width >= 1200 &&
              <Button style={styles.sendRequest} >
                  Отправить запрос
              </Button>
            }
            <ClickAwayListener
              onClickAway={() => {
                setHeaderMenuClicked(false);
              }}
            >
              <Button
                  style={styles.chatController}
                  onClick={(e) => {
                    setHeaderMenuClicked(!headerMenuClicked);
                  }}
              >
                <div style={styles.point}></div>
                <div style={styles.point}></div>
                <div style={styles.point}></div>

                {headerMenuClicked &&
                    <Box style={styles.chatControllerOpen}>
                        {width < 1200 &&
                          <Button style={{...styles.sendRequest, ...{width: "100%"}}}>
                            Отправить запрос
                          </Button>
                        }
                        <Button style={styles.chatControllerOpenItem} >
                            <Box style={styles.chatControllerOpenImage}><Icon name="bell" /></Box>
                            <Box>Отключить уведомления</Box>
                        </Button>
                        <Button style={styles.chatControllerOpenItem}>
                            <Box style={styles.chatControllerOpenImage}><Icon name="block" /></Box>
                            <Box>Заблокировать</Box>
                        </Button>
                        <Button style={styles.chatControllerOpenItem}>
                            <Box style={styles.chatControllerOpenImage}><Icon name="flag" /></Box>
                            <Box>Сообщить о нарушении</Box>
                        </Button>
                    </Box>
                }
              </Button>
            </ClickAwayListener>
          </Box>



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

            <ClickAwayListener
              onClickAway={() => {
                setAttachmentMenuClicked(false);
              }}
            >
              <Button
                style={{padding: 8, cursor: "pointer", minWidth: 0, position: "relative"}}
                onClick={() => {
                  setAttachmentMenuClicked(!attachmentMenuClicked)
                }}
              >
                <div style={{width: 24, height: 24}}>
                  <Icon name="attachment" />

                  {attachmentMenuClicked &&
                    <Box style={styles.messageControllerOpen}>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          // e.stopPropagation();
                          // console.log(fileInput)
                          fileInput.current.click();
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="imagePhoto" /></Box>
                        <Box>Фото или видео</Box>

                      </Button>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="file" /></Box>
                        <Box>Файл</Box>
                      </Button>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="camera" /></Box>
                        <Box>Камера</Box>
                      </Button>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="tips" /></Box>
                        <Box>Чаевые</Box>
                      </Button>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="gift" /></Box>
                        <Box>Подарки</Box>
                      </Button>
                    </Box>
                  }
                  <input
                    ref={fileInput}
                    accept='.png,.jpg,.jpeg'
                    multiple
                    style={{display: "none"}}
                    type="file"
                    onClick={(e) => {
                      e.target.value = "";
                    }}
                    onChange={(e) => {
                      setUploadedImages(e.target.files);
                    }}
                  />

                </div>
              </Button>
            </ClickAwayListener>


            <TextField onChange={() => handleMessageOnKeyDown(event.target.value)}
              variant="standard"
              value={userMessage}
              InputProps={{disableUnderline: true}}
              hiddenLabel
              sx={{ width: '100%', padding: '0', marginLeft: 0, border: "0" }}
              id="outlined-basic"
            />


            <Button style={{padding: 8, cursor: "pointer", minWidth: 0}}>
              <div style={{width: 24, height: 24}}>
                <Icon name="emoji" />
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
