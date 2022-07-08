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
import { loadChatMessages, loadChats, sendMessage } from '../../redux/actions/messages.action'
import axios from 'axios'
import { SocketContext } from '../../context/socket'
import { t } from 'i18next'
import { SharedLeftMenu } from '../../layout/components/SharedLeftMenu'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { beURL } from '../../config'

const messageElement = React.createRef();


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
  }, [])

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
      lineHeight: "100%"
    },
    chatController: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      height: 24,
      width: 24,
      marginLeft: 8,
      cursor: "pointer"
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

  const Message = ({i, id}) => {

    const stylesMessage = {
      myMessageCont: {
        justifyContent: "end"
      },
      anotherMessageCont: {
        justifyContent: "start"
      },
      messageCont: {
        display: "flex",
        paddingBottom: 16,

      },
      avatar: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        marginRight: 8,


      },

      messageCont2: {
        display: "flex",
        flexDirection: "column"
      },
      alignItemsEnd: {
        alignItems: "end"
      },
      alignItemsStart: {
        alignItems: "start"
      },

      messageInfo: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
      },

      nameAuthor: {
        fontSize: 14,
        fontWeight: 700,
        color: "#000",
        textAlign: "center"
      },
      timeMessage: {
        fontSize: 14,
        fontWeight: 500,
        color: "#B3B3B3",
        textAlign: "center"
      },

      message: {
        padding: 12,
        borderRadius: 8,
        maxWidth: 390,
        fontSize: 14,
        fontWeight: 500,
        color: "#1A051D",

      },

      myMessage: {
        background: '#d1e3ff',
        textAlign: "right"
      },
      anotherMessage: {
        background: '#e2e2e2',

      },

    }

    const message = React.useRef(null);
    const messageInfo = React.useRef(null);
    debugger;

    useEffect(() => {
      if(message.current.offsetWidth < 190){
        const flexDirectionColumn = {flexDirection: "column", marginBottom: 8};
        messageInfo.current.style = {
          ...stylesMessage.messageInfo,
          ...flexDirectionColumn,
          ...isSender(i) ? stylesMessage.alignItemsEnd: stylesMessage.alignItemsStart}
      }
    }, [message.current])

    return(
      <div
        style={{
          ...stylesMessage.messageCont,
          ...isSender(i) ? stylesMessage.myMessageCont
            : stylesMessage.anotherMessageCont}}
        className="userPlusMessage"
      >

        <div className="user">
          <img
            style={stylesMessage.avatar}
            src={beURL + i?.sender?.profilePic}
            alt="" />
        </div>

        <div key={id}
             style={{...stylesMessage.messageCont2, ...isSender(i) ? stylesMessage.alignItemsEnd: stylesMessage.alignItemsStart}}>

          <div ref={messageInfo} style={{...stylesMessage.messageInfo}}>
            <div style={stylesMessage.nameAuthor}>{isSender(i) ? i.sender.firstName + ' ' + i.sender.lastName : ''}</div>
            <div style={stylesMessage.timeMessage}>{new Date(i.createdAt).toLocaleDateString('cs-CZ')}</div>
          </div>

          <div ref={message} style={{...stylesMessage.message, ...isSender(i) ? stylesMessage.myMessage : stylesMessage.anotherMessage}}>
            {i.content}
          </div>





          {/* {i.content}
            <span style={{ fontSize: '12px', color: 'gray' }}>06.00 AM</span> */}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', marginTop: 20, gridTemplateColumns: '1fr 1fr 3fr', marginBottom: '20px' }}>
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
              {t('Online')}
              <div style={styles.statusCircle}></div>
            </div></div>}
          </div>
          <div style={styles.headerRight}>
            <Button variant="contained">{t('Send request')}</Button>
            <div style={styles.chatController}>
              <MoreVertIcon />
            </div>
          </div>
        </Box>
        <Toolbar style={{ display: 'flex', flexDirection: "column", padding: 0}}>
          <Box style={styles.messages_cont}>
            {selectedChatMessages.length ? selectedChatMessages.map((i, id) => {
              return (
                <Message i={i} id={id} />
              )
            }) : <strong style={{ padding: '20px' }}>{t('COMMON.NOTHING_HERE_YET')}</strong>}

          </Box>

          <Box style={styles.messagesController}>


            <div style={{padding: 8, cursor: "pointer"}}>
              <div style={{width: 24, height: 24}}>
                <img src="/images/icons/attachment.svg" alt="" />
              </div>
            </div>

            <TextField onChange={() => handleMessageOnKeyDown(event.target.value)}
                       variant="standard"
                       value={userMessage}
                       InputProps={{disableUnderline: true}}
                       hiddenLabel
                       sx={{ width: '100%', padding: '0', marginLeft: 0, border: "0" }} id="outlined-basic"
            />


            <div style={{padding: 8, cursor: "pointer"}}>
              <div style={{width: 24, height: 24}}>
                <img src="/images/icons/face-happy.svg" alt="" />
              </div>
            </div>

            <div style={{padding: 8, cursor: "pointer"}}>
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
    </div>
  )
}
