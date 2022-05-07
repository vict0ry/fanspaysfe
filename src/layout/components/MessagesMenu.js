import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import Popover from '@mui/material/Popover'
import * as React from 'react'
import { Paper } from '@mui/material'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { t } from 'i18next'
import { Link } from 'react-router-dom'

export const MessagesMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
      <Badge badgeContent={17} color="error">
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
        <div>
          Uzivatel vas pridal do slacku
        </div>
        <div>
          Uzivatel vas pridal do slacku
        </div>
        <Divider />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
          <Link style={{ color: 'black' }} to={'/messages'}>{t('NAVBAR.MESSAGES')}</Link>
        </Box>
      </Paper>
    </Popover>
  </div>
}
