import Box from '@mui/material/Box'
import { MiniUser } from '../../pages/profile/components/MiniUser'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './sharedLeftMenuStyles.css'
import axios from 'axios'

const iconStyle = {
  marginRight: '10px'
}

const balanceStyles = {
  background: 'white',
  padding: '5px',
  borderRadius: 20,
  marginLeft: 4
}

export const SharedLeftMenu = () => {
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    -
      axios.get('/api/credit').then(({ data }) => {
        setBalance(data.total)
      })
  }, [])
  const linkStyles = { color: '#5D5E65', fontWeight: '600', padding: '5px 0', lineHeight: '24px' }
  const user = useSelector(state => {
    return state.user.userData
  })
  return (
    <Box sx={{ minWidth: '300px', display: { xs: 'flex', lg: 'flex' }, flexDirection: 'column', color: 'black' }}>
      <Box style={{ marginBottom: '10px' }}>
        <MiniUser user={user} />
        <Link to={'/finance'}>
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#1A051D' }}>{t('COMMON.BALANCE')}:</span>
          <span style={balanceStyles}>
          <span style={{
            background: '-webkit-linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
            fontSize: 18,
            fontWeight: 700
          }}>
            $ {balance}
          </span>
        </span>
        </Link>
      </Box>
      <div className="link">
        <img style={iconStyle} src="/images/icons/user.svg" alt="my page" />
        <Link style={linkStyles} to={'/profile/'}>{t('USERMENU.MY_PAGE')}</Link>
      </div>
      <div className="link">
        <img style={iconStyle} src="/images/icons/wallet.svg" alt="my finance" />
        <Link style={linkStyles} to={'/finance'}>{t('USERMENU.FINANCE')}</Link>
      </div>
      <div className="link">
        <img style={iconStyle} src="/images/icons/chats-circle.svg" alt="" />
        <Link style={linkStyles} to={'/messages'}>{t('USERMENU.MESSAGES')}</Link>
      </div>
      <div className="link">
        <img style={iconStyle} src="/images/icons/chat-circle-dots.svg" alt="queries" />
        <Link style={linkStyles} to={'/'}>{t('USERMENU.QUERIES')}</Link>
      </div>
      {/*<div className="link">*/}
      {/*  <img style={iconStyle} src="/images/icons/speakerphone.svg" alt="feeds" />*/}
      {/*  <Link style={linkStyles} to={'/'}>{t('USERMENU.FEEDS')}</Link>*/}
      {/*</div>*/}
      {/*<div className="link">*/}
      {/*  <img style={iconStyle} src="/images/icons/pencil.svg" alt="" />*/}
      {/*  <Link style={linkStyles} to={'/edit'}>{t('USERMENU.EDIT_PROFILE')}</Link>*/}
      {/*</div>*/}
      {/*<div className="link">*/}
      {/*  <img style={iconStyle} src="/images/icons/shopping-cart.svg" alt="" />*/}
      {/*  <Link style={linkStyles} to={'/shop/'}>{t('USERMENU.MARKETPLACE')}</Link>*/}
      {/*</div>*/}
      {/*<div className="link">*/}
      {/*  <img style={iconStyle} src="/images/icons/money.svg" alt="" />*/}
      {/*  <Link style={linkStyles} to={'/customer'}>{t('USERMENU.TRANSACTIONS')}</Link>*/}
      {/*</div>*/}
      {/*<div className="link">*/}
      {/*  <img style={iconStyle} src="/images/icons/bookmark.svg" alt="" />*/}
      {/*  <Link style={linkStyles} to={'/'}>{t('USERMENU.BOOKMARKS')}</Link>*/}
      {/*</div>*/}
      <div className="link">
        <img style={iconStyle} src="/images/icons/settings.svg" alt="" />
        <Link style={linkStyles} to={'/edit'}>{t('USERMENU.SETTINGS')}</Link>
      </div>
    </Box>
  )
}
