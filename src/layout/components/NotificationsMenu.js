import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Popover from '@mui/material/Popover'
import * as React from 'react'
import { Paper } from '@mui/material'
import { MiniUser } from '../../pages/profile/components/MiniUser'

export const NotificationsMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return <div>
    <IconButton
      size="large"
      aria-describedby={id}
      onClick={handleClick}
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={17} color="error">
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
        <div>
          Uzivatel vas pridal do slacku
        </div>
        <div>
          Uzivatel vas pridal do slacku
        </div>
      </Paper>
    </Popover>
  </div>
}
