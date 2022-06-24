import * as React from 'react'
import { useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'
import { SearchInput } from '../components/SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import { useTranslation } from 'react-i18next'
import { NotificationsMenu } from './components/NotificationsMenu'
import { MessagesMenu } from './components/MessagesMenu'
import { Container } from '@mui/material'
import { logoutUser } from '../redux/user.action'
import { MiniUser } from '../pages/profile/components/MiniUser'


export default function SearchBar() {
  let connected = false
  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user)
  const { t } = useTranslation()


  useEffect(() => {
    const io = require('socket.io-client')
    const socket = io('http://localhost:3003')
    socket.on('connect', () => {
      console.log(socket.id)
    })
    socket.emit('pikachu', 'ahoj')
    socket.emit('setup', loggedUser)

    socket.on('connected', () => connected = true)
    socket.on('message received', (newMessage) => {
      console.log(newMessage)
    })

    socket.on('notification received', () => {
      console.log('recieved')
    })
    emitNotification()


    function emitNotification(userId) {

      socket.emit('notification received', userId)
    }
  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {loggedUser.userData ?
        <MenuItem>
          <MiniUser user={loggedUser.userData}></MiniUser>
        </MenuItem>
        : ''}
      <MenuItem onClick={handleMenuClose}>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
          <Link style={{ color: 'black' }} to={'/profile'}>{t('NAVBAR.PROFILE')}</Link>
        </Box>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
          <Link style={{ color: 'black' }} to={'/customer'}>{t('NAVBAR.CREDIT_MANAGEMENT')}</Link>
        </Box>
      </MenuItem>
      <MenuItem>
        {loggedUser.userData ? <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
          <div onClick={() => {
            localStorage.clear()
            dispatch(logoutUser())
          }}>{t('NAVBAR.LOGOUT')}
          </div>
        </Box> : ''}
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Container maxWidth="lg">
            <Toolbar>
              {/*<IconButton*/}
              {/*  size="large"*/}
              {/*  edge="start"*/}
              {/*  color="inherit"*/}
              {/*  aria-label="open drawer"*/}
              {/*  sx={{ mr: 2 }}*/}
              {/*>*/}
              {/*  <MenuIcon />*/}
              {/*</IconButton>*/}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                NONAME.cz
              </Typography>
              <SearchInput />
              <Box sx={{ flexGrow: 1 }} />
              {!loggedUser.userData ? <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                <Link to={'/register'}>{t('NAVBAR.REGISTER')}</Link>
              </Box> : ''}

              <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                <Link to={'/'}>{t('NAVBAR.HOME_PAGE')}</Link>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                <Link to={'/users'}>{t('NAVBAR.USERS')}</Link>
              </Box>
              {!loggedUser.userData ? <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                <Link to={'/login'}>{t('NAVBAR.LOGIN')}</Link>
              </Box> : ''}

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MessagesMenu />
                <NotificationsMenu />
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  )
}
