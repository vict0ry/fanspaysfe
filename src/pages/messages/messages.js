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
    dispatch(loadChatMessages(selectedChatId)).then(scrollMessagesDown)
  }


  const meStyle = {
    background: '#d1e3ff',
    padding: '20px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right'
  }
  const sendersStyle = {
    background: '#e2e2e2',
    padding: '20px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  }

  useEffect(() => {
    if (userid) {
      axios.get('/messages/' + userid).then(chat => {
        dispatch(loadChats())
      })
    }
  }, [])

  function handleAddMessage() {
    dispatch(sendMessage(userMessage)).then(scrollMessagesDown)
    setUserMessage('')
    socket.emit('notification received', selectedChatId)
  }

  const scrollMessagesDown = () => {
    messageElement.current.scrollTop = messageElement.current.scrollHeight
  }

  const [userMessage, setUserMessage] = useState('')


  function handleMessageOnKeyDown(value) {
    setUserMessage(value)
  }

  const isSender = (i) => {
    return i.sender?._id === loggedUser.userData?._id
  }

  return (
    <div style={{ display: 'grid', marginTop: 20, gridTemplateColumns: '1fr 1fr 3fr' }}>
      <SharedLeftMenu />
      <FolderList />
      <Paper>
        <strong style={{ padding: 20 }}>Chat with Victor Eliot</strong>
        <Box ref={messageElement} style={{ maxHeight: '300px', minWidth: '100vh', overflow: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {selectedChatMessages.length ? selectedChatMessages.map((i, id) => {
              return (
                <div>
                  <div style={isSender(i) ? { display: 'flex', flexDirection: 'row-reverse', marginBottom: 10 } : {
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                       className="userPlusMessage">
                    <div className="user">
                      <img
                        style={{ width: 60, borderRadius: '100%', margin: '0 10px' }}
                        src="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
                        alt="" />
                    </div>
                    <div key={id} style={isSender(i) ? meStyle : sendersStyle}>
                      {i.content}
                      <span style={{ fontSize: '12px', color: 'gray' }}>06.00 AM</span>
                    </div>
                  </div>
                </div>
              )
            }) : <strong style={{ padding: '20px' }}>{t('COMMON.NOTHING_HERE_YET')}</strong>}
          </div>

        </Box>
        <Toolbar sx={{ display: 'flex' }}>
          <Box sx={{ width: '100%' }}>
            <TextField onChange={() => handleMessageOnKeyDown(event.target.value)}
                       value={userMessage}
                       sx={{ width: '100%', padding: '0', marginLeft: 0 }} id="outlined-basic" label="Message" />
            <ImageIcon onClick={() => {
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
            />
          </Box>
          <Button
            disabled={!userMessage.length}
            onClick={() => handleAddMessage()}
            sx={{ padding: 0, color: 'white', marginLeft: '5px' }} variant="contained">Send</Button>
        </Toolbar>
      </Paper>
    </div>
  )
}
