import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { SocketContext } from '../../context/socket'
import { HeaderSideBar } from './messagesSideBarHeader'
import Box from '@mui/material/Box'
import useWindowDimensions from '../../useWindowDimensions'
import { loadChats } from '../../redux/actions/messages.action'

export const FolderList = ({setFolderListOpen}) => {
  const socket = useContext(SocketContext)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadChats())
  }, [])
  const chatList = useSelector(state => state.messages.chatList)
  const selectedChatId = useSelector(state => state.messages.selectedChatId)

  const {height, width} = useWindowDimensions();

  const listStyles = {
    overflowY: 'scroll',
    width: "100%",
    minWidth: 300,
    maxHeight: '800px',
    position: "relative",
  }

  const userNameStyle = {
    fontSize: 18,
    fontWeight: 700
  }

  const usernameStyle = {
    fontSize: 16,
    fontWeight: 600,
    color: "#B3B3B3"
  }

  const listItemStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    borderBottom: "1px solid #ECE9F1",
    paddingRight: 8
  }

  const bgListItem = {
    background: "#fff"
  }


  return (
    <Paper
      width
    >

      <List style={listStyles}>
        <ListItem style={listItemStyles}>
          <HeaderSideBar />
        </ListItem>

        {chatList?.map(({ users, latestMessage, _id }, index) => {

          if(selectedChatId === _id){
            bgListItem.background = "#ECF0F1";
          }

          return (
            <ListItem
              onClick={() => {
                dispatch(loadChatMessages(_id))
                socket.emit('join room', _id)
                setFolderListOpen(false)
              }}
              style={listItemStyles}
              button
              key={index}
            >
              <Box style={{display: "flex"}}>
                <ListItemIcon>
                  <img style={{ borderRadius: '50%' }}
                      src="https://demo.youdate.website/content/cache/1/HYBzfofXl4m5Phvb0AfJZP_Tvw16XXWz.jpg/e5e917eef160043206fdd306dabfb4d9.jpg"
                      alt="" />
                </ListItemIcon>
                <Box>
                  <Box style={userNameStyle}>{users[0].firstName + ' ' + users[0].lastName}</Box>
                  <Box style={usernameStyle}>
                    @{users[0].username}
                  </Box>
                </Box>
              </Box>
              <Box
                onClick={(e) => {
                  // e.stopPropagation()
                  // console.log(e.target.style.height)
                }}
                style={{
                  marginTop: 10,
                  maxWidth: "100%",
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#000",
                  lineHeight: "1.2em",
                  height: "32px",
                  overflow: "hidden"
                }}
              >
                {latestMessage &&
                  latestMessage.content.slice(0, 60)
                }
                {latestMessage && latestMessage.content.length > 60 &&
                  "..."
                }
              </Box>
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}
