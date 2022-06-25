import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import Popover from '@mui/material/Popover'
import * as React from 'react'
import { useEffect } from 'react'
import { Paper } from '@mui/material'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { beURL } from '../../config'

export const UserMessages = ({ user, description }) => {
  return <div style={{ display: 'flex', marginBottom: 20 }} className="user-info">
    <div className="avatar-wrapper" style={{ marginRight: '5px' }}>
      <img
        style={{ borderRadius: '100%' }}
        src={beURL + '/' + user?.profilePic}
        alt=""
        width={'50px'}
      />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}
         className="user-metadata">
      <div style={{ fontSize: '0.8rem', color: 'gray' }}>@{user?.username}</div>
      <div style={{ fontSize: '1rem', color: 'black' }}>
        {user?.firstName + ' ' + user?.lastName}
      </div>
      <div className="description"
           style={{ color: 'gray', maxWidth: '250px' }}>{description?.substring(0, 45) + '...'}</div>
    </div>
  </div>
}
export const MessagesMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [chatList, setChatList] = React.useState([])

  useEffect(() => {
    axios.get('/api/chats/').then(data => {
      setChatList(data.data)
    })
  }, [])

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover-messages' : undefined
  return <div>
    <IconButton
      size="large"
      aria-describedby={id}
      onClick={handleClick}
      aria-label="show 17 new mesages"
      color="inherit"
    >
      <Badge badgeContent={chatList.length} color="error">
        <MailIcon />
      </Badge>
    </IconButton>
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
    >
      <Paper sx={{
        padding: '20px',
        ':hover': {
          boxShadow: 5
        }
      }}>
        {chatList?.map(chat => {
          return <div>
            <UserMessages user={chat?.latestMessage?.sender} description={chat?.latestMessage?.content} />
          </div>
        })}
        <Divider />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
          <Link style={{ color: 'black' }} to={'/messages'}>{t('NAVBAR.MESSAGES')}</Link>
        </Box>
      </Paper>
    </Popover>
  </div>
}
