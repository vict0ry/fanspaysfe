import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { NotificationsMenu } from './components/NotificationsMenu'
import { MessagesMenu } from './components/MessagesMenu'
import { logoutUser } from '../redux/actions/user.action'
import { MiniUser } from '../pages/profile/components/MiniUser'
import { beURL } from '../config'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import LanguageIcon from '@mui/icons-material/Language'
import Drawer from '@mui/material/Drawer'
import { SharedLeftMenu } from './components/SharedLeftMenu'
import { Container } from '@material-ui/core'
import axios from 'axios'
import { Autocomplete, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router'
import { SocketContext } from '../context/socket'

const drawerWidth = 240


export default function SearchBar({ window }) {
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }))
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = window !== undefined ? () => window().document.body : undefined


  let connected = false
  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user)
  const { t } = useTranslation()
  const socket = useContext(SocketContext)


  useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.id)
    });
    socket.emit('pikachu', 'ahoj')
    socket.emit('setup', loggedUser.userData)

    socket.on('connected', (data) => {
      console.log('connected : ', data);
      connected = true
    })
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
  const navigate = useNavigate();


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
            window.location.replace('/')
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
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('EN')
  const [options, setOptions] = useState([]);

  const handleChangeLanguage = (evt) => {
    const lang = evt.target.value
    i18n.changeLanguage(lang)
  }

  const handleInputChange = (e) => {
    return axios.get('/api/users/search/' + e.target.value).then(({data}) => {
      setOptions(data);
    });
  }

  const handleSearchChange = (e) => {
    document.location.replace('/profile/'+e.target.textContent);
  }

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <div style={{ padding: '10px' }}>
          <SharedLeftMenu />
        </div>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container component="main" maxWidth="lg">
          <Toolbar>
            <Box
              component="img"
              onClick={handleDrawerToggle}
              sx={{
                content: {
                  xs: `url('/mobileLogo.svg')`, //img src from xs up to md
                  md: `url('/logo.svg')`  //img src from md and up
                },
                width: {
                  xs: '150px',
                  md: '150px'
                }
              }}
              alt="Logo"
            />
            <Box sx={{ marginLeft: '10px', display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <Autocomplete
                onInputChange={handleInputChange}
                onChange={handleSearchChange}
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Users" />}
              />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <FormControl fullWidth>
                <Select
                  variant={'outlined'}
                  sx={{ height: '50%', mt: 2.5, border: 'none', width: '100%' }}
                  IconComponent={LanguageIcon}
                  defaultValue={'EN'}
                  onChange={handleChangeLanguage}
                >
                  <MenuItem value={'EN'}>EN</MenuItem>
                  <MenuItem value={'CS'}>CZ</MenuItem>
                  <MenuItem value={'RU'}>RUS</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <Link to={'/'}>{t('NAVBAR.HOME_PAGE')}</Link>
            </Box>
            {!loggedUser.userData ? <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <Link to={'/register'}>{t('NAVBAR.REGISTER')}</Link>
            </Box> : ''}
            {loggedUser.userData ? <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <Link to={'/users'}>{t('NAVBAR.USERS')}</Link>
            </Box> : '' }
            {!loggedUser.userData ? <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <Link to={'/login'}>{t('NAVBAR.LOGIN')}</Link>
            </Box> : ''}
            {loggedUser.userData ? <Box sx={{display: 'flex'}}><MessagesMenu /> <NotificationsMenu /></Box> : '' }
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Typography sx={{ color: 'black' }} variant={'h6'}>{loggedUser?.userData?.username}</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                <img
                  style={{ borderRadius: '100%' }}
                  src={beURL + loggedUser?.userData?.profilePic}
                  alt=""
                  width={'50px'}
                />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <img
                  style={{ borderRadius: '100%' }}
                  src={beURL + loggedUser?.userData?.profilePic}
                  alt=""
                  width={'50px'}
                />
              </IconButton>
            </Box>
          </Toolbar>
          </Container>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  )
}

