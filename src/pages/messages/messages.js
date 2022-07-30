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
import axios from 'axios'
import { SocketContext } from '../../context/socket'
import { t } from 'i18next'
import { Icon } from './Icon'
import { Message } from './Message/Message'
import List from '@mui/material/List'
import { ClickAwayListener } from '@mui/base'
import useWindowDimensions from '../../useWindowDimensions'
import { loadChatMessages, loadChats, sendMessage } from '../../redux/actions/messages.action'


export function Messages() {
  const dispatch = useDispatch()
  const { userid } = useParams()
  const chatList = useSelector(state => state.messages.chatList)
  const chatMessages = useSelector(state => state.messages.selectedChatMessages)
  const loggedUser = useSelector(state => state.user)
  let selectedChatId = useSelector(state => state.messages.selectedChatId);
  if (!selectedChatId) {
    selectedChatId = chatList[0]._id;
  }
  const oppositeUser = chatList.find(list => list._id === selectedChatId).users.filter(i => i._id !== loggedUser.userData._id)[0];

  debugger;


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

  const [userMessage, setUserMessage] = useState('')
  const [isTodayRendered, setIsTodayRendered] = useState(false)

  const [headerMenuClicked, setHeaderMenuClicked] = useState(false)
  const [attachmentMenuClicked, setAttachmentMenuClicked] = useState(false)

  const [uploadedImages, setUploadedImages] = useState([])

  const [folderListOpen, setFolderListOpen] = useState(true)


  function handleMessageOnKeyDown(value) {
    setUserMessage(value)
  }

  const isSender = (i) => {
    return i.sender?._id === loggedUser.userData?._id
  }


  const styles = {
    header: {
      width: '100%',
      display: 'flex',
      padding: '16px 24px',
      boxShadow: '0px 2px 8px rgba(26, 5, 29, 0.1)',
      justifyContent: 'space-between'
    },
    headerLeft: {
      display: 'flex',
      // justifyContent: "center",
      alignItems: 'center'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      borderRadius: '50%',
      overflow: 'hidden',
      marginRight: 10
    },
    fullName: {
      fontSize: 18,
      fontWeight: 700
    },
    nickname: {
      fontWeight: 600,
      fontSize: 16,
      color: '#B3B3B3'
    },
    status: {
      padding: '2px 8px',
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#1FCC64',
      background: '#EBFEF9',
      marginLeft: 8
    },
    statusCircle: {
      width: 8,
      height: 8,
      background: '#1FCC64',
      borderRadius: '50%'
      // marginLeft: 8
    },

    sendRequest: {
      width: 160,
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #4776E6, #8E54E9)',
      color: '#fff',
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: '100%',
      textTransform: 'none'
    },
    chatController: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 37,
      width: 37,
      minWidth: 'initial',
      marginLeft: 8,
      cursor: 'pointer',
      position: 'relative'
    },
    chatControllerOpen: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      right: '0',
      top: '50%',
      background: '#fff',
      zIndex: 1,
      borderRadius: 8,
      boxShadow: '0px 2px 8px rgba(26, 5, 29, 0.1)'

      // width: 200
    },
    chatControllerOpenItem: {
      padding: 8,
      fontSize: 12,
      fontWeight: 700,
      color: '#000',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      width: '100%',
      textTransform: 'none',
      whiteSpace: 'nowrap'
    },
    chatControllerOpenImage: {
      marginRight: 8,
      width: 16,
      height: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    point: {
      width: 5,
      height: 5,
      background: '#5D5E65',
      borderRadius: '50%'

    },


    messagesController: {
      width: '100%',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      borderTop: '1px solid #ECE9F1',
      padding: 8
    },

    messageControllerOpen: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      left: '50%',
      bottom: '50%',
      background: '#fff',
      zIndex: 1,
      borderRadius: 8,
      boxShadow: '0px 2px 8px rgba(26, 5, 29, 0.1)'
    },

    messages_cont: {
      width: '100%',
      height: 660,
      display: 'flex',
      flexDirection: 'column',

      padding: '8px 24px 24px 24px',
      overflow: 'scroll'
    }
  }

  const openFolderList = {
    width: 24,
    height: 24,
    transform: 'rotate(90deg)',
    transition: '300ms',
    cursor: 'pointer',
    transformOrigin: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  if (folderListOpen) {
    openFolderList.transform = 'rotate(90deg)'
  } else {
    openFolderList.transform = 'rotate(-90deg)'
  }

  // console.log(uploadedImages)
  const fileInput = React.useRef(null)
  const { height, width } = useWindowDimensions()


  const MessagesCont = () => {

    return (
      <Paper
        style={{
          width: 600,
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >


        <Box
          style={styles.header}
        >
          <Box style={styles.headerLeft}>

            {width < 600 && <Button
              style={openFolderList}
              onClick={() => {
                setFolderListOpen(!folderListOpen)
              }}
            >
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L7 1L1 7" stroke="#5D5E65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>}

            <Box style={styles.avatar}>
              <img
                style={{
                  width: 48,
                  height: 48
                }}
                src="data:image/png;base64,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"
                alt=""
              />
            </Box>

            <Box style={styles.nameInfo}>
              <Box style={styles.fullName}>
                <span>{oppositeUser.firstName}</span> <span>{oppositeUser.lastName}</span>
              </Box>
              <Box style={styles.nickname}>@{oppositeUser.username}</Box>
            </Box>
            {true &&
              <Box style={{ height: '100%' }}>
                <Box style={styles.status}>
                  {width > 600 &&
                    <span style={{ marginRight: 8 }}>{t('MESSAGES.ONLINE')}</span>
                  }
                  <Box style={styles.statusCircle}></Box>
                </Box>
              </Box>
            }
          </Box>

          <Box style={styles.headerRight}>
            {width >= 1200 &&
              <Button style={styles.sendRequest}>
                {t('MESSAGES.SEND_REQUEST')}
              </Button>
            }
            <ClickAwayListener
              onClickAway={() => {
                setHeaderMenuClicked(false)
              }}
            >
              <Button
                style={styles.chatController}
                onClick={(e) => {
                  setHeaderMenuClicked(!headerMenuClicked)
                }}
              >
                <div style={styles.point}></div>
                <div style={styles.point}></div>
                <div style={styles.point}></div>

                {headerMenuClicked &&
                  <Box style={styles.chatControllerOpen}>
                    {width < 1200 &&
                      <Button style={{ ...styles.sendRequest, ...{ width: '100%' } }}>
                        {t('MESSAGES.SEND_REQUEST')}
                      </Button>
                    }
                    <Button style={styles.chatControllerOpenItem}>
                      <Box style={styles.chatControllerOpenImage}><Icon name="bell" /></Box>
                      <Box>{t('MESSAGES.DISABLE_NOTIFICATIONS')}</Box>
                    </Button>
                    <Button style={styles.chatControllerOpenItem}>
                      <Box style={styles.chatControllerOpenImage}><Icon name="block" /></Box>
                      <Box>{t('MESSAGES.BLOCK_USER')}</Box>
                    </Button>
                    <Button style={styles.chatControllerOpenItem}>
                      <Box style={styles.chatControllerOpenImage}><Icon name="flag" /></Box>
                      <Box>{t('MESSAGES.REPORT')}</Box>
                    </Button>
                  </Box>
                }
              </Button>
            </ClickAwayListener>
          </Box>


        </Box>


        <Toolbar style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>


          <List style={styles.messages_cont}>

            {chatMessages.length ? chatMessages.map((i, id) => {

              return (
                <Message i={i} id={id} isSender={isSender} />
              )
            }) : <strong style={{ padding: '20px' }}>{t('COMMON.NOTHING_HERE_YET')}</strong>}


          </List>


          <Box style={styles.messagesController}>

            <ClickAwayListener
              onClickAway={() => {
                setAttachmentMenuClicked(false)
              }}
            >
              <Button
                style={{ padding: 8, cursor: 'pointer', minWidth: 0, position: 'relative' }}
                onClick={() => {
                  setAttachmentMenuClicked(!attachmentMenuClicked)
                }}
              >
                <div style={{ width: 24, height: 24 }}>
                  <Icon name="attachment" />

                  {attachmentMenuClicked &&
                    <Box style={styles.messageControllerOpen}>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          fileInput.current.click()
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="imagePhoto" /></Box>
                        <Box>{t('MESSAGES.SEND_PHOTO_OR_VIDEO')}</Box>

                      </Button>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="file" /></Box>
                        <Box>{t('MESSAGES.SEND_FILE')}</Box>
                      </Button>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="camera" /></Box>
                        <Box>{t('MESSAGES.CAMERA')}</Box>
                      </Button>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="tips" /></Box>
                        <Box>{t('MESSAGES.TIPS')}</Box>
                      </Button>
                      <Button
                        style={styles.chatControllerOpenItem}
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <Box style={styles.chatControllerOpenImage}><Icon name="gift" /></Box>
                        <Box>{t('MESSAGES.GIFTS')}</Box>
                      </Button>
                    </Box>
                  }
                  <input
                    ref={fileInput}
                    accept=".png,.jpg,.jpeg"
                    multiple
                    style={{ display: 'none' }}
                    type="file"
                    onClick={(e) => {
                      e.target.value = ''
                    }}
                    onChange={(e) => {
                      setUploadedImages(e.target.files)
                    }}
                  />

                </div>
              </Button>
            </ClickAwayListener>


            <TextField onChange={() => handleMessageOnKeyDown(event.target.value)}
                       variant="standard"
                       value={userMessage}
                       InputProps={{ disableUnderline: true }}
                       hiddenLabel
                       sx={{ width: '100%', padding: '0', marginLeft: 0, border: '0' }}
                       id="outlined-basic"
            />


            <div style={{ padding: 8, cursor: 'pointer' }}>
              <div style={{ width: 24, height: 24 }}>
                <Icon name="emoji" />
              </div>
            </div>

            <div style={{ padding: 8, cursor: 'pointer' }}>
              <Button
                onClick={() => handleAddMessage()}
                sx={{ padding: 0, color: 'white', marginLeft: '5px' }} variant="contained">Send
              </Button>
            </div>


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

        </Toolbar>
      </Paper>
    )
  }


  return (
    <div
      // style={{ display: 'grid', marginTop: 20, gridTemplateColumns: '1fr 1fr 3fr' }}
      style={{
        ...{
          display: 'flex',
          marginTop: 20
        },
        ...folderListOpen && width < 600 ? {
          flexDirection: 'column'
        } : {},
        ...width < 600 ? {
          height: '90vh'
        } : {}
      }}
    >
      {folderListOpen && width < 600 &&
        <FolderList setFolderListOpen={setFolderListOpen} />
      }
      {!folderListOpen && width < 600 &&
        <MessagesCont></MessagesCont>
      }

      {width >= 600 &&
        <FolderList setFolderListOpen={setFolderListOpen} />
      }
      {width >= 600 &&
        <MessagesCont></MessagesCont>
      }
    </div>
  )
}
