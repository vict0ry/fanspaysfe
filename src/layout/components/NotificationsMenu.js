import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Popover from '@mui/material/Popover'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Paper } from '@mui/material'
import axios from 'axios'
import Divider from '@mui/material/Divider'
import { beURL } from '../../config'

export const UserNotification = ({ user, type }) => {
  let description
  if (type === 'commentLike') {
    description = 'vam lajknul comment'
  } else if(type === 'postLike') {
    description = 'vame lajknul post'
  } else {
    description = 'ERROR_EVENT'
  }
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
      <div style={{ fontSize: '0.8rem', color: 'gray' }}>@{user.username}</div>
      <div style={{ fontSize: '1rem', color: 'black' }}>
        {user.firstName + ' ' + user.lastName}
      </div>
      <div className="description" style={{ color: 'gray' }}>{description}</div>
    </div>
  </div>
}
export const NotificationsMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    axios.get('/api/notifications').then(res => {
      setNotifications(res.data)
    })
  }, [])

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return <div>
    <IconButton
      size="large"
      aria-describedby={id}
      onClick={handleClick}
      aria-label="show 17 new notifications"
    >
      <Badge badgeContent={notifications.length} color="error">
        <NotificationsIcon />
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
        {notifications.map(notification => {
          return <div>
            {<UserNotification type={notification.notificationType} user={notification.userFrom} />}
            <Divider />
          </div>
        })}
      </Paper>
    </Popover>
  </div>
}
