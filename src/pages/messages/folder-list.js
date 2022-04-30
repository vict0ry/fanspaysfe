import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { loadChats, loadChatMessages } from '../../modules/messages.action'
import { SocketContext } from '../../context/socket'

export const FolderList = () => {
  const socket = useContext(SocketContext)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadChats())
  }, [])
  const chatList = useSelector(state => state.messages.chatList)
  const selectedChatId = useSelector(state => state.messages.selectedChatId)

  return (
    <Paper>
      <List style={{ overflowY: 'scroll', width: '100%', minWidth: '250px', maxHeight: '400px' }}>
        {chatList?.map(({ users, latestMessage, _id }, index) => {
          return (
            <div key={index}>
              <ListItem onClick={() => {
                dispatch(loadChatMessages(_id))
                socket.emit('join room', _id)
              }} style={{ background: selectedChatId === _id ? 'lightGray' : 'white' }}
                        button key={users[0]}>
                <ListItemIcon>
                  <img style={{ borderRadius: '50%' }}
                       src="https://demo.youdate.website/content/cache/1/HYBzfofXl4m5Phvb0AfJZP_Tvw16XXWz.jpg/e5e917eef160043206fdd306dabfb4d9.jpg"
                       alt="" />
                </ListItemIcon>
                <div>
                  <div>{users[0].firstName + ' ' + users[0].lastName}</div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'gray'
                  }}>{latestMessage?.content.slice(0, 20)}...
                  </div>
                </div>
              </ListItem>
            </div>

          )
        })}
      </List>
    </Paper>
  )
}
