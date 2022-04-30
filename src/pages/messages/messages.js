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
import { loadChatMessages, loadChats, sendMessage } from '../../modules/messages.action'
import axios from 'axios'
import { SocketContext } from '../../context/socket'
import ImageIcon from '@mui/icons-material/Image'

const messageElement = React.createRef()

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
    alert('notif reciived')
    debugger;
    dispatch(loadChatMessages(selectedChatId)).then(scrollMessagesDown)
  }


  const meStyle = {
    float: 'right',
    display: 'inline-block',
    background: '#d1e3ff',
    padding: '20px',
    borderRadius: '20px',
    textAlign: 'right'
  }
  const sendersStyle = {
    float: 'left',
    display: 'inline-block',
    background: '#e2e2e2',
    padding: '20px',
    borderRadius: '20px',
    textAlign: 'left'
  }

  useEffect(() => {
    if (userid) {
      axios.get('/messages/' + userid).then(chat => {
        dispatch(loadChats())
      })
    }
    // if (!chatList?.map(i => i.users).find(i => {
    //   return i[0]._id === userid
    // }) && userid) {
    //   axios.post('/api/chats/', {
    //     users: [userid]
    //   }).then(chat => {
    //     console.log(chat)
    //   })
    // }
  }, [])

  function handleAddMessage() {
    dispatch(sendMessage(userMessage)).then(scrollMessagesDown)
    setUserMessage('')
    debugger;
    socket.emit('notification received', selectedChatId)
  }

  const scrollMessagesDown = () => {
    messageElement.current.scrollTop = messageElement.current.scrollHeight
  }

  const [userMessage, setUserMessage] = useState('')


  function handleMessageOnKeyDown(value) {
    setUserMessage(value)
  }

  return (
    <div style={{ display: 'flex', marginTop: 20 }}>
      <FolderList />
      <Paper>
        <Box ref={messageElement} style={{ maxHeight: '300px', minWidth: '100vh', overflow: 'auto' }}>
          <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
            {selectedChatMessages.length ? selectedChatMessages.map((i, id) => {
              return <div key={id} style={i.sender?._id === loggedUser.userData?._id ? meStyle : sendersStyle}>
                {i.content}
              </div>
            }) : <strong style={{ padding: '20px' }}>No messages yet</strong>}
          </div>

        </Box>
        <Toolbar sx={{ display: 'flex' }}>
          <TextField onChange={() => handleMessageOnKeyDown(event.target.value)}
                     value={userMessage}
                     sx={{ width: '100%', padding: '0', marginLeft: 0 }} id="outlined-basic" label="Message"
                     variant="outlined" />
          <Button
            disabled={!userMessage.length}
            onClick={() => handleAddMessage()}
            sx={{ padding: 0, marginLeft: '5px' }} variant="outlined">Send</Button>
        </Toolbar>
      </Paper>
    </div>
  )
}
